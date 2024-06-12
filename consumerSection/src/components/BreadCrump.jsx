import { NavLink } from "react-router-dom";
const Breadcrumb = ({ data }) => {
  console.log(data);
  return (
    <div className="flex w-full items-center flex-wrap  gap-[10px] font-poppins text-[15px] font-medium leading-[22.5px] my-5 ">
      {data?.map((item, i) => (
        <NavLink to={item.path}  key={item.label}>

          <div  className="flex  items-center gap-[10px]">
            <div className={`font-medium  leading-[22.5px] text-neutral-500`}>
              <span className={data.length === i + 1 ? `text-[--primary]` : `text-neutral-500`}>
                {item.label}
              </span>

            </div>
            {data.length >= i + 2 ? (
              <div
                className={`text-[20px] font-medium leading-[22.5px] ${data.length === i + 2 ? `text-[--primary]` : `text-neutral-500`}`}
              >{`>`}</div>
            ) : (
              ""
            )}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumb;
