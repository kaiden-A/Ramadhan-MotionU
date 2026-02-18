import { useMemo, useState } from "react";
import { useScrollAnimation } from "../../../components/Hooks/useScrollAnimation";
import PreviousCard from "./components/PreviousCard";
import Statistics from "./components/Statistics";
import Todays from "./components/Todays";
import TodaysHadiths from "./components/TodaysHadiths";
import HadithsDetails from "./components/HadithsDetails";
import { useQuery } from "@tanstack/react-query";
import { getHadiths } from "./api/hadiths";
import LoadingSpinner from "../../../components/reusable/Loading";

function Hadiths(){

    const [openDetail , setOpenDetail] = useState(false);
    const [viewAll , setViewAll] = useState(false);
    const [details , setDetails] = useState({});

    const {data , isLoading , isError , error} = useQuery({
        queryKey : ['hadiths'],
        queryFn  : getHadiths
    })

    console.log(data);


    useScrollAnimation();

    const previousHadiths = useMemo(() => {
        if (!data?.hadiths?.all) return [];

        const sorted = data.hadiths.all
            .slice()
            .sort((a, b) => b.hadithId - a.hadithId);

        return viewAll ? sorted : sorted.slice(0, 4);
    }, [data, viewAll]);


    if (isLoading) return <div className="flex h-64 w-full items-center justify-center">
            <LoadingSpinner size="md" />
        </div>
    
    if (isError) return <p>{error.message}</p>;

    return(
        <>
            {openDetail && <HadithsDetails hadiths={details} onClose={() => setOpenDetail(false)}/>}
            <section className="content-section">

                <div className="mb-6 animate-on-scroll">

                    <Todays
                        today={data.hadiths.today.hadithId}
                    />
                    <TodaysHadiths
                        hadiths={data.hadiths.today}
                        open={() => { setOpenDetail(true) ; setDetails(data.hadiths.today) }}
                    />

                </div>
                <div className="animate-on-scroll visible">
                    
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-deep-blue text-md sm:text-lg font-bold">Previous Days</h3>
                        <button onClick={() => setViewAll(true)} className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors hover:cursor-pointer">View All</button>
                    </div>
                    
                    <div class="grid gap-3 sm:gap-4 hadith-previous-grid">
                        {previousHadiths.length > 0 ? (
                            previousHadiths.map(h => (
                                <PreviousCard
                                    key={h.hadithId}
                                    hadiths={h}
                                    open={() => { 
                                        setOpenDetail(true); 
                                        setDetails(h); 
                                    }}
                                />
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                                <p className="text-gray-500 font-medium">No previous Hadiths found</p>
                                <p className="text-gray-400 text-sm">Hadiths will appear here once they are added.</p>
                            </div>
                        )}
                                                
                    </div>

                    <Statistics
                        complete={data.hadiths.all.length}
                        remain={30 - data.hadiths.all.length}
                    />
                </div>

            </section>
        
        </>
    )

}

export default Hadiths;