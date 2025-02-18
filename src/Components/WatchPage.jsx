import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import useComments from "../hooks/useComments";
import ChannelInfo from "./ChannelInfo";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [SearchParams] = useSearchParams();
  const params = SearchParams.get("v");
  const dispatch = useDispatch();
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  const comments = useComments(params);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div
      className={`absolute top-0 sm:top-[15%] ${isMenu ? "sm:ml-[215px]" : "mx-"} sm:px-2 overflow-hidden`}
    >
      <div className="">
        <div className="fixed">
          <iframe
            src={`https://www.youtube.com/embed/${params}?si=deWvD9z_vzgEQRVj`}
            className="sm:rounded-md w-screen sm:pr-4 h-[200px] md:w-[800px] sm:h-[400px]"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      {/* <ChannelInfo /> */}

      <div className="py-2 my-5 relative -top-16">
        {/* <h1 className="text-xl font-semibold my-4">Comments</h1> */}
        {/* <Comments comment={comments} /> */}
      </div>
    </div>
  );
};

export default WatchPage;
