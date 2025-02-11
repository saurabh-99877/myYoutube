import React from "react";

const Comments = ({ comment }) => {
  return (
    <div>
      {comment.map((comment) => (
        <div className="text-sm my-8 flex gap-3">
          <div className="shrink-0">
            <img
              src={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              alt="image"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold">
              {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
            <p className="max-w-[750px]">
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
