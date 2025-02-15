import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { showMore } from "../utils/appSlice";

const MainContainer = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`border-3  border-green-500 ${
        isMenu ? "ml-[215px]" : "" 
      } ] `}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
