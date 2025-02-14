import React from "react";
import { btnList } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex gap-4 overflow-x-auto fixed w-screen top-32 sm:top-14 z-10 bg-[#ffffff] sm:p-4 ">
      {btnList.map((btn, id) => (
        <button
          key={id}
          className="bg-[#f2f2f2] text-sm font-medium whitespace-nowrap rounded-md px-2 py-1 btns"
        >
          {btn}
          <style>
            {`
    .btns {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
       .btns::-webkit-scrollbar {
                   display: none;
               }
    `}
          </style>
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
