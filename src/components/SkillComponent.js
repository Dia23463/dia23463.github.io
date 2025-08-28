import React from 'react';

const Skill = ({ src, label, animateOnScroll }) => {
  return (
    <div className={`rounded bg-primary-white box-border w-[130px] h-[18px] flex flex-col items-center justify-center py-6 px-[22px] gap-[15px] ${animateOnScroll ? 'animate-[1s_ease_0s_1_normal_forwards_scale-up]' : ''} opacity-[1] border-[2px] border-solid border-zinc-500`}
         data-animate-on-scroll={animateOnScroll}>
      <b className="self-stretch relative tracking-[-0.em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
        {label}
      </b>
    </div>
  );
}

export default Skill;