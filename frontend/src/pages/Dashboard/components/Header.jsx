import { useNavigate } from "react-router-dom";


function Header(){

    const navigate = useNavigate()

    return(
        <>
        <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md p-4 justify-between border-b border-gray-100">
            <div className="flex items-center gap-3 hover:cursor-pointer" onClick={() => navigate('/')}>
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
            
            <div className="flex items-center gap-2">
                <button id="loginBtn" className="flex cursor-pointer items-center justify-center rounded-full size-10 bg-transparent text-[#111418] transition-colors hover:bg-gray-100">
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>
        </header>
        </>
    )

}

export default Header;