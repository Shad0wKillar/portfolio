import { useEffect, RefObject } from "react";
import { useSection } from "context/section";

export default function useScrollActive(
  ref: RefObject<HTMLElement>,
  sectionName: string,
) {
  const { onSectionChange } = useSection();

  useEffect(() => {
    const scrollActive = () => {
      if (!ref.current) return;

      const scrollY = window.pageYOffset ?? window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const sectionTop = rect.top + scrollY - 80;
      const sectionHeight = rect.height;

      const isInsideThreshold =
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;

      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 15;
      const isLastSection = rect.bottom <= window.innerHeight + 15;
      const isVisibleAtBottom = isAtBottom && isLastSection;

      if (isInsideThreshold || isVisibleAtBottom) {
        onSectionChange!(sectionName);
      } else if (sectionName === "who am i?" && scrollY <= sectionTop) {
        // I reset the highlight when the user scrolls back to the hero section
        onSectionChange!("");
      }
    };

    scrollActive();
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [ref, sectionName, onSectionChange]);
}
