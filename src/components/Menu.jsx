import gsap from "gsap";

const DropMenu = ({ className, toggle }) => {
  const pathname = window.location.pathname;
  const currentPath = pathname.slice(1); // remove the first "/"

  //
  return (
    <div
      className={`bg-strap px-10 py-16 w-[20rem] rounded-xl shadow-2xl ${className}`}
    >
      <div className="flex flex-col gap-[5rem] font-popping text-[24px] text-white">
        <a
          href="/"
          className={`uppercase before:absolute before:block before:top-8 relative before:bg-second before:h-2 before:w-2 before:rounded-full border-b ${currentPath === "" ? "border-b-second" : ""}`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`uppercase before:absolute before:block before:top-8 relative before:bg-second before:h-2 before:w-2 before:rounded-full border-b ${currentPath === "about" ? "border-b-second" : ""}`}
        >
          about us
        </a>
        <a
          href="/services"
          className={`uppercase before:absolute before:block before:top-8 relative before:bg-second before:h-2 before:w-2 before:rounded-full border-b ${currentPath === "services" ? "border-b-second" : ""}`}
        >
          services
        </a>
        <a
          href="/portfolio"
          className={`uppercase before:absolute before:block before:top-8 relative before:bg-second before:h-2 before:w-2 before:rounded-full border-b ${currentPath === "portfolio" ? "border-b-second" : ""}`}
        >
          portfolio
        </a>
        <a
          href="/contact"
          className={`uppercase before:absolute before:block before:top-8 relative before:bg-second before:h-2 before:w-2 before:rounded-full border-b ${currentPath === "contact" ? "border-b-second" : ""}`}
        >
          contact us
        </a>
      </div>
    </div>
  );
};

export default DropMenu;
