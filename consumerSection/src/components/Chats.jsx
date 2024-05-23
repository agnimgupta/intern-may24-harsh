import React, { useState } from 'react';
import Popup from './Popup';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="App">
      <div className="p-4">
        <button onClick={handleOpenPopup} className="px-4 py-2 bg-blue-500 text-white rounded">
          Show Payment Receipt
        </button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default App;
