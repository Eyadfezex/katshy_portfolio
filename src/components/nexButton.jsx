import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const NexButton = ({ className, link }) => {
  useGSAP(() => {
    gsap.from(".button", { y: 300, delay: 7, duration: 1, ease: "back.out" });
  });
  return (
    <a
      href={link}
      className={`${className} button bg-second py-2 px-4 lg:px-8 rounded-lg [box-shadow:0px_5px_17px_1px_rgba(210,252,28,0.75)] w-fit`}
    >
      <div className="flex items-center gap-[12px] lg:gap-[22px]">
        <p className="text-lg lg:text-[32px] uppercase tracking-[0.5rem] ">
          Next
        </p>
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807612 17.9792 0.807612 17.3934 1.3934C16.8076 1.97918 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM2 13.5H28V10.5H2V13.5Z"
            fill="black"
          />
        </svg>
      </div>
    </a>
  );
};

export default NexButton;
