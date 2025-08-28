import { useCallback, useEffect } from "react";

const ProjectComponent = ({
  Image,
  Number,
  Title,
  Text1,
  Text2,
  ImageLink,
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

  const onImageContainerClick = useCallback(() => {
    window.open(ImageLink);
  }, []);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 box-border gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-left] opacity-[0] max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:gap-[20px] mq1425:flex-wrap`}
      data-animate-on-scroll
    >
      <div
        className="w-[594px] h-[476px] overflow-hidden shrink-0 flex flex-row items-center justify-center min-w-[594px] max-w-full cursor-pointer lg:min-w-full mq1425:flex-1"
        onClick={onImageContainerClick}
      >
        <div className="relative rounded-[18.76px] w-[500px] h-[340px] flex items-center justify-center border border-black">
        <img
          className="w-full h-full max-w-full object-contain absolute left-[0px] top-[12px] transform scale-[1.191] mq1425:flex-1"
          loading="eager"
          alt=""
          src={Image}
        />
      </div>

      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-center min-w-[378px] max-w-full mq825:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
          <div className="self-stretch relative tracking-[-0.02em] leading-[50px] font-extrabold mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            {Number}
          </div>
          <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-[40px] font-bold font-inherit mq825:text-7xl mq825:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
            {Title}
          </h1>
          <div className="self-stretch relative text-3xl tracking-[0.02em] leading-[24px] text-primary-black">
            <p className="m-0">{Text1}</p>
            <p className="m-0">{Text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;