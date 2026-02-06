import { useScrollAnimation } from "../../components/Hooks/useScrollAnimation";

function Features() {
  useScrollAnimation();

  return (
    <>
      {/* Header Section */}
      <div className="px-4 md:px-0">
        <h2 className="text-deep-blue text-2xl md:text-3xl font-extrabold leading-tight tracking-tight pt-8 border-t border-blue-100 mb-8 animate-on-scroll">
          Key Features
        </h2>
      </div>

      {/* Grid Section: Replaces .feature-grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Track Juzu */}
        <div className="bg-white border border-blue-50 rounded-2xl p-6 shadow-md shadow-blue-100 hover:border-primary/30 transition-all duration-300 animate-on-scroll">
          <div className="flex items-start gap-4 mb-6">
            <div className="size-12 bg-soft-blue rounded-2xl flex items-center justify-center text-primary animate-pulse-slow">
              <span className="material-symbols-outlined text-[28px]">auto_graph</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-deep-blue">Track Your Juzu</h3>
              <p className="text-slate-500 text-sm font-medium">Visualize your Quranic progress with ease.</p>
            </div>
          </div>
          <div className="bg-soft-blue/50 rounded-2xl p-4 border border-blue-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-primary">Juzu 15 / 30</span>
              <span className="text-xs font-bold text-slate-400">50% Completed</span>
            </div>
            <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2 rounded-full shadow-sm shadow-primary/50 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Card 2: One Day One Hadith */}
        <div className="bg-white border border-blue-50 rounded-2xl p-6 shadow-md shadow-blue-100 hover:border-primary/30 transition-all duration-300 animate-on-scroll">
          <div className="flex items-start gap-4 mb-6">
            <div className="size-12 bg-soft-blue rounded-2xl flex items-center justify-center text-primary animate-pulse-slow [animation-delay:0.2s]">
              <span className="material-symbols-outlined text-[28px]">menu_book</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-deep-blue">One Day One Hadith</h3>
              <p className="text-slate-500 text-sm font-medium">Start your morning with daily inspiration.</p>
            </div>
          </div>
          <div className="bg-soft-blue/40 rounded-2xl p-5 border border-blue-50 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-blue-100 text-6xl rotate-12">format_quote</span>
            <p className="text-sm italic font-semibold text-deep-blue/80 relative z-10 leading-relaxed">
              "The best among you are those who have the best manners and character."
            </p>
            <p className="text-[11px] mt-3 font-bold text-primary uppercase tracking-wider">— Sahih Bukhari</p>
          </div>
        </div>

        {/* Card 3: Smart Reminders */}
        <div className="bg-white border border-blue-50 rounded-2xl p-6 shadow-md shadow-blue-100 hover:border-primary/30 transition-all duration-300 animate-on-scroll">
          <div className="flex items-start gap-4 mb-6">
            <div className="size-12 bg-soft-blue rounded-2xl flex items-center justify-center text-primary animate-pulse-slow [animation-delay:0.4s]">
              <span className="material-symbols-outlined text-[28px]">notifications_active</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-deep-blue">Smart Reminders</h3>
              <p className="text-slate-500 text-sm font-medium">Stay consistent with timely reading prompts.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
            <span className="material-symbols-outlined text-green-600 fill-1">check_circle</span>
            <span className="text-xs font-bold text-green-800">Daily 5:00 AM Reminder Active</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 px-4 md:px-0 animate-on-scroll">
        <div className="bg-linear-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-blue-50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Enhance Your Ramadhan Experience</h3>
              <p className="text-slate-600 mb-6">
                Motion-U is inspired to help you make the most of the holy month. With personalized tracking, daily insights, and community features, you'll find it easier to stay focused on your spiritual goals.
              </p>
              <ul className="space-y-3">
                {[
                  "Track prayers, fasting, and Quran reading",
                  "Receive daily Hadith with explanations",
                  "Join community challenges and goals"
                ].map((text, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-symbols-outlined text-primary mr-3">check_circle</span>
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              {/* Using the componentized logo-container from your CSS */}
                <div className="md:w-1/3 flex justify-center">
                <div className="logo-container size-40 rounded-3xl p-6 flex items-center justify-center shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105">
                    {/* Inner wrapper for extra styling or glass effect */}
                    <div className="w-full h-full flex items-center justify-center">
                    <img 
                        src="/logo.png" 
                        alt="Motion-U Brand Logo" 
                        className="max-w-full max-h-full object-contain drop-shadow-lg"
                    />
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;