import React from "react";
import { sections } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div
        className="overscroll-contain px-4 py-2 w-[215px] mt-4 fixed top-12 left-0 overflow-y-auto h-[calc(100vh-2.5rem)]
    shrink-0 group z-10"
      >
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
                   scrollbar-width: none; 
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
