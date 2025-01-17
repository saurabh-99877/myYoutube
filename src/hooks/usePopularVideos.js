import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";

const usePopularVideos = (setPopular) => {
   const [channelId, setChannelId] = useState([]);
     const getPopular =  async () => {
     const data = await fetch(YOUTUBE_API_URL);
     const json = await data.json();
     console.log(json);
     setPopular(json.items);
     setChannelId(json.items);
    }
useEffect(() => {
   getPopular();
}, [])
return channelId;
};

export default usePopularVideos;