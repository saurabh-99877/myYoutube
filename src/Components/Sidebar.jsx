import React from "react";
import { sections } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeMenu());
  };

  return (
    isMenuOpen && (
      <div
        className="bg-white z-30 overscroll-contain px-4 pb-16 sm:py-2 w-full  sm:w-[215px] mt-4 fixed top-28 sm:top-12 left-0 overflow-y-auto h-[calc(100vh-2.5rem)]
    shrink-0 group transition-all duration-500 ease-in-out"
      >
        <span
  className="sm:hidden fixed top-36 right-10 bg-red-600 rounded-full h-8 w-8 px-2 py-1 cursor-pointer text-xl"
  onClick={handleClose}
>
  X
</span>
        {sections.map((section, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg my-1">{section.title}</h1>
            <ul className="leading-8 mb-5">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <style>
          {`
              .group:hover { 
                  scrollbar-width: thin;
            }
               .group {
                   scrollbar-width: non; 
               }
               .group::-webkit-scrollbar {
                   width: 0;
               }
               .group:hover::-webkit-scrollbar {
                  width: 8px; 
               }
            `}
        </style>
      </div>
    )
  );
};

export default Sidebar;

// border-2 border-black
