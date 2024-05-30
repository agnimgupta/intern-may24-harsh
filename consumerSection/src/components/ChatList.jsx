import React from 'react';

const ChatList = ({ contacts, onSelect }) => {

  return (
    <div className="w-1/3 border-r-2 border-gray-100 p-4">
      <input
        type="text"
        placeholder="Search here"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center mb-4 cursor-pointer py-3"
            onClick={() => onSelect(contact)}
            
          >
            {/* {console.log(contact)} */}
            <img
              src={contact.image}
              alt={contact.name}
              className="h-12 w-12 rounded-full mr-4"
            />
            <div className="hidden lg:block flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold">{contact.name}</h4>
                <span className="text-sm text-gray-500">{contact.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{contact.message}</p>
            <span className=" bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{contact.newMessages}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
