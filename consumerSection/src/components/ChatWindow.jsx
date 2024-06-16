import React from 'react';

const ChatWindow = ({ selectedContact, messages, onBack }) => {
  console.log(selectedContact);
  return (
    <div className="w-full md:w-2/3 p-4 flex flex-col h-[60vh] ">

      <div className="flex items-center justify-between  border-b-2 border-gray-100 pb-4 mb-4">
        <div className=" flex justify-center items-center ">

          <button
            onClick={onBack}
            className="md:hidden  p-1 bg-gray-200 rounded-lg w-[max-content] mr-3 "
          >
            <img src="/arrowLeft.svg" alt="" className='w-[25px] h-auto rotate-90' />
          </button>

          <div className="relative">
          {selectedContact.isActive && <div className="absolute left-[55%] w-[13px] h-[13px] bg-[--primary] rounded-full border-2 border-white "></div>}

          <img
            src={selectedContact.image}
            alt={selectedContact.name}
            className="h-12 w-12 rounded-full mr-4"
          />
        </div>

          <div>
            <h4 className="font-semibold">{selectedContact.name}</h4>
            <p className="text-sm text-gray-500">Last seen {selectedContact.lastSeen} ago</p>
          </div>

        </div>

        
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar ">
        {messages.map((message, index) => (
          <div key={index} className={`flex mb-4 ${message.sender === 'me' ? 'justify-end items-end' : ''} flex-col`}>
            <div className={`p-4 rounded-xl my-2 ${message.sender === 'me' ? 'bg-[#3334481A] text-right text-[--primary]' : 'bg-[#28643b1a] '}`}>
              <p>{message.text}</p>
            </div>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
          
        ))}
        <p className='w-full text-center text-gray-600'>3 new Messages</p>
      </div>

      <div className="flex items-center mt-4 bg-[#3a643b12] py-2 rounded-xl">
        <button className="mx-2"><img src="./Mic.svg" alt="" className='mx-2 icons' /></button>
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 p-2 outline-none bg-transparent"
        />
        <button className="mx-2"><img src="./PaperPin.svg" alt="" className='icons' /></button>
        <button className="mx-2"><img src="./Emoji.svg" alt="" className='icons' /></button>
        <button className="mx-2"><img src="./Send.svg" alt="" className='mx-2 icons' /></button>
      </div>
    </div>
  );
};

export default ChatWindow;
