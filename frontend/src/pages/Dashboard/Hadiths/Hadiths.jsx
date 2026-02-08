import PreviousCard from "./components/PreviousCard";
import Statistics from "./components/Statistics";
import Todays from "./components/Todays";
import TodaysHadiths from "./components/TodaysHadiths";


function Hadiths(){

    return(
        <>

            <section className="content-section">

                <div className="mb-6 animate-on-scroll visible">

                    <Todays/>
                    <TodaysHadiths/>

                </div>
                <div className="animate-on-scroll visible">
                    
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-deep-blue text-md sm:text-lg font-bold">Previous Days</h3>
                        <button className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors">View All</button>
                    </div>
                    
                    <div class="grid gap-3 sm:gap-4 hadith-previous-grid">
                        <PreviousCard/>
                        <PreviousCard/>
                        <PreviousCard/>
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