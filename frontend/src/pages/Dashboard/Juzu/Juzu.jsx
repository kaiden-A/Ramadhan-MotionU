import { useScrollAnimation } from "../../../components/Hooks/useScrollAnimation";
import JuzuCard from "./components/JuzuCard";
import ProgressSummary from "./components/ProgressSummary";
import Statistics from "./components/statistics";

function Juzu(){

    useScrollAnimation();

    return(
        <>

            <section className="content-section" id="juzu-section">

                <div className="mb-6 animate-on-scroll">

                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-deep-blue text-xl sm:text-2xl font-bold tracking-tight section-header">Quran Progress</h2>
                        <span class="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">30 TOTAL</span>
                    </div>

                    <ProgressSummary/>

                </div>

                <div className="animate-on-scroll">
                    
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-deep-blue text-md sm:text-lg font-bold">Reading List</h3>
                        <button className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors">View All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 juzu-grid">
                        <JuzuCard
                            number={1}
                            isFinished={true}
                        />
                        <JuzuCard
                            number={2}
                            isFinished={true}
                        />
                        <JuzuCard
                            number={3}
                            isFinished={false}
                        />
                        <JuzuCard
                            number={4}
                            isFinished={false}
                        />
                        
                    </div>

                    <div className="text-center mt-6">
                        <button className="load-more-btn bg-primary/10 hover:bg-primary/20 hover:cursor-pointer text-primary font-medium py-3 px-6 rounded-xl transition-colors">
                            Load More
                        </button>
                    </div>

                </div>

                <Statistics/>

            </section>
        </>
    )

}

export default Juzu;