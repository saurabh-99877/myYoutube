import { ytLogo } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const handleMenu = () => {
     dispatch(toggleMenu());
    }
    return (
        <div className='px-5 pb-2 flex fixed top-0 z-10 bg-[#ffffff] '>
            <div className='mt-4 mr-5'>
                <span className='text-xl cursor-pointer'
                onClick={handleMenu}>☰</span>
            </div>

            <div className='cursor-pointer shrink-0'>
                <img src={ytLogo} alt="" 
                className="w-24 sm:w-28 mt-1"/>
            </div>

            <div className="mx-72 mt-2 flex">
            <input
    type="text"
    className="w-[410px] rounded-l-xl border-2 border-[#d3d3d3] px-3 outline-none  transition-all focus:border-blue-500"
    placeholder="Search"
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

<FontAwesomeIcon icon={faUser} className='text-2xl mt-4 bg-red-500 p-2 rounded-full cursor-pointer ml-32'
/>
        </div>
    )
};

export default Header;