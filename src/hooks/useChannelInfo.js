import { useEffect, useState } from "react";
import { ChannelInfo_URl } from "../utils/constants";

const useChannelInfo = (ids, params) => {
    const [channelId, setChannelId] = useState("");
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const getChannelInfo = async (channelId) => {
            try {
                const data = await fetch(ChannelInfo_URl(channelId));
                const json = await data.json();
                console.log(json, "channel infossssssss");
                setChannelId(json.items[0]?.snippet?.thumbnails?.high?.url || "");
                setInfo(json.items[0]);
            } catch (error) {
                console.error("Error fetching channel info:", error);
            }
        };

        ids.forEach((item) => {
            if (item.id === params) {
                const channelId = item?.snippet?.channelId;
                getChannelInfo(channelId);
            }
        });
    }, [ids, params]);

    return {channelId, info};
};

export default useChannelInfo;
