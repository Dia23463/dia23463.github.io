import { useEffect } from "react";

const BoxComponent = ({
  Title,
  bullets
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
      className={`w-full max-w-[300px] flex-shrink-0 rounded-3xs box-border flex flex-col items-start justify-start py-[30px] pr-[25px] pl-[23px] gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] text-center text-5xl bg-white text-black font-heading-h6-semibold border-[1px] border-solid border-zinc-500`}
      data-animate-on-scroll
    >
      <div className="w-full flex flex-row items-start justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-center gap-[30px] w-full">
          <h3 className="m-0 text-inherit tracking-[-0.02em] leading-[28px] font-semibold mq450:text-lgi mq450:leading-[22px]">
            {Title}
          </h3>
        </div>
      </div>

      <ul className="list-disc pl-1 ml-0 list-inside text-left space-y-4 text-base text-primary-black">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );            
}
export default BoxComponent;