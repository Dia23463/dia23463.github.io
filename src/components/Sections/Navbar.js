import { useCallback, useEffect } from "react";

const Navbar = () => {
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

  const onAboutMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='AboutMe']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const onExperienceClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='experience']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skills']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='project']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactForm']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-6 px-2 box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
      <div
        className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-2 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] gap-[20px] max-w-full mq825:hidden"
        data-animate-on-scroll
      >
        <button className="cursor-pointer [border:none] py-0 pr-[17px] pl-0 bg-[transparent] flex flex-row items-center justify-start gap-[11px]">
          <img
            className="relative w-[30px] h-[30px]"
            loading="eager"
            alt=""
            src={`${process.env.PUBLIC_URL}/dia_icon_2.svg`}
          />
        </button>
        <div className="w-[550px] flex flex-row items-center justify-center gap-[32px] max-w-full mq825:gap-[16px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center"
            onClick={onAboutMeClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-center">
              About me
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onExperienceClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Experience
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onSkillsClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Skills
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onProjectsClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Projects
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center"
            onClick={onContactClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left whitespace-nowrap">
              Contact me
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import { useCallback, useEffect } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "../ui/dropdown-menu"; // adjust this path
// import { Menu } from "lucide-react";

// const Navbar = () => {
//   useEffect(() => {
//     const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting || entry.intersectionRatio > 0) {
//             entry.target.classList.add("animate");
//             observer.unobserve(entry.target);
//           }
//         }
//       },
//       { threshold: 0.15 }
//     );
//     scrollAnimElements.forEach((el) => observer.observe(el));
//     return () => scrollAnimElements.forEach((el) => observer.unobserve(el));
//   }, []);

//   const onAboutMeClick = useCallback(() => {
//     document.querySelector("[data-scroll-to='AboutMe']")?.scrollIntoView({ block: "start", behavior: "smooth" });
//   }, []);
//   const onExperienceClick = useCallback(() => {
//     document.querySelector("[data-scroll-to='experience']")?.scrollIntoView({ block: "start", behavior: "smooth" });
//   }, []);
//   const onSkillsClick = useCallback(() => {
//     document.querySelector("[data-scroll-to='skills']")?.scrollIntoView({ block: "start", behavior: "smooth" });
//   }, []);
//   const onProjectsClick = useCallback(() => {
//     document.querySelector("[data-scroll-to='project']")?.scrollIntoView({ block: "start", behavior: "smooth" });
//   }, []);
//   const onContactClick = useCallback(() => {
//     document.querySelector("[data-scroll-to='contactForm']")?.scrollIntoView({ block: "start", behavior: "smooth" });
//   }, []);

//   // ✅ The correct return is here, inside the function
//   return (
//     <header className="self-stretch flex items-center justify-center py-6 px-4 max-w-full">
//       <div className="flex-1 flex items-center justify-between gap-4 max-w-full">
//         {/* Logo */}
//         <button className="cursor-pointer border-none bg-transparent flex items-center justify-start">
//           <img src="/dia_icon_2.svg" alt="Logo" className="w-[30px] h-[30px]" />
//         </button>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-8">
//           <button onClick={onAboutMeClick} className="text-xl font-semibold">About me</button>
//           <button onClick={onExperienceClick} className="text-xl font-semibold">Experience</button>
//           <button onClick={onSkillsClick} className="text-xl font-semibold">Skills</button>
//           <button onClick={onProjectsClick} className="text-xl font-semibold">Projects</button>
//           <button onClick={onContactClick} className="text-xl font-semibold">Contact me</button>
//         </div>

//         {/* Mobile Menu */}
//         <div className="lg:hidden">
//           <DropdownMenu>
//             <DropdownMenuTrigger className="focus:outline-none">
//               <Menu className="w-6 h-6" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent sideOffset={8} className="w-48">
//               <DropdownMenuItem onClick={onAboutMeClick}>About Me</DropdownMenuItem>
//               <DropdownMenuItem onClick={onExperienceClick}>Experience</DropdownMenuItem>
//               <DropdownMenuItem onClick={onSkillsClick}>Skills</DropdownMenuItem>
//               <DropdownMenuItem onClick={onProjectsClick}>Projects</DropdownMenuItem>
//               <DropdownMenuItem onClick={onContactClick}>Contact Me</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



