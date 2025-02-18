import React from "react";

const ChatMessage = ({ name, message, avatar }) => {
  return (
    <div className="flex items-center gap-2 p-2 border-b">
      <img src={avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
      <div className="text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
