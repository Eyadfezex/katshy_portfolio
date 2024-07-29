import "../styles/index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../public/img/logo.png";
const LoadingPage = ({ className }) => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      ".logo",
      { y: -500, opacity: 0, ease: "back.out" },
      { y: 0, opacity: 1, duration: 1 },
    );
    tl.to(".logo", { y: 500, duration: 1, ease: "back.in" }).delay(2);

    tl.to(".enter", { y: -905, duration: 1, ease: "power1.out" }).delay(4);
    tl.to(".enter", { y: -2000, duration: 1, ease: "power1.out" }).delay(1);
    tl.to(".screen", { y: -2000, duration: 1, ease: "power1.in" });
    tl.to(".screen", { opacity: 0 });
    tl.to(".loading", { width: 0 });
  });
  return (
    <div className="fixed z-10 w-full loading h-full">
      <div className={`relative overflow-hidden screen h-full ${className}`}>
        <div className="bg-main w-full h-full  flex justify-center items-center ">
          <img src={logo.src} alt="logo" className="logo opacity-0" />
        </div>
        <div className="absolute bg-second w-full h-screen enter"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
