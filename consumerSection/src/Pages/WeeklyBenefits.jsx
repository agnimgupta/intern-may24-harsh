import Breadcrumb from "../components/BreadCrump";
import SimpleDropDownComponent from "../components/SimpleDropDown";
import TextAreaWithAddMore from "../components/TextAreaWithAddMore";
import RoutineInfoTwo from '../components/RoutineInfoTwo'
const WeeklyBenefits = () => {

  const breadcrumbItems = [
    { label: "Routine", path: "/routines" },
    { label: "Add New Routine", path: "/routines/create-routine" },
    { label: "Add Weekly Benefits", path: "/routine/create/weekly-benefits" },
  ];

  return (
    <section
      className={`mx-auto mb-5 flex min-h-full max-w-7xl flex-col gap-[1.9rem]   rounded-xl  px-5`}
    >
      <Breadcrumb data={breadcrumbItems}/>
      <div className="mb-2 flex w-full flex-col justify-center item-center  gap-10 rounded-xl px-5 py-4 ">
        <div className="flex flex-col gap-5">
          <div className="font-poppins text-[22px] text-black">
            Add Weekly Benefits
          </div>
          
          <RoutineInfoTwo content="This weekly benefit will help potential users track their weekly progress while using this routine. " />
        </div>
        <div className="font-dm-sans text-[16px] font-medium text-black ">
          Enter Weekly Benefits
        </div>
        <SimpleDropDownComponent
          label={`Select Weeks`}
          mdWidth={`w-[400px]`}
          list={[
            "1 week",
            "2 weeks",
            "3 weeks",
            "4 weeks",
            "5 weeks",
            "6 weeks",
          ]}
        />
        <div className="flex flex-wrap gap-5 lg:gap-8 w-full ">
          <TextAreaWithAddMore label="`0-2 Week Benefits`" />
          <TextAreaWithAddMore label="2-4 Week Benefits" />
        </div>
        <button className="mx-auto my-10 box-border rounded-xl bg-[--primary] px-16   py-[17px]  text-center text-base font-semibold text-white shadow-[0px_4px_14px_rgba(58,_100,_59,_0.25)] md:w-[23.4rem]">
          Save Benefits
        </button>
      </div>
    </section>
  );
};

export default WeeklyBenefits;
