import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { addchat } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import "../index.css";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";

const LiveChat = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const msgs = useSelector((store) => store.messages.chats);
  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addchat({
          name: faker.name.firstName(),
          message: faker.lorem.sentence(3),
          avatar: faker.image.avatar(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    // console.log(inputRef.current)
    if (inputRef.current.value.trim())
      dispatch(
        addchat({
          name: "You",
          message: inputRef.current.value,
          avatar: faker.image.avatar(),
        })
      );
    inputRef.current.value = "";
  };

  return (
    <div className=" bg-gray-200 w-[350px] px-2 mx-4 rounded-lg col-start-3">
      <h1 className="font-bold -mr-4 -mt-6 mb-3">
        <span className="text-6xl blink">.</span>Live Chat
      </h1>
      <div className="w-full h-[400px] ml-2 p-2  overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            msgs.map((c, i) => (
              <ChatMessage
                key={i}
                name={c.name}
                message={c.message}
                avatar={c.avatar}
              />
            ))
          }
        </div>
      </div>
      <div className="border-t-2 border-gray-400 py-[2px] ">
        <input
          type="text"
          className="mx-2 px-4 py-1 rounded-md w-[70%]"
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2"
          onClick={handleSend}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
