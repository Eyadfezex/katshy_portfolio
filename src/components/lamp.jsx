import "../styles/index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import loadingK from "../../public/img/loadingK.png";
const Lamp = () => {
  useGSAP(() => {
    var tl = gsap.timeline({ repeat: "-1" });
    tl.to(".lamp", { duration: 0.1, opacity: 0.5 });
    tl.to(".lamp", { duration: 0.1, opacity: 1, delay: 0.5 });
    tl.to(".lamp", { duration: 0.1, opacity: 0.5, delay: 1 });
    tl.to(".lamp", { duration: 0.1, opacity: 1, delay: 1.5 });
    tl.to(".lamp", { duration: 0.1, opacity: 0.5, delay: 0 });
    tl.to(".lamp", { duration: 0.1, opacity: 1, delay: 0 });
    tl.to(".lamp", { duration: 0.1, opacity: 0.5, delay: 0 });
    tl.to(".lamp", { duration: 0.1, opacity: 1, delay: 1.5 });
  });

  return (
    <div className="absolute lg:top-[12rem] xl:top-[10rem]  xl:top-[7rem] xl:left-[5rem] xl:left-[2rem] ">
      <img src={loadingK.src} alt="lagging" className="w-[40%] lamp" />
    </div>
  );
};

export default Lamp;
