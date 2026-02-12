import { useState } from "react";
import { signup } from "../api/auth";
import { useAuthStore } from "../../../../../stores/authStores";
import LoadingSpinner from "../../../../components/reusable/Loading";

function Signup({setAuth}){

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [rePass , setRePass] = useState("");

    const [send , setSend] = useState(false);

    const close = useAuthStore((state) => state.closeLoginModal);


    const sendForm = async (e) => {
        
        e.preventDefault();
        setSend(true);

        if (password !== rePass) return null;

        try{

            const res = await signup({
                name , email , password
            });

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
        
        <form id="signupForm" className="auth-form space-y-4" onSubmit={sendForm}>
            <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="input-field" 
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="input-field" 
                    required
                    value={rePass}
                    onChange={(e) => setRePass(e.target.value)}
                />
            </div>
            <button disabled={send ? true : false} type="submit" className="btn-primary w-full hover:cursor-pointer">
                {send && <LoadingSpinner size="sm" color="text-white" />}
                {!send && 'Create Account'}
            </button>
            <div className="text-center text-sm text-gray-500">
                Already have an account? <a onClick={() => setAuth('login')} className="text-primary font-medium hover:underline">Login here</a>
            </div>
        </form>
        </>
    )

}

export default Signup;