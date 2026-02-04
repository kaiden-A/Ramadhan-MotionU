
function Footer(){

    return(
            <footer className="mt-8 px-6 py-12 border-t border-blue-100 flex flex-col items-center bg-white/50">
            <div className="max-w-6xl w-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                        {/* Logo Container */}
                        <div className="logo-container size-10 rounded-xl shadow-lg mr-3 transition-all duration-500 overflow-hidden flex items-center justify-center bg-white">
                            <img 
                                src="/logo.png" 
                                alt="Motion-U Logo" 
                                className="w-full h-full object-contain p-1.5" 
                            />
                        </div>
                        
                        {/* Brand Name */}
                        <h2 className="text-deep-blue text-lg font-bold leading-tight tracking-[-0.015em]">
                            Motion-U
                        </h2>
                    </div>
                        <p className="text-slate-500 text-sm text-center md:text-left max-w-md">
                            Your digital companion for a meaningful Ramadhan. Track, reflect, and grow spiritually.
                        </p>
                    </div>
                    
                    <div className="flex gap-6">
                        <a className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110" href="#">
                            <span className="material-symbols-outlined text-2xl">public</span>
                        </a>
                        <a className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110" href="#">
                            <span className="material-symbols-outlined text-2xl">alternate_email</span>
                        </a>
                        <a className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110" href="#">
                            <span className="material-symbols-outlined text-2xl">share</span>
                        </a>
                    </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-blue-100 text-center">
                    <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-extrabold">
                        © 2026 Motion-U. All Rights Reserved.
                    </p>
                    <p className="text-slate-400 text-xs mt-2">
                        Designed with ❤️ for the Muslim community
                    </p>
                </div>
            </div>
        </footer>
    
    )

}

export default Footer;