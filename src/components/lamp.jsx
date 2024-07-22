import "../styles/index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
    <div className="absolute top-[4rem] left-[5rem] ">
      <img
        src="../../public/img/loadingK.png"
        alt="lagging"
        className="w-[40%] lamp"
      />
    </div>
  );
};

export default Lamp;
