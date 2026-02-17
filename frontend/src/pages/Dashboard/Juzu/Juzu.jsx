import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useScrollAnimation } from "../../../components/Hooks/useScrollAnimation";
import JuzuCard from "./components/JuzuCard";
import ProgressSummary from "./components/ProgressSummary";
import Statistics from "./components/Statistics";
import { getProgress, updateJuzu } from "./api/juzu";
import LoadingSpinner from "../../../components/reusable/Loading";
import { useState, useMemo } from "react";

function Juzu() {
    useScrollAnimation();
    const [visible, setVisible] = useState(4);
    const queryClient = useQueryClient();

    // 1. Fetching Data
    const { data, isLoading } = useQuery({
        queryKey: ['juzu'],
        queryFn: getProgress
    });

    // 2. Optimized Mutation for "Finish Juzu"
    const { mutate: handleFinishJuzu } = useMutation({
        mutationFn: (juzuId) => updateJuzu(juzuId),
        
        // Optimistic Update Logic
        onMutate: async (juzuId) => {
            // Cancel outgoing refetches so they don't overwrite our optimistic update
            await queryClient.cancelQueries({ queryKey: ['juzu'] });

            // Snapshot the previous value
            const previousData = queryClient.getQueryData(['juzu']);

            // Optimistically update to the new value
            queryClient.setQueryData(['juzu'], (old) => {
                if (!old) return old;

                const updatedProgress = old.progress.map((juzu, index) =>
                    (index + 1) === juzuId ? { ...juzu, completed: true } : juzu
                );

                const newCompletedCount = updatedProgress.filter(j => j.completed).length;

                return {
                    ...old,
                    progress: updatedProgress,
                    summary: {
                        ...old.summary,
                        completedJuz: newCompletedCount,
                        percentage: Math.round((newCompletedCount / old.summary.totalJuz) * 100),
                    },
                };
            });

            return { previousData };
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, juzuId, context) => {
            queryClient.setQueryData(['juzu'], context.previousData);
        },
        // Always refetch after error or success to ensure server sync
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['juzu'] });
        },
    });

    const visibleProgress = useMemo(() => {
        if (!data?.progress) return [];
        return data.progress.slice(0, visible);
    }, [data, visible]);

    if (isLoading) return (
        <div className="flex h-64 w-full items-center justify-center">
            <LoadingSpinner size="md" />
        </div>
    );

    return (
        <section className="content-section" id="juzu-section">
            <div className="mb-6 animate-on-scroll">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-deep-blue text-xl sm:text-2xl font-bold tracking-tight section-header">
                        Quran Progress
                    </h2>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">
                        {data?.summary?.totalJuz || 30} TOTAL
                    </span>
                </div>

                <ProgressSummary
                    percentage={data.summary.percentage}
                    completed={data.summary.completedJuz}
                />
            </div>

            <div className="animate-on-scroll">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-deep-blue text-md sm:text-lg font-bold">Reading List</h3>
                    <button 
                        onClick={() => setVisible(30)} 
                        className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors"
                    >
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 juzu-grid">
                    {visibleProgress.map((d, i) => (
                        <JuzuCard
                            key={i}
                            number={i + 1}
                            isFinished={d.completed || false}
                            // Pass the ID to the mutation
                            onToggle={() => handleFinishJuzu(i + 1)}
                        />
                    ))}
                </div>

                {visible < 30 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setVisible(v => v + 4)}
                            className="load-more-btn bg-primary/10 hover:bg-primary/20 hover:cursor-pointer text-primary font-medium py-3 px-6 rounded-xl transition-colors"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            <Statistics
                completed={data.summary.completedJuz}
                noncompleted={data.summary.totalJuz - data.summary.completedJuz}
            />
        </section>
    );
}

export default Juzu;