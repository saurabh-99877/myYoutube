import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";

const usePopularVideos = (setPopular) => {
  const [channelId, setChannelId] = useState([]);

  const getPopular = async (pageToken = "") => {
    let url = `${YOUTUBE_API_URL}&maxResults=50`; // Start with base URL

    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      setPopular((prev) => [...prev, ...json.items]);
      setChannelId((prev) => [...prev, ...json.items]);

      // Fetch next page if available
      if (json.nextPageToken) {
        await getPopular(json.nextPageToken);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return channelId;
};

export default usePopularVideos;
