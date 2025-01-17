import { ytLogo } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useSearchSuggestion from '../hooks/useSearchSuggestion';
import { Link } from 'react-router';

const Header = () => {
    const [query, setQuery] = useState("");
    const [blur, setBlur] = useState(false);
    const dispatch = useDispatch();
    const suggestions = useSearchSuggestion(query);
  //  console.log(suggestions, "suggestions");
    const handleMenu = () => {
     dispatch(toggleMenu());
    }

    const handleChange = (e) => {
      setQuery(e.target.value);
    }

    const handleBlur = () => {
     setBlur(true);
    }

    const handleFocus = () => {
      setBlur(false);
    }

    return (
        <div className='px-5 pb-2 flex fixed top-0  bg-[#ffffff] z-20'>
            <div className='mt-4 mr-5'>
                <span className='text-xl cursor-pointer'
                onClick={handleMenu}>☰</span>
            </div>

          <div className='cursor-pointer shrink-0'>
          <Link to="/">
          <img src={ytLogo} alt="" 
          className="w-24 sm:w-28 mt-1"/>
                </Link>
            </div>

            <div className="mx-72 mt-2 flex">
            <input
              type="text"
              className="w-[410px] rounded-l-xl border-2 border-[#d3d3d3] px-3 outline-none transition-all focus:border-blue-500"
              placeholder="Search"
              value={query}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
  <button
    className="bg-[#f8f8f8] hover:bg-[#f0f0f0] px-4 text-black rounded-r-xl flex items-center justify-center transition-all
    border-2 border-[#d3d3d3]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M10 2a8 8 0 0 1 5.66 13.66l4.95 4.95a1 1 0 0 1-1.42 1.42l-4.95-4.95A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
    </svg>
  </button>
</div>

<FontAwesomeIcon icon={faUser} className='text-2xl mt-4 bg-red-500 p-2 rounded-full cursor-pointer relative right-6'/>

{ !blur && <div className={`text-black bg-white absolute top-[59px] left-[460px] z-50 rounded-md w-[410px] px-3 space-y-2 shadow-sm shadow-black`}>
  {
    (suggestions || []).map((suggest) => (
      <div className={`cursor-pointer hover:bg-gray-100 py-2 flex gap-x-2`} key={suggest}>
        <button>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M10 2a8 8 0 0 1 5.66 13.66l4.95 4.95a1 1 0 0 1-1.42 1.42l-4.95-4.95A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
    </svg>
    </button>
    <span>{suggest}</span>
      </div>
    ))
  }
</div>
}
 </div>
 )
};

export default Header;