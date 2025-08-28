import { useEffect } from "react";
import ExperienceComponent from "../ExperienceComponent";

const Experience = () => {
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
      className="self-stretch bg-primary-white overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="experience"
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border  gap-[20px] max-w-full">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Experience
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
          
          <ExperienceComponent
            Title="Fellow @ Breakthrough Tech's AI program at MIT-Cornell Tech"
            Date="April 2025 – Present"
            Text1="- Selected for a competitive fellowship involving intensive training in machine learning and data science, applying core ML techniques to design models that deliver efficient and accurate predictions."
            Text2="- Worked on financial datasets and price prediction models. Deployed an ethical ML model to successfully classify book reviews, addressing a natural language processing problem and generating actionable insights to drive book sales."
            Text3="- Collaborating with leading professionals—many of whom have founded companies in the fintech industry—on real-world problems and gaining valuable insights into innovative, emerging trends."
          />
          <ExperienceComponent
            Title="Undergraduate Researcher @ UMass Amherst"
            Date="September 2025 – Present"
            Text1="- Designed and conducted experimental studies on advanced topics in computing, machine learning, and data analysis as part of a research program, under the mentorship of faculty and PhD researchers contributing to cutting-edge innovation."
            //Text2="Engineered a robust ETL process using Boomi to synchronize Active Directory group members with Canvas via RESTful APIs, achieving a 98% data synchronization accuracy rate and significantly enhancing data integrity and consistency across platforms."
            //Text3="Developed and implemented a subprocess for NetID collision resolution utilizing SSMS and PostgreSQL, which reduced manual account management efforts by 30% and improved efficiency through the application of Test Driven Development (TDD) practices."
          />
          <ExperienceComponent
            Title="IT Student Ambassador @ UMass Amherst IT"
            Date="September 2025 – Present"
            Text1="- Collaborated with campus IT leadership to support strategic outreach and improve the digital student experience."
            Text2="- Acted as a liaison between the student body and university IT services, promoting key platforms (e.g., SPIRE, Canvas) through targeted campus events and digital engagement. "
            Text3="- Conducted structured evaluations of select IT tools and services, providing actionable feedback to cross-functional teams to inform service design, accessibility, and user experience improvements."
          />
          <ExperienceComponent
            Title="Event Coordinator @ MassAI"
            Date="February 2025 – Present"
            Text1="- Spearheading the planning and execution of AI-focused events, including workshops and speaker sessions, enhancing
member engagement and learning opportunities."
            Text2="- Managing professional outreach and communication, fostering connections between students and AI industry leaders to expand the club's network."
            Text3="- Facilitating research paper discussions and innovation workshops, promoting deep understanding and critical thinking among members."
          />
          <ExperienceComponent
            Title="Vice President @ FreshCICS"
            Date="September 2024 – May 2025"
            Text1="- FreshCICS is a social group for first-year students in CICS that provides support, opportunities for collaboration, a sense of community, and mentoring from peers and second-year students."
            Text2="- Leading a board of 10, steering 400+ members with events focused on improving inteaction and streamlining growth."
            Text3="- Fostered a robust tech community, cultivating a platform for networking, skill development, and career advancement for members."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;  