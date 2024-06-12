import ExploreNowCard from "./ExploreNowCard";
import Layout from "./Layout";
import SkinCareCard from "./SkinCareCard";
const RoutineExplore = () => {
  const skinCare = [
    {
      image: './SkinCard_1.png',
      title: 'Skin Care Routine',
      whatdo: '(Acne Reduction)',
      duration: '12 Weeks',
      weeks: '12',
      reminders: '3',
    },
    {
      image: './SkinCard_2.png',
      title: 'Skin Care Routine ',
      whatdo: '(Skin Glow)',
      duration: '6 Weeks',
      weeks: '6',
      reminders: '3',
    },
  ];
  const exploreNow = [
    {
      image: './LadyExploreCard.png',
      title: 'Skin Care Routine',
      subTitle: 'Glass Skin',
      exploreLink: "",

    },
    {
      image: './LadyExploreCard.png',
      title: 'Skin Care Routine',
      subTitle: 'Glass Skin',
      exploreLink: "",

    },

  ];

  return (

      <div className="p-4  w-full ">

        <div className="flex justify-between items-center mb-6 w-full ">
          <h1 className="text-2xl font-semibold text-gray-800">Explore</h1>
          <button className="text-green-700 hover:underline">See More</button>
        </div>

        <div className="flex space-x-4 mb-6 flex-wrap justify-start items-start">
          <button className="bg-[#E7F5E7] text-green-700 px-4 py-2 rounded-xl m-1">All Routines</button>
          <button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Created by Dr.</button>
          <button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Created by me</button>
          <button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Imported Template</button>
        </div>

        <div className="flex gap-3 justify-center items-center mb-6 flex-wrap md:justify-start">
          {exploreNow.map((card, index) => (
            <ExploreNowCard key={index} {...card} />
          ))}
        </div>

        <div className=" flex  justify-center items-center mb-6  md:justify-start ">
          {skinCare.map((card, index) => (
            <SkinCareCard key={index} {...card} />
          ))}
        </div>
      </div>
  );
};

export default RoutineExplore;