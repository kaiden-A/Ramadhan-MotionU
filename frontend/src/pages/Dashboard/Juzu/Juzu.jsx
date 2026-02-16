import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "../../../components/Hooks/useScrollAnimation";
import JuzuCard from "./components/JuzuCard";
import ProgressSummary from "./components/ProgressSummary";
import Statistics from "./components/Statistics";
import { getProgress } from "./api/juzu";
import LoadingSpinner from "../../../components/reusable/Loading";
import { useState , useMemo } from "react";

function Juzu(){

    useScrollAnimation();
    const [visible , setVisible] = useState(4);


    const {data , isLoading , isError , error} = useQuery({
        queryKey : ['juzu'],
        queryFn  : getProgress
    });

    const visibleProgress = useMemo(() => {
        if (!data?.progress) return [];

        return data.progress.slice(0, visible);
    }, [data, visible]);


    if(isLoading) return <div className="flex h-64 w-full items-center justify-center">
            <LoadingSpinner size="md" />
        </div>


    return(
        <>

            <section className="content-section" id="juzu-section">

                <div className="mb-6 animate-on-scroll">

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-deep-blue text-xl sm:text-2xl font-bold tracking-tight section-header">Quran Progress</h2>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">30 TOTAL</span>
                    </div>

                    <ProgressSummary
                        percentage={data.summary.percentage}
                        completed={data.summary.completedJuz}
                    />

                </div>

                <div className="animate-on-scroll">
                    
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-deep-blue text-md sm:text-lg font-bold">Reading List</h3>
                        <button onClick={() => setVisible(30)} className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors">View All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 juzu-grid">
                        {
                            visibleProgress.map((d , i) => 
                                <JuzuCard
                                    key={i}
                                    number={i + 1}
                                    isFinished={d.completed}
                                />
                            )
                        }
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={() => setVisible(v => v + 4)} 
                            className="load-more-btn bg-primary/10 hover:bg-primary/20 hover:cursor-pointer text-primary font-medium py-3 px-6 rounded-xl transition-colors">
                            Load More
                        </button>
                    </div>

                </div>

                <Statistics
                    completed={data.summary.completedJuz}
                    noncompleted={data.summary.totalJuz - data.summary.completedJuz - 1}
                />

            </section>
        </>
    )

}

export default Juzu;