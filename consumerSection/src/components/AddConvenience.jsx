import { Link } from "react-router-dom";

const AddConvenience = ({ link,title, subtitle }) => {
  return (

    <div className="flex gap-[10px] justify-start items-center">
      <Link to={link}>
        <img className=" cursor-pointer w-[30px] h-[30px]  border-2 border-[--primary] rounded-lg p-1" src="/Plus.svg" />
      </Link>
      <div className="flex flex-col justify-between gap-1">
        <Link to={link}>
          <span className="cursor-pointer font-poppins text-[14px] font-medium tracking-[-0.02em] text-darkOliveGreen-dark">
            {title}
          </span>
        </Link>
        <span className="font-poppins text-[12px] leading-[16px] text-neutral-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default AddConvenience;
