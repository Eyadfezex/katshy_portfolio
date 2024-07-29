const DropMenu = ({ className }) => {
  const pathname = window.location.pathname;
  const currentPath = pathname.slice(1); // remove the first "/"

  //
  return (
    <div
      className={`bg-strap px-[3.5rem] py-[6rem] w-[20rem] rounded-xl [box-shadow:-22px_29px_58px_12px_rgba(0,0,0,0.66)] ${className}`}
    >
      <div className="flex flex-col gap-[5rem] font-popping text-[24px] text-white ">
        <a
          href="/"
          className={`uppercase before:absolute before:block before:top-8 relative before:h-2 before:w-2 before:rounded-full hover:before:bg-second border-b ${currentPath === "" ? "border-b-second before:bg-second" : "before:bg-white"}`}
        >
          <p className="ml-8">Home</p>
        </a>
        <a
          href="/services"
          className={`uppercase before:absolute before:block before:top-8 relative  before:h-2 before:w-2 before:rounded-full hover:before:bg-second border-b ${currentPath === "services" ? "border-b-second before:bg-second" : "before:bg-white"}`}
        >
          <p className="ml-8">services</p>
        </a>
        <a
          href="/portfolio"
          className={`uppercase before:absolute before:block before:top-8 relative  before:h-2 before:w-2 before:rounded-full hover:before:bg-second border-b ${currentPath === "portfolio" ? "border-b-second before:bg-second" : "before:bg-white"}`}
        >
          <p className="ml-8">portfolio</p>
        </a>
        <a
          href="/about"
          className={`uppercase before:absolute before:block before:top-8 relative  before:h-2 before:w-2 before:rounded-full hover:before:bg-second border-b ${currentPath === "about" ? "border-b-second before:bg-second" : "before:bg-white"}`}
        >
          <p className="ml-8">about us</p>
        </a>
        <a
          href="/contact"
          className={`uppercase before:absolute before:block before:top-8 relative  before:h-2 before:w-2 before:rounded-full hover:before:bg-second border-b ${currentPath === "contact" ? "border-b-second before:bg-second" : "before:bg-white"}`}
        >
          <p className="ml-8">contact us</p>
        </a>
      </div>
    </div>
  );
};

export default DropMenu;
