import { useEffect } from "react";

const AboutMeComponent = ({
  Text1,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className={`self-stretch rounded-3xs flex flex-col items-start justify-start py-[30px] pr-[25px] pl-[23px] gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] max-w-full text-center text-5xl bg-white text-black font-heading-h6-semibold `}
      data-animate-on-scroll
    >
      <div className="self-stretch relative text-3xl tracking-[0.02em] leading-[24px] text-primary-black text-left">
        <p className="m-0">{Text1}</p>
      </div>
    </div>
  );
};

export default AboutMeComponent;