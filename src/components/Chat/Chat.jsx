import React from 'react';
const Chat = () => {
  const phoneNumber = '#';

  return (
    <div >
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-5 rounded-full text-center shadow-lg z-50 w-15 h-14 flex items-center justify-center"
        title="Chat with us on WhatsApp!"
        style={{ width: '60px', height: '60px' }} 
      >
        <img src="../../public/whatsapp-logo.png" alt="WhatsApp" className="w-full h-auto" />
      </a>
    </div>
  );
};

export default Chat
