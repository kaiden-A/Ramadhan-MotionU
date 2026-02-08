
function JuzuCard({ number, isFinished, onToggle }) {
  // Logic-based style classes
  const cardStyles = isFinished ? "bg-primary/5 border-primary/30" : "bg-white border-gray-100";
    
  const statusLabel = isFinished ? "Read" : "Current";
  const statusColor = isFinished ? "text-primary" : "text-gray-400";

  return (
    <div className={`juzu-card border-2 rounded-2xl p-4 flex flex-col gap-3 shadow-sm transition-all duration-300 animate-on-scroll ${cardStyles}`}>
      
      {/* Header: Status and Checkbox */}
      <div className="flex justify-between items-start">
        <div>
          <span className={`text-[9px] font-bold uppercase ${statusColor}`}>
            {statusLabel}
          </span>
          <p className="text-[#111418] text-md font-bold">Juzu {number}</p>
        </div>
        
        <div className={`rounded-full p-0.5 flex items-center justify-center ${
          isFinished ? "bg-primary text-white" : "bg-gray-50 text-gray-300 border border-gray-100"
        }`}>
          <span className="material-symbols-outlined text-xs font-bold">
            {isFinished ? 'check' : 'radio_button_unchecked'}
          </span>
        </div>
      </div>

      {/* Center Icon Section */}
      <div className={`h-12 w-full rounded-lg flex items-center justify-center ${isFinished ? "bg-white/50" : "bg-gray-50"}`}>
        <span className={`material-symbols-outlined text-2xl ${isFinished ? "text-primary opacity-30" : "text-gray-200"}`}>
          menu_book
        </span>
      </div>

      {/* Action Button */}
      <button 
        onClick={onToggle}
        className={`w-full py-2 rounded-lg text-[11px] font-bold uppercase hover:cursor-pointer transition-colors ${
          isFinished 
            ? "bg-primary/10 text-primary" 
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        {isFinished ? "Finished" : "Mark Finished"}
      </button>
    </div>
  );
}

export default JuzuCard;