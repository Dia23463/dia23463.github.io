import { useEffect } from "react";
import ProjectComponent from "../ProjectComponent";

const Projects = () => {
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
        <section
        className="self-stretch bg-primary-white overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:py-5 mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
        data-scroll-to="project"
      >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[20px] max-w-full">
          <div
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
            data-animate-on-scroll
          >
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              My
            </h1>
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              Projects
            </h1>
          </div>
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/snowflake pic.jpg`}
            Number="01"
            Title="Navigating Healthcare Deserts"
            Text1="Developing an interactive geospatial machine learning application to predict healthcare deserts, integrating demographic, transportation, and facility data to identify underserved areas and inform resource allocation decisions for healthcare planners."
            Text2="Leveraging data connections with Snowflake, classification algorithms and GenAI to summarize insights and recommend high-impact locations for clinics, targeting socially vulnerable populations."
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/website pic.png`}
            Number="02"
            Title="Personal Website"
            ImageLink="https://github.com/Dia23463/personal-website"
            Text1="My portfolio is a single-page application featuring a clean, modern design that highlights my experience and projects. The navigation bar allows easy access to different sections: Experience, Skills, Projects, and Contact."            
            Text2="This website was built using React.js, Vanta.js, and Tailwind CSS. It is hosted at diasutaria.me and is fully functional."
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/researchAI.png`}
            Number="03"
            Title="ResearchAI "
            ImageLink="https://github.com/Dia23463/RAG-chrome-extension"
            Text1="Leveraged RAG to deliver context-driven definitions, synopses and chatbot supported Q&A on any selected text, utilizing ChromeDB for efficient vector similarity search over document embeddings aiming to create a efficient tool aiding in research. "
            Text2="My team and I won the 3rd prize at MassAI Conference 2025 for this project."
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/maze pic.png`}
            Number="04"
            Title="Maze-O-Cat"
            ImageLink="https://github.com/Dia23463/maze-o-cat"
            Text1="Deployed an interactive randomized maze generating game utilizing various OOP concepts, implementing the game mechanics and UI for real-time gameplay with added player functionality."
            // Text2="Developed a user-friendly end to end application using Next.js backend framework and MongoDB database, resulting in a seamless and efficient tracking experience for users. Implemented a reinforcement learning model that analyzes user feedback to design personalized health goals, resulting in consistent progress towards optimal health for each individual user."
          />
        </div>
      </section>
    )};


    export default Projects;
