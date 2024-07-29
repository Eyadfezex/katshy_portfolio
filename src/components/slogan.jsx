import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Slogan = () => {
  useGSAP(() => {
    gsap.from(".text", { duration: 2, x: -1000, delay: 5.5, ease: "back.out" });
  });
  return (
    <div className="font-poppins text-white relative lg:top-[10rem] xl:top-[10rem] lg:left-[5rem] xl:left-[11rem] xl:left-[8rem] z-[5] lg:text-[70px]  xl:text-[90px] font-poppins capitalize ">
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
