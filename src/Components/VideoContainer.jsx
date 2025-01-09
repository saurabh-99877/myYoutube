import React, { useState } from 'react'
import usePopularVideos from '../hooks/usePopularVideos';
import VideoCard from './VideoCard';
import {useSelector} from 'react-redux';
// import { Link } from 'react-router-dom';


const VideoContainer = () => {
  const [popular, setPopular] = useState([]);
  usePopularVideos(setPopular);
  console.log(popular, 'popular');
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  
  return (
    <div className={`absolute top-40 grid ${isMenu ? "grid-cols-4" : "grid-cols-5"} gap-x-2 gap-y-4`}>
    <VideoCard popular={popular}/>
</div>

  )
}

export default VideoContainer;