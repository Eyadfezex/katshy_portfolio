import "../styles/index.css";

const Strp = ({ className }) => {
  return (
    <div className={`w-[200%] px-10 py-4 ${className}`}>
      <div className={`flex items-center strap gap-10 `}>
        <div className="flex items-center justify-center shrink-0	 font-roboto font-[400] gap-10 text-[32px] ">
          <p className="uppercase">creative design</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">ui/ux</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">marketing</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">motion</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">animation</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">branding</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
        </div>
        <div
          aria-hidden="true"
          className="flex  items-center justify-center shrink-0	   font-roboto font-[400] gap-10 text-[32px] "
        >
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">creative design</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">ui/ux</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">marketing</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">motion</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">animation</p>
          <span className="w-[1rem] h-[1rem] bg-white rounded-full"></span>
          <p className="uppercase">branding</p>
        </div>
      </div>
    </div>
  );
};

export default Strp;
