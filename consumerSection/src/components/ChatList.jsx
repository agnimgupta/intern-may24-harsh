import React from 'react';

const ChatList = ({ contacts, onSelect }) => {

  return (
    <div className="w-[100%] md:w-[50%] border-r-2 border-gray-100 p-4 justify-end items-center ">

      <div className="flex justify-center mb-4 my-4 bg-gray-200 px-4 border rounded-lg  w-full m:w-[100%] xl:w-[100%] ">
        <img src="/Search.svg" alt="" className='w-[30px] h-[auto] object-contain' />
        <input
          type="text"
          placeholder="Search"
          className="py-3 px-4 outline-none  w-full bg-transparent"
        />
      </div>

      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center mb-4 cursor-pointer py-3"
            onClick={() => onSelect(contact)}

          >
            <img
              src={contact.image}
              alt={contact.name}
              className="h-9 w-9 rounded-full mr-4"
            />
            <div className="flex-1 flex justify-between items-start ">

              <div className="flex justify-start items-start flex-col">
                <h4 className="font-semibold text-sm">{contact.name}</h4>
                <p className="text-sm text-gray-500 truncate">{contact.message}</p>
              </div>

              <div className="flex justify-end items-end flex-col ">
                <span className="text-xs text-gray-500">{contact.time}</span>
                <span className=" bg-[--primary] text-white text-xs font-semibold p-1 rounded-full w-5 h-5 text-center">{contact.newMessages}</span>
              </div>


            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
