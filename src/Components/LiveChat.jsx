import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { addchat } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatBoxRef = useRef(null);
  const inputRef = useRef("");
  const msgs = useSelector((store) => store.messages.chats);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addchat({
          name: faker.person.firstName(),
          message: faker.lorem.sentence(3),
          avatar: faker.image.avatar(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    chatBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const handleSend = () => {
    if (inputRef.current.value.trim()) {
      dispatch(
        addchat({
          name: "You",
          message: inputRef.current.value,
          avatar: faker.image.avatar(),
        })
      );
      inputRef.current.value = "";
    }
  };

  return (
    <div className="fixed bottom-0  w-full sm:w-[350px] h-[480px] bg-white shadow-lg border rounded-lg flex flex-col">
      {/* Header */}
      <div className="bg-red-600 text-white font-bold p-2 text-center rounded-t-lg">
        🔴 Live Chat
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-2 overflow-y-scroll scrollbar-hide">
        {msgs.map((c, i) => (
          <ChatMessage
            key={i}
            name={c.name}
            message={c.message}
            avatar={c.avatar}
          />
        ))}
        <div ref={chatBoxRef}></div>
      </div>

      {/* Input Box */}
      <div className="flex items-center border-t p-2 bg-gray-100 rounded-b-lg">
        <input
          type="text"
          className="flex-1 px-3 py-1 border rounded-md focus:outline-none"
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-lg ml-2"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
