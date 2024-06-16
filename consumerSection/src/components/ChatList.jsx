import React from 'react';

const ChatList = ({ contacts, onSelect, isHidden }) => {
  return (
    <div className={`w-full md:w-[50%] border-r-2 border-gray-100 p-4 ${isHidden ? 'hidden md:block' : ''}`}>
      <div className="flex justify-center mb-4 my-4 bg-gray-200 px-4 border rounded-lg w-full">
        <img src="/Search.svg" alt="" className='w-[30px] h-[auto] object-contain' />
        <input
          type="text"
          placeholder="Search"
          className="py-3 px-4 outline-none w-full bg-transparent"
        />
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center mb-4 cursor-pointer py-3"
            onClick={() => onSelect(contact)}
          >
            <div className="relative">
              {contact.isActive && <div className="absolute left-[55%] w-[13px] h-[13px] bg-[--primary] rounded-full border-2 border-white "></div>}
              
              <img
                src={contact.image}
                alt={contact.name}
                className="h-12 w-12 rounded-full mr-4"
              />
            </div>
            <div className="flex-1 flex justify-between items-start border-b py-1">
              <div className="flex justify-start items-start flex-col">
                <h4 className="font-semibold text-sm">{contact.name}</h4>
                <p className="text-sm text-gray-500 truncate">{contact.message}</p>
              </div>
              <div className="flex justify-end items-end flex-col">
                <span className="text-xs text-gray-500">{contact.time}</span>
                <span className="bg-[--primary] text-white text-xs font-semibold p-1 rounded-full w-5 h-5 text-center">{contact.newMessages}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
