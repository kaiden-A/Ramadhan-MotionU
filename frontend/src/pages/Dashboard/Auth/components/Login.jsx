
function Login({setAuth}){

    return(
        <>
        
            <form id="loginForm" className="auth-form space-y-4">
                <div>
                    <input type="email" placeholder="Email Address" className="input-field" required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" className="input-field" required/>
                </div>
                <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
                </div>
                <button type="submit" className="btn-primary w-full">
                    Login to Account
                </button>
                <div className="text-center text-sm text-gray-500">
                    Don't have an account? <a onClick={() => setAuth('login')} className="text-primary font-medium hover:underline">Sign up here</a>
                </div>
            </form>
        </>
    )

}

export default Login;