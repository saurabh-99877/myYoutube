import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";

const usePopularVideos = (setPopular) => {
     const getPopular =  async () => {
     const data = await fetch(YOUTUBE_API_URL);
     const json = await data.json();
     console.log(json);
     setPopular(json.items);
    }
useEffect(() => {
   getPopular();
}, [])

};

export default usePopularVideos;