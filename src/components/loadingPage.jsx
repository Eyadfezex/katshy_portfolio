import "../styles/index.css";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
const LoadingPage = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".logo", { y: -1000, duration: 1.5, ease: "back.out" });
    tl.to(".logo", { y: 1000, duration: 1.5, ease: "back.in" }).delay(2);

    tl.to(".enter", { y: -905, duration: 1, ease: "power1.out" }).delay(4.5);
    tl.to(".enter", { y: -2000, duration: 1, ease: "power1.out" }).delay(1);
    tl.to(".screen", { y: -2000, duration: 1, ease: "power1.in" });
    tl.to(".screen", { opacity: 0, duration: 1 });
  });
  return (
    <div className="relative overflow-hidden screen">
      <div className="bg-[#101010] w-full h-screen  flex justify-center items-center ">
        <img src="../../../public/img/logo.png" alt="logo" className="logo" />
      </div>
      <div className="absolute bg-[#D2FC1C] w-full h-screen enter"></div>
    </div>
  );
};

export default LoadingPage;
