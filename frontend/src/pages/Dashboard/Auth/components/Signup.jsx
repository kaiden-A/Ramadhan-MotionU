

function Signup({setAuth}){

    return(

        <>
        
        <form id="signupForm" className="auth-form space-y-4">
            <div>
                <input type="text" placeholder="Name" className="input-field" required/>
            </div>
            <div>
                <input type="email" placeholder="Email Address" className="input-field" required/>
            </div>
            <div>
                <input type="password" placeholder="Password" className="input-field" required/>
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" className="input-field" required/>
            </div>
            <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" required/>
                <label for="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
            </div>
            <button type="submit" className="btn-primary w-full">
                Create Account
            </button>
            <div className="text-center text-sm text-gray-500">
                Already have an account? <a onClick={() => setAuth('signup')} className="text-primary font-medium hover:underline">Login here</a>
            </div>
        </form>
        </>
    )

}

export default Signup;