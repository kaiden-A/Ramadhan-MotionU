import { useEffect, useState } from "react";

function Notifications({ message, onClose, success, popup }) {
  const [visible, setVisible] = useState(false);

  const bgColor = success
    ? "bg-emerald-500"
    : popup
    ? "bg-indigo-500"
    : "bg-red-600";

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
        fixed top-20 right-5 z-10000
        min-w-250px
        rounded-xl px-6 py-4
        text-white font-medium
        shadow-xl
        flex items-center justify-between gap-3
        transition-all duration-300 ease-in-out
        ${bgColor}
        ${visible ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}
      `}
    >
      <div>{message}</div>

      <button
        className="
          text-white font-bold text-lg
          hover:opacity-80
          transition
        "
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
      >
        ×
      </button>
    </div>
  );
}

export default Notifications;
