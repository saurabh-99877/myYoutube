import React, { useState } from 'react'
import usePopularVideos from '../hooks/usePopularVideos';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [popular, setPopular] = useState([]);
  usePopularVideos(setPopular);
  console.log(popular, 'popular');
  return (
    <div className={`absolute top-40  h-full grid grid-cols-5 gap-2 p-2 `}>
      <VideoCard popular={popular}/>
</div>

  )
}

export default VideoContainer;