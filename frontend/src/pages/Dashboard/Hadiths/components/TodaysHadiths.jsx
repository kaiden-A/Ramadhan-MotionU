


function TodaysHadiths(){

    return(
        <>

            <div className="hadith-card bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-primary/20 relative overflow-hidden transition-all duration-300 animate-on-scroll visible">
                <div className="absolute -top-4 -right-4 size-20 sm:size-24 bg-primary/5 rounded-full blur-2xl animate-float"></div>
                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary animate-slide-left">
                        <span className="material-symbols-outlined filled-icon">auto_stories</span>
                        <span className="text-xs font-bold uppercase tracking-wider hadith-day">Today</span>
                    </div>
                    <p className="text-base sm:text-lg font-medium leading-relaxed hadith-text animate-slide-up" style={{animationDelay: "0.2s"}}>
                        "The best among you are those who learn the Quran and teach it."
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2 animate-fade-in" style={{animationDelay: "0.4s"}}>
                        <span className="text-[#617589] text-sm italic hadith-source">Sahih Bukhari</span>
                        <button className="share-hadith-btn flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                            <span className="material-symbols-outlined text-lg">share</span> Share
                        </button>
                    </div>
                </div>
            </div>
        
        </>
    )

}

export default TodaysHadiths;