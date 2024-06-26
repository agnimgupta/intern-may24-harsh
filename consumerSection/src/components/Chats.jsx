
import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import Layout from '../components/Layout'
import HeadingDiv from '../components/HeadingDiv'
const contacts = [
  {
    name: 'Dr. William Stephin',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '10:22 AM',
    newMessages: 3,
    lastSeen: '3min',
    isActive : true
  },
  {
    name: 'Dr. Mark Hay Smith',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
    isActive : true
  },
  {
    name: 'Dr. kain ',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
    isActive : false
  },
  {
    name: 'Dr. Akash ',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
    isActive : true
  },
  {
    name: 'Dr. Mehmud',
    image: './userProfile.png',
    message: 'Lorem ipsum dolor sit amet...',
    time: '2hrs ago',
    newMessages: 0,
    lastSeen: '2hrs',
    isActive : false
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
  {
    text: 'Vivamus sed dictum dictum ligula, cursus blandit risus',
    sender: 'them',
    time: '06:00 PM, 30 Sep 2022',
  },
  {
    text: 'Vivamus sed dictum dictum ligula, cursus blandit risus',
    sender: 'me',
    time: '06:00 PM, 30 Sep 2022',
  },
  {
    text: 'Vivamus sed dictum dictum ligula, cursus blandit risus',
    sender: 'them',
    time: '06:00 PM, 30 Sep 2022',
  },
  // Add more messages here...
];

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleBackClick = () => {
    setSelectedContact(null);
  };

  return (
    <div className='w-full 2xl:w-[70%] '>
      <HeadingDiv title="My Chats">
        <div className="chatContainer flex border-y-2 border-slate-200">
          <ChatList
            contacts={contacts}
            onSelect={handleContactSelect}
            isHidden={selectedContact !== null}
          />
          {selectedContact && (
            <ChatWindow
              selectedContact={selectedContact}
              messages={messages}
              onBack={handleBackClick}
            />
          )}
        </div>
      </HeadingDiv>
    </div>
  );
};

export default Chat;
