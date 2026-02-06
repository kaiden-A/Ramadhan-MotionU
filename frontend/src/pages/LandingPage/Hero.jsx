import { useScrollAnimation } from "../../components/Hooks/useScrollAnimation";
import Form from "./Form";

function Hero() {
  useScrollAnimation();

  return (
    <section className="relative py-10 md:py-16 overflow-hidden gradient-bg geometric-bg">
      {/* Decorative Orbs - Using modern theme variables */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      
      {/* Main Grid: Replaces .hero-content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] items-center gap-12 max-w-7xl mx-auto px-6">
        
        {/* Text Side: Replaces .hero-text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold mb-6 uppercase tracking-wider animate-slide-up">
            Coming Soon
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 text-deep-blue">
            Your Spiritual Journey, <span className="text-primary">Digitized.</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-500px">
            A comprehensive companion for your Ramadhan goals. Track your progress, find daily wisdom, and strengthen your connection.
          </p>
          
          {/* Email Form */}
          <div className="w-full max-w-md animate-on-scroll">
            <Form/>
          </div>
        </div>
        
        {/* Visual Side: Logo Container */}
        <div className="flex justify-center mt-10 md:mt-0 animate-on-scroll">
        <div className="logo-container w-64 h-64 md:w-80 md:h-80 rounded-full p-8 md:p-12 transition-all duration-700 hover:scale-105">
            {/* The glass-morphism inner circle */}
            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden border border-white/20">
            
            <div className="text-center flex flex-col items-center">
                {/* Replace the MU div with this Image tag */}
                <img 
                src="/logo.png" 
                alt="Motion-U Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 animate-float drop-shadow-2xl"
                />
                
                <div className="text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                Motion-U
                </div>
            </div>

            </div>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;