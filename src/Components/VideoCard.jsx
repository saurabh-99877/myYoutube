import React from 'react'
import { formatViews } from '../utils/constants'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
const videoCard = ({popular}) => {
  return (
    popular.map((item) => {
        return(
             <Link to={"/watch?v="+ item.id}>
              <div key={item.id} className=''>
                <img src={item.snippet.thumbnails.medium.url} alt="" className='rounded-md'/>
                <p className='text-xs text-[]'>{item.snippet.title}</p>
                <p className='text-xs text-[]'>{item.snippet.channelTitle}</p>
                <div className='text-xs'>
                <span>{formatViews(item.statistics.viewCount)}</span>
                <span>{formatDistanceToNow(new Date(item.snippet.publishedAt))}</span>
                </div>
            </div>
            </Link>
        )
    })
  )
}

export default videoCard;