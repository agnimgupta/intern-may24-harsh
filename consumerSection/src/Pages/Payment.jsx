import React, { useState } from 'react';
import Popup from '../components/Popup';
import TabularData from '../components/TabularData';
const data = [
  {
    "Invoice No.": "INV-0010",
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
    "Invoice No.": "INV-0010",
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
    "Invoice No.": "INV-0010",
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
    "Invoice No.": "INV-0010",
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

const Payment = () => {
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
          Payments
        </h2>
        {/* <div className="overflow-x-auto p-6">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr className="text-left border-b-2 border-slate-100">
                <th className="p-4">Invoice No.</th>
                <th className="p-4">Doctor</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Paid On</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-slate-200">
                  <td className="p-4">{item['Invoice No.']}</td>
                  <td className="p-4 flex items-center">
                    <img
                      src={item.Doctor.Image}
                      alt={item.Doctor.Name}
                      className="h-10 w-10 rounded-full mr-4"
                    />
                    <div>
                      <p>{item.Doctor.Name}</p>
                      <p className="text-sm text-gray-500">{item.Doctor.Specialty}</p>
                    </div>
                  </td>
                  <td className="p-4">{item.Amount}</td>
                  <td className="p-4">{item['Paid On']}</td>
                  <td className="p-4 flex flex-wrap space-x-2">
                    <button className="text-blue-600 hover:underline bg-blue-100 px-3 py-2 rounded-sm flex items-center">
                      Download
                      <span className="mx-2">
                        <img src="./Download.svg" alt="" className="icons" />
                      </span>
                    </button>
                    <button
                      className="text-green-600 hover:underline flex items-center bg-blue-100 px-3 py-2 rounded-sm"
                      onClick={handleOpenPopup}
                    >
                      View
                      <span className="material-icons-outlined ml-1">visibility</span>
                      <span className="mx-2">
                        <img src="./Eye.svg" alt="" className="icons" />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div> */}
        <TabularData data={data}/>
      </div>

    </div>
  );
};

export default Payment;
