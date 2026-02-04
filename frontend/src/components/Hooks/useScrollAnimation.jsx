import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    // 1. The Intersection Observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: stop observing once it's visible to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it feels more natural
      }
    );

    // 2. Function to find and observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll:not(.visible)");
      elements.forEach((el) => observer.observe(el));
    };

    // Initial run
    observeElements();

    // 3. MutationObserver to handle dynamic content (Modern best practice)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}