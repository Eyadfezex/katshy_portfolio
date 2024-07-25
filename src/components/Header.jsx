import DropMenu from "./Menu";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const menuTimeline = useRef(null);
  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!menuTimeline.current) {
      menuTimeline.current = gsap
        .timeline({ paused: true })
        .to(".menu", { x: -400, duration: 0.5 });
    }
    toggle ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [toggle]);

  return (
    <nav className="flex items-center px-[7rem] w-full py-7 justify-end fixed z-10">
      <div
        className="flex items-center text-white gap-4 group cursor-pointer"
        onClick={handleMenuClick}
      >
        <svg
          width="2"
          height="51"
          viewBox="0 0 2 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.875 0V51" stroke="url(#paint0_radial_1_50)" />
          <defs>
            <radialGradient
              id="paint0_radial_1_50"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1.375 25.5) rotate(90) scale(25.5 0.5)"
            >
              <stop offset="0.375" stopColor="white" />
              <stop offset="0.567708" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <p className="uppercase text-[14px] font-poppins">Menu</p>
        <div>
          <span className="bg-white w-[20px] h-[3px] block group-hover:w-[15px] duration-[0.3s]"></span>
          <span className="bg-white w-[15px] h-[3px] block mt-1 group-hover:w-[20px] duration-[0.3s]"></span>
        </div>
      </div>
      <DropMenu className="absolute top-[80%] right-[-20%] menu" />
    </nav>
  );
};

export default Nav;
