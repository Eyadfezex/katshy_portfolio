const Nav = () => {
  return (
    <nav className="flex items-center px-[7rem] w-full py-7 justify-end ">
      <div className="flex items-center text-white gap-4">
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
              <stop offset="0.375" stop-color="white" />
              <stop offset="0.567708" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <p className="uppercase text-[14px] font-poppins">Menu</p>
        <div>
          <span className="bg-white w-[20px] h-[3px] block"></span>
          <span className="bg-white w-[15px] h-[3px] block mt-1"></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
