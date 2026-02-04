

function Header(){

    return(
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
            <div className="flex items-center p-4 justify-between max-w-6xl mx-auto">
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
                <button className="notify-button bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                    Join Waitlist
                </button>
            </div>
        </header>
    )

}

export default Header;