import React, { useEffect, useState } from "react";
import usePopularVideos from "../hooks/usePopularVideos";
import { useSearchParams } from "react-router-dom";
import useChannelInfo from "../hooks/useChannelInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { formatData } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetShowMore, showMore } from "../utils/appSlice";
// import { useLocation } from "react-router-dom";

const ChannelInfo = () => {
  const [vid, setVid] = useState([]);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  const channelIds = usePopularVideos(setVid);
  const { channelId, info } = useChannelInfo(channelIds, params);
  const { subscriberCount } = info?.statistics || {};
  const { description } = info?.snippet || {};
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.app.show);

  useEffect(() => {
    dispatch(resetShowMore());
  }, [channelId]);

  //    console.log(channelId, "channelId");
  const handleClick = (e) => {
    dispatch(showMore());
    if (!isOpen) {
      e.target.parentElement.classList.add("h-auto");
    } else {
      e.target.parentElement.classList.remove("h-auto");
    }
  };

  return (
    <div className="max-w-[850px] relative -top-16">
      {vid.map((item) => (
        <div key={item.id}>
          {params === item.id && (
            <div>
              <h1 className="font-bold my-1 text-lg max-w-[850px]">
                {item?.snippet?.title}
              </h1>
              <div className="flex gap-2 my-4">
                <img
                  src={channelId}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-semibold max-w-[200px] whitespace-nowrap">
                    {item?.snippet?.channelTitle.length > 11
                      ? item?.snippet?.channelTitle.slice(0, 11) + "..."
                      : item?.snippet?.channelTitle}
                  </h2>
                  <h4 className="text-xs text-[#606060] whitespace-nowrap">
                    {" "}
                    {formatData(subscriberCount)}subscribers
                  </h4>
                </div>
                <div className="mx-5 shrink-0">
                  <button className="bg-[#f2f2f2] hover:bg-gray-200 px-4 py-1 rounded-2xl font-bold">
                    Join
                  </button>
                  <button className="bg-[#fe0000] hover:bg-black/85 text-white px-4 py-1 rounded-2xl mx-2 font-bold">
                    Subscribe
                  </button>
                </div>
                <div className="bg-[#f2f2f2] px-3 py-2 rounded-2xl flex gap-2 ml-16 shrink-0 h-[40px]">
                  <span className="border-r-2 border-gray-300 px-2">
                    <FontAwesomeIcon icon={faThumbsUp} />{" "}
                    {formatData(item?.statistics?.likeCount)}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsDown} /> Thumbs Down
                  </span>
                </div>
                <div className="shrink-0">
                  <button className="mx-4 bg-[#f2f2f2] hover:bg-gray-200 px-4 py-2 rounded-2xl">
                    <FontAwesomeIcon icon={faShare} /> Share
                  </button>
                  <button className="bg-[#f2f2f2] hover:bg-gray-200 px-3 py-2 rounded-full">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                </div>
              </div>
              <div className="max-w-[850px] bg-[#f2f2f2] px-6 py-10 rounded-md h-[40px] overflow-hidden relative">
                <p className="text-[14px] max-w-[750px]">{description}</p>
                <img
                  src={channelId}
                  alt=""
                  className="w-10 h-10 rounded-full mt-8"
                />
                {/* <h2 className="font-semibold max-w-[200px]">
                  {item?.snippet?.channelTitle}
                </h2> */}
                <h4 className="text-xs text-[#606060]">
                  {" "}
                  {formatData(subscriberCount)}subscribers
                </h4>
                <h2
                  className="absolute font-semibold cursor-pointer bottom-0 right-1"
                  onClick={handleClick}
                >
                  {" "}
                  {isOpen ? "show less" : "...more"}
                </h2>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChannelInfo;
