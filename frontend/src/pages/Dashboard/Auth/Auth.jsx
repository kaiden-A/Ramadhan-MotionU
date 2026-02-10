import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuthStore } from "../../../../stores/authStores";
import { useState } from "react";

function Auth() {
  const isOpen = useAuthStore((state) => state.showLoginModal);
  const close = useAuthStore((state) => state.closeLoginModal);

  
  const [auth , setAuth] = useState('login')

  if (!isOpen) return null; 

  const usedColor = 'bg-primary text-white';
  const notUsedColor = 'bg-gray-100 text-gray-600';

  return (
        <div
            id="loginModal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={close}
        >
            <div
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
            {/* Close button */}
            <button
                onClick={close}
                className="absolute hover:cursor-pointer top-3 right-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
                <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Title */}
            <h3 className="text-xl font-bold text-deep-blue mb-4">
                Welcome to Motion-U
            </h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                <button
                    onClick={() => setAuth('login')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors hover:cursor-pointer ${
                    auth === 'login' ? usedColor : notUsedColor
                    }`}
                >
                    Login
                </button>
                <button
                    onClick={() => setAuth('signup')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors hover:cursor-pointer ${
                    auth === 'signup' ? usedColor : notUsedColor
                    }`}
                >
                    Sign Up
                </button>
            </div>


            { auth === 'login'  ? <Login setAuth={setAuth} /> : <Signup setAuth={setAuth}/>}

            
            </div>
        </div>
  );
}

export default Auth;
