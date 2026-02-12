import { useState } from "react";
import { login } from "../api/auth";
import { useAuthStore } from "../../../../../stores/authStores";
import LoadingSpinner from "../../../../components/reusable/Loading";

function Login({setAuth}){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [send , setSend] = useState(false);

    const close = useAuthStore((state) => state.closeLoginModal);

    const sendForm = async (e) => {

        e.preventDefault();
        setSend(true);

        try{
            
            const res = await login({
                email , password
            })

            if(res.success){
                close();
            }

        }catch(err){
            console.error(err);
        }finally{
            setSend(false);
        }

    }

    return(
        <>
        
            <form id="loginForm" className="auth-form space-y-4" onSubmit={sendForm}>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="input-field" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
                </div>
                <button disabled={send ? true : false  } type="submit" className="btn-primary w-full">
                    {send && <LoadingSpinner size="sm" color="text-white"/>}
                    {!send && 'Login to Account'}
                </button>
                <div className="text-center text-sm text-gray-500">
                    Don't have an account? <a onClick={() => setAuth('signup')} className="text-primary font-medium hover:underline">Sign up here</a>
                </div>
            </form>
        </>
    )

}

export default Login;