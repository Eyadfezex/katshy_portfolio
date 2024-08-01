const ServicesCards = ({ title, content, link }) => {
  return (
    <div className="font-poppins text-white w-[90%] lg:w-[30%] flex flex-col justify-between">
      <div>
        <p className="text-[32px] leading-[51px] capitalize">{title}</p>
        <p className="mt-[20px] text-[16px] leading-[30px]">{content}</p>
      </div>
      <a href={link} className="capitalize  text-second">
        <p className="mt-[32px]">know more</p>
      </a>
    </div>
  );
};

export default ServicesCards;
