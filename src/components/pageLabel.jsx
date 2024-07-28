const PageLabel = ({ label, className }) => {
  return (
    <div
      className={` relative after:absolute after:w-[3rem] after:h-[1px] after:bg-second after:top-[4.5rem]  font-poppins  ${className}`}
    >
      <p className="text-white text-[40px] leading-[76px] uppercase">{label}</p>
    </div>
  );
};

export default PageLabel;
