import { useState } from "react";


function Footer({choose , setChoose}){

    const open = "text-primary active";
    const close = "text-[#617589]";

    return(

        <>
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 sm:px-6 py-3 flex justify-around items-center z-50">
            <button className={`nav-tab flex flex-col items-center gap-1 hover:cursor-pointer ${choose === "hadiths" ? open : close}`} onClick={() => setChoose('hadiths')}>
                <span className="material-symbols-outlined filled-icon text-2xl">auto_stories</span>
                <span className="text-[10px] font-bold">Hadith</span>
            </button>
            <button className={`nav-tab flex flex-col items-center gap-1 hover:cursor-pointer ${choose === "juzu" ? open : close}`} onClick={() => setChoose('juzu')} >
                <span className="material-symbols-outlined text-2xl">menu_book</span>
                <span className="text-[10px] font-medium">Juzu</span>
            </button>
        </nav>
        </>
    )

}

export default Footer;
