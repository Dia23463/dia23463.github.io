import { useCallback, useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const Hero = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
     
    useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE, // required when using with npm
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x000000,         
        backgroundColor: 0xFAF0E6, 
        points: 20,
        maxDistance: 10,
        spacing: 15,
        showDots: true,
      }));
      
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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

      const onLinkedInClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/diasutaria/");
      }, []);
    
      const onGithubClick = useCallback(() => {
        window.open("https://github.com/Dia23463");
      }, []);

      const onMediumClick = useCallback(() => {
        window.open("https://medium.com/@athena.parthenos10621");
      }, []);
      const onEmailClick = useCallback(() => {
        window.open("mailto:dia_010622@outlook.com");
      }, []);
    return (
        //<section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-39xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border">
        <section ref = {vantaRef} style={{ backgroundColor: '#F5F5DC' }} className = "self-stretch overflow-hidden flex flex-row items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-39xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-[30px] box-border gap-[92px] max-w-full lg:flex-wrap mq825:gap-[46px] mq450:gap-[23px]">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[513px] min-h-[51px] max-w-full lg:min-h-[auto] mq825:min-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px] max-w-full">
                <div
                  className="flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-primary-black text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <b>Dia Sutaria</b>
                  </h1>
                </div>
                <div
                  className="flex flex-row text-13xl text-primary-black items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                <Typewriter
                    options={{
                        strings: ['Innovator', 'Tech Enthusiast', 'Writer', 'Entrepreneur', 'Me.'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                </div>
              </div>
              <div
                className="self-stretch relative text-3xl text-primary-black tracking-[0.02em] leading-[24px] text-primary-black [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0]"
                data-animate-on-scroll
              >
                <p className="m-0">{`I'm a sophomore in the Commonwealth Honors College majoring in Computer Science and Economics at University of Massachusetts Amherst who is passionate about developing efficient and impactful solutions to real world problems.`}</p>
              </div>
            </div>
            <div
              className="self-stretch h-14 flex flex-row items-center justify-center gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:gap-[16px]"
              data-animate-on-scroll
            >
              <button
                className="cursor-pointer p-4 bg-primary-white rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onEmailClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src=Image={`${process.env.PUBLIC_URL}/email.svg`}
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-primary-white rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onLinkedInClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src=Image={`${process.env.PUBLIC_URL}/Linkedin.svg`}
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-primary-white rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onGithubClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src=Image={`${process.env.PUBLIC_URL}/Github.svg`}
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-primary-white rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onMediumClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src={`${process.env.PUBLIC_URL}/Medium.svg`}

                />
              </button>
            </div>
          </div>
        </div>
      </section>
    )};


export default Hero;
