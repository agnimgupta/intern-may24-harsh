// import React, { useState } from 'react';
// import Popup from './Popup';

// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleOpenPopup = () => setIsPopupOpen(true);
//   const handleClosePopup = () => setIsPopupOpen(false);

//   return (
//     <div className="App">
//       <div className="p-4">
//         <button onClick={handleOpenPopup} className="px-4 py-2 bg-blue-500 text-white rounded">
//           Show Payment Receipt
//         </button>
//       </div>
//       <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
//     </div>
//   );
// };

// export default App;

// src/components/Chat.js
import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const contacts = [
  {
    name: 'Dr. William Stephin',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '10:22 AM',
    newMessages: 3,
    lastSeen: '3min',
  },
  {
    name: 'Dr. Mark Hay Smith',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
  },
  {
    name: 'Dr. kain ',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
  },
  {
    name: 'Dr. Akash ',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
  },
  {
    name: 'Dr. Mehmud',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
  },
  // Add more contacts here...
];

const messages = [
  {
    text: 'How likely are you to recommend this product to your patients?',
    sender: 'them',
    time: '06:00 PM, 30 Sep 2022',
  },
  {
    text: 'Vivamus sed dictum dictum ligula, cursus blandit risus',
    sender: 'me',
    time: '06:00 PM, 30 Sep 2022',
  },
  // Add more messages here...
];

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  // console.log(selectedContact);
  return (
    <div className="flex m-[2rem] border-2 border-slate-200  flex-col rounded-xl overflow-hidden">

      <h2 className="text-3xl font-semibold  p-4 bg-[#F7FCFA] text-[--primary] w-full ">Chats</h2>

      <div className="chatContainer flex border-y-2 border-slate-200">
        <ChatList contacts={contacts} onSelect={setSelectedContact} />
        <ChatWindow selectedContact={selectedContact} messages={messages} />
      </div>
    </div>
  );
};

export default Chat;
