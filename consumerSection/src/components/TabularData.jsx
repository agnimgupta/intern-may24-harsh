import React, { useState } from 'react';
import Popup from './Popup';

const getHeaders = (data) => {
    const headers = new Set();
    data.forEach(item => {
        Object.keys(item).forEach(key => {
            headers.add(key);
        });
    });
    return Array.from(headers);
};

const TabularData = ({ data }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);
    const headers = getHeaders(data);

    return (
        <div className="overflow-x-auto p-6 w-full ">
            <table className="w-full min-w-max ">
                <thead>
                    <tr className="text-left border-b-2 border-slate-100">
                        {headers.map(header => (
                            <th key={header} className="p-2 sm:p-4">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-slate-200">
                            {item['Invoice No.'] && <td className="p-2 sm:p-4">{item['Invoice No.']}</td>}
                            {item.ID && <td className="p-2 sm:p-4">{item.ID}</td>}
                            <td className="p-2 sm:p-4 flex items-center">
                                <img
                                    src={item.Doctor.Image || item['Created By'].image}
                                    alt={item.Doctor.Name || item['Created By'].image}
                                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-2 sm:mr-4"
                                />
                                <div>
                                    <p className="text-xs sm:text-base">{item.Doctor.Name || item['Created By'].Name}</p>
                                    <p className="text-xs sm:text-sm text-gray-500">{item.Doctor.Specialty || item['Created By'].Specialty}</p>
                                </div>
                            </td>
                            {item.Amount && <td className="p-2 sm:p-4">{item.Amount}</td>}
                            {item['Paid On'] && <td className="p-2 sm:p-4">{item['Paid On']}</td>}
                            {item.Duration && <td className="p-2 sm:p-4">{item.Duration}</td>}
                            {item.Type && <td className="p-2 sm:p-4">{item.Type}</td>}
                            {item.Date && <td className="p-2 sm:p-4">{item.Date}</td>}
                            <td className="p-2 sm:p-4 flex flex-wrap space-x-2">
                                <button className="text-blue-600 hover:underline bg-blue-100 px-2 sm:px-3 py-1 sm:py-2 rounded-sm flex items-center">
                                    Download
                                    <span className="mx-2">
                                        <img src="./Download.svg" alt="Download" className="icons" />
                                    </span>
                                </button>
                                <button
                                    className="text-green-600 hover:underline flex items-center bg-blue-100 px-2 sm:px-3 py-1 sm:py-2 rounded-sm"
                                    onClick={handleOpenPopup}
                                >
                                    View
                                    <span className="material-icons-outlined ml-1">visibility</span>
                                    <span className="mx-2">
                                        <img src="./Eye.svg" alt="View" className="icons" />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
};

export default TabularData;
