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
      className={`absolute top-[65px] ${isMenu ? "ml-[215px]" : "mx-5"} px-3`}
    >
      <div className="grid grid-cols-3 gap-24">
        <div className="col-span-2 h-[420px]">
          <iframe
            width="850"
            height="420"
            src={`https://www.youtube.com/embed/${params}?si=deWvD9z_vzgEQRVj`}
            className="rounded-md"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      <ChannelInfo /> 
      
      <div className="py-2 my-5 relative -top-16">
        <h1 className="text-xl font-semibold my-4">Comments</h1>
        <Comments comment={comments} />
      </div>
    </div>
  );
};

export default WatchPage;
