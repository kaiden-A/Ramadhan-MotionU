

function ProgressSummary({percentage}){

    return(
        <>
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 animate-on-scroll">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-4 sm:gap-6 justify-between items-end">
                            <div>
                                <p className="text-[#111418] text-base font-bold leading-normal">Your Progress</p>
                                <p className="text-[#617589] text-xs font-normal">Finish line: Juzu 30</p>
                            </div>
                            <div className="text-right">
                                <p className="text-primary text-xl sm:text-2xl font-bold leading-none juzu-counter">2/30</p>
                                <p className="text-[#617589] text-[10px] uppercase tracking-widest mt-1">Juzus Read</p>
                            </div>
                        </div>
                    <div className="relative">
                        <div className="rounded-full bg-gray-100 h-3 w-full overflow-hidden">
                            <div className="progress-fill h-full rounded-full bg-linear-to-r from-primary to-primary/80 progress-bar" style={{width: "6.67%"}}></div>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs font-bold text-primary progress-percentage">
                            7%
                        </div>
                    </div>
                 </div>
            </div>
            
        
        </>
    )
}

export default ProgressSummary;