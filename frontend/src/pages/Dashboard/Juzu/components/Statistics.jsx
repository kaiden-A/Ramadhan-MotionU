

function Statistics(){

    return(
        <>
            <div class="mt-6 sm:mt-8 animate-on-scroll">
                <div class="bg-linear-to-r from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-5 border border-primary/20">
                    <h3 class="text-deep-blue text-md sm:text-lg font-bold mb-3">Quick Stats</h3>
                    <div class="grid grid-cols-3 gap-3 sm:gap-4">
                        <div class="text-center">
                            <p class="text-lg sm:text-xl font-bold text-primary">2</p>
                            <p class="text-xs text-gray-500">Completed</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg sm:text-xl font-bold text-accent">1</p>
                            <p class="text-xs text-gray-500">Current</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg sm:text-xl font-bold text-gray-500">27</p>
                            <p class="text-xs text-gray-500">Remaining</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Statistics;