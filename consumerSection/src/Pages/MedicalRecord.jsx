import React, { useState } from 'react';
import Popup from '../components/Popup';
import TabularData from '../components/TabularData';
import Layout from '../components/Layout';
import HeadingDiv from '../components/HeadingDiv';
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
    <Layout>
        <div className="bg-white rounded-lg mb-6 w-[50%] ">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <HeadingDiv title="Medical Records">


          <TabularData data={data} />
        </HeadingDiv>

    </Layout>
  );
};

export default MedicalRecord;
