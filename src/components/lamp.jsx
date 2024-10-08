import "../styles/index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import loadingK from "../../public/img/loadingK.png";
const Lamp = ({ className }) => {
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
    <div className={`relative lg:block hidden ${className}  lamp`}>
      <img src={loadingK.src} alt="lagging" />
    </div>
  );
};

export default Lamp;
