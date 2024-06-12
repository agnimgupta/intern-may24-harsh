import React, { useState } from 'react';
import Popup from '../components/Popup';
import TabularData from '../components/TabularData';
const data = [
    {
      "ID": "#MR-0010",
      "Doctor": {
        "Name": "Dr. Darren Elder",
        "Specialty": "Dental",
        "Image": "Doctor.png"
      },
      "Amount": "Rs.799",
      "Paid On": "14 Nov 2023",
      "Action": {
        "Download": "Download URL",
        "View": "View URL"
      }
    },
    {
      "ID": "#MR-0010",
      "Doctor": {
        "Name": "Dr. Darren Elder",
        "Specialty": "Dental",
        "Image": "Doctor.png"
      },
      "Amount": "Rs.799",
      "Paid On": "14 Nov 2023",
      "Action": {
        "Download": "Download URL",
        "View": "View URL"
      }
    },
    {
      "ID": "#MR-0010",
      "Doctor": {
        "Name": "Dr. Darren Elder",
        "Specialty": "Dental",
        "Image": "Doctor.png"
      },
      "Amount": "Rs.799",
      "Paid On": "14 Nov 2023",
      "Action": {
        "Download": "Download URL",
        "View": "View URL"
      }
    },
    {
      "ID": "#MR-0010",
      "Doctor": {
        "Name": "Dr. Darren Elder",
        "Specialty": "Dental",
        "Image": "Doctor.png"
      },
      "Amount": "Rs.799",
      "Paid On": "14 Nov 2023",
      "Action": {
        "Download": "Download URL",
        "View": "View URL"
      }
    }
  ]

const MedicalRecord = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex-grow p-4 mt-8  w-[100%]  sm:w-[100%] xl:w-[80%]">
      <div className="bg-white rounded-lg mb-6 w-full ">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="bg-white rounded-3xl overflow-hidden shadow border-2 border-slate-200">
        <h2 className="text-2xl font-semibold mb-4 p-6 bg-[#F7FCFA] text-[--primary]">
          Medical Record
        </h2>
        
        <TabularData data={data}/>
      </div>

    </div>
  );
};

export default MedicalRecord;
