
function Form(){

    return(
        <>
        
            <form className="flex flex-col gap-4">
              <div className="flex w-full items-stretch rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-lg shadow-blue-200/40 transition-all focus-within:ring-2 focus-within:ring-primary/20 hover:shadow-xl">
                <div className="text-slate-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input 
                  className="flex-1 bg-transparent border-none outline-hidden px-3 py-4 text-sm font-medium text-deep-blue placeholder:text-slate-400" 
                  placeholder="Enter your email" 
                  type="email" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                Notify me when we launch
              </button>
            </form>
        
        </>
    )
}

export default Form;
