import React from 'react'
import { formatData } from '../utils/constants'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
const videoCard = ({popular}) => {
  return (
    popular.map((item) => {
        return(
             <Link to={"/watch?v="+ item.id}>
              <div key={item.id} className=''>
                <img src={item.snippet.thumbnails.medium.url} alt="" className='rounded-md'/>
                <p className='text-xs'>{item.snippet.title}</p>
                <p className='text-xs'>{item.snippet.channelTitle}</p>
                <div className='text-xs'>
                <span>{formatData(item.statistics.viewCount)} views</span>
                <span className='ml-1'>{formatDistanceToNow(new Date(item.snippet.publishedAt))}</span>
                </div>
            </div>
            </Link>
        )
    })
  )
}

export default videoCard;