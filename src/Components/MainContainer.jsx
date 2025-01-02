import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import {useSelector} from 'react-redux';


const MainContainer = () => {
    const isMenu = useSelector((store) => store.app.isMenuOpen);
  
  return (
    <div className={`my-5 flex flex-col gap-10  border-2 ${isMenu ? "ml-[215px]" : "ml-5"}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;