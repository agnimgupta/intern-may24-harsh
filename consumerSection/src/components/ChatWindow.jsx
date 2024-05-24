import React from 'react';

const ChatWindow = ({ selectedContact, messages, onSendMessage }) => {
  return (
    <div className="w-2/3 p-4 flex flex-col">
      <div className="flex items-center border-b-2 border-gray-100 pb-4 mb-4">
        <img
          src={selectedContact.image}
          alt={selectedContact.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">{selectedContact.name}</h4>
          <p className="text-sm text-gray-500">Last seen {selectedContact.lastSeen} ago</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex mb-4 ${message.sender === 'me' ? 'justify-end' : ''}`}>
            <div className={`p-4 rounded-lg ${message.sender === 'me' ? 'bg-green-100 text-right' : 'bg-gray-100'}`}>
              <p>{message.text}</p>
              <span className="text-xs text-gray-500">{message.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 bg-[#3a643b12] py-2 rounded-xl">
       
        <button className="mx-2"> <img src="./Mic.svg" alt="" className=' mx-2 icons' /></button>
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 p-2 outline-none bg-transparent"
        />


        <button className="mx-2"><img src="./PaperPin.svg" alt="" className='icons' /></button>
        <button className="mx-2"><img src="./Emoji.svg" alt="" className='icons' /></button>
        <button className="mx-2"> <img src="./Send.svg" alt="" className=' mx-2 icons' /></button>
      </div>
    </div>
  );
};

export default ChatWindow;