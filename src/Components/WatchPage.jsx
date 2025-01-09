import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {
  const [ SearchParams ] = useSearchParams();
  const params = SearchParams.get("v");
 const dispatch = useDispatch();
 const isMenu = useSelector((store) => store.app.isMenuOpen);
  // console.log(SearchParams.get("v"),"para");
useEffect(() => {
 dispatch(closeMenu());
},[]);

  return (
    <div className={`absolute top-20 ${isMenu ? "ml-[215px]" : "mx-5"} px-3`}>
      <iframe width="750" height="380" src={`https://www.youtube.com/embed/${params}?si=deWvD9z_vzgEQRVj`}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage;