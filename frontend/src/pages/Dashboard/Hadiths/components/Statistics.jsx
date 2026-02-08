

function Statistics(){

    return(
        <>
            <div className="mt-6 sm:mt-8 animate-on-scroll visible">
                <div className="bg-linear-to-r from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-5 border border-primary/20">
                    <h3 className="text-deep-blue text-md sm:text-lg font-bold mb-3">Hadith Statistics</h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="text-center">
                            <p className="text-xl sm:text-2xl font-bold text-primary">12</p>
                            <p className="text-xs text-gray-500">Days Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl sm:text-2xl font-bold text-accent">18</p>
                            <p className="text-xs text-gray-500">Days Remaining</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Statistics;
