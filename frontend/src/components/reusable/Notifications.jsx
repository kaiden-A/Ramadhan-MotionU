import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Notifications({ message, onClose, success, popup }) {
  const [visible, setVisible] = useState(false);

  const bgColor = success
    ? "bg-emerald-500"
    : popup
    ? "bg-indigo-500"
    : "bg-red-600";

  useEffect(() => {
    // Small delay to trigger the entry animation
    const animationFrame = requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, 2500);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, [onClose]);

  // The actual UI
  const notificationJSX = (
    <div
      className={`
        fixed top-5 right-5 z-9999
        min-w-250px
        rounded-xl px-6 py-4
        text-white font-medium
        shadow-2xl
        flex items-center justify-between gap-4
        transition-all duration-300 ease-in-out
        ${bgColor}
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      <div className="flex-1">{message}</div>

      <button
        className="text-white font-bold text-2xl leading-none hover:scale-110 transition-transform"
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
      >
        ×
      </button>
    </div>
  );

  // Teleport the notification to the end of the body
  return createPortal(notificationJSX, document.body);
}

export default Notifications;