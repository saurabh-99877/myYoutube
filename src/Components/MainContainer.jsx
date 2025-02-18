import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { showMore } from "../utils/appSlice";

const MainContainer = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`${isMenu ? "sm:ml-[215px]" : "ml-0"} ] `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
