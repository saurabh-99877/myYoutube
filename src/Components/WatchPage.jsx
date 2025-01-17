import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router';
import useComments from '../hooks/useComments';
import ChannelInfo from './ChannelInfo';

const WatchPage = () => {
  const [ SearchParams ] = useSearchParams();
  const params = SearchParams.get("v");
  const dispatch = useDispatch();
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  const comments = useComments(params);
   
  useEffect(() => {
  dispatch(closeMenu());
  },[dispatch]);

  return (
    <div className={`absolute top-20 ${isMenu ? "ml-[215px]" : "mx-5"} px-3`}>
    <div>
      <iframe width="850" height="380" src={`https://www.youtube.com/embed/${params}?si=deWvD9z_vzgEQRVj`}
        className='rounded-md' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <ChannelInfo />
    <div className='py-2 my-5'>
      <h1 className='text-xl font-semibold my-4'>Comments</h1>
      {
        comments.map((comment) => (
                  
                  <div className='text-sm my-8 flex gap-3'>
           <div className='shrink-0'>
          <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="image"
          className='rounded-full' />
          </div>
          <div>
          <p className='font-semibold'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
          <p className='max-w-[750px]'>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
          </div>
        </div>
        ))
      }
    </div> 
    </div>
  )
}

export default WatchPage;
