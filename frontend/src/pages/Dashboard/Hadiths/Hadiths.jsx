import { useState } from "react";
import { useScrollAnimation } from "../../../components/Hooks/useScrollAnimation";
import PreviousCard from "./components/PreviousCard";
import Statistics from "./components/Statistics";
import Todays from "./components/Todays";
import TodaysHadiths from "./components/TodaysHadiths";
import HadithsDetails from "./components/HadithsDetails";


function Hadiths(){

    const [openDetail , setOpenDetail] = useState(false);
    const [details , setDetails] = useState({});
    
    useScrollAnimation();
    

    return(
        <>
            {openDetail && <HadithsDetails onClose={() => setOpenDetail(false)}/>}
            <section className="content-section">

                <div className="mb-6 animate-on-scroll">

                    <Todays/>
                    <TodaysHadiths
                        open={() => setOpenDetail(true)}
                    />

                </div>
                <div className="animate-on-scroll visible">
                    
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-deep-blue text-md sm:text-lg font-bold">Previous Days</h3>
                        <button className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors">View All</button>
                    </div>
                    
                    <div class="grid gap-3 sm:gap-4 hadith-previous-grid">
                        <PreviousCard
                            open={() => setOpenDetail(true)}
                        />
                        <PreviousCard/>
                        <PreviousCard/>
                        <PreviousCard/>
                        
                    </div>

                    <Statistics/>
                </div>

            </section>
        
        </>
    )

}

export default Hadiths;