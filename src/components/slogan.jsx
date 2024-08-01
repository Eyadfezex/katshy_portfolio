import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Slogan = () => {
  useGSAP(() => {
    gsap.from(".text", { duration: 2, x: -1000, delay: 5.5, ease: "back.out" });
  });
  return (
    <div className="font-poppins text-white relative left-[4%] top-[20%] md:top-[5rem] lg:top-[10rem] xl:top-[7rem] md:left-[4rem] lg:left-[5rem] xl:left-[10rem] z-[5] text-[40px]  md:text-[50px] lg:text-[70px] w-[15%] md:w-[25%] lg:w-full xl:text-[90px] capitalize">
      <p className="text">
        <span className="text-second">brand.</span>
        design<span className="text-second">.</span>
        Web<span className="text-second">.</span>
        <br />
        <span className="text-second">
          in-house development. <br />
          &more
        </span>
      </p>
    </div>
  );
};

export default Slogan;
