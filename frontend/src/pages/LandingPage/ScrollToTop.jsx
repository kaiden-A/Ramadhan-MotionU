import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}
