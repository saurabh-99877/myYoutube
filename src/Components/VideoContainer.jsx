import React, { useState } from "react";
import usePopularVideos from "../hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [popular, setPopular] = useState([]);
  usePopularVideos(setPopular);
  // console.log(popular, 'popular');
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`absolute sm:top-40 top-48 grid sm:grid-cols-2 md:grid-cols-3  ${
        isMenu ? "lg:grid-cols-4" : "lg:grid-cols-5"
      } gap-x-2 gap-y-4 px-4  w-full justify-items-center`}
    >
      <VideoCard popular={popular} />
    </div>
  );
};

export default VideoContainer;
