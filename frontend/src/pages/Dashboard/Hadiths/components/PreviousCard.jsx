
function PreviousCard({day , hadiths , pic}){

    return(
        <>
            <div class="hadith-card bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:border-primary/30 animate-on-scroll visible">
                <span class="text-[10px] font-bold text-gray-400 uppercase hadith-day">Day 11</span>
                <p class="text-sm font-medium mt-1 line-clamp-3 hadith-text">"Fasting is a shield; so when one of you is fasting he should not use foul or foolish talk."</p>
                <p class="text-[10px] text-primary mt-2 font-medium hadith-source">Sahih Muslim</p>
            </div>
        </>
    )

}

export default PreviousCard;