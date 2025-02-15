import { ytLogo } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useSearchSuggestion from "../hooks/useSearchSuggestion";
import { Link } from "react-router";
import MobileHeader from "./SearchBar";
const Header = () => {
  const [query, setQuery] = useState("");
  const [blur, setBlur] = useState(false);
  const dispatch = useDispatch();
  const suggestions = useSearchSuggestion(query);
  //  console.log(suggestions, "suggestions");
  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleBlur = () => {
    setBlur(true);
  };

  const handleFocus = () => {
    setBlur(false);
  };

  return (
    <div className="px-2 sm:px-5 flex items-center  fixed top-0  bg-[#ffffff] z-20 w-full  pb-6">
      <div className=" mr-5">
        <span className="text-xl cursor-pointer" onClick={handleMenu}>
          ☰
        </span>
      </div>

      <div className="cursor-pointer shrink-0 mt-1">
        <Link to="/">
          <img
            src="https://th.bing.com/th/id/OIP.Jl_Z-ZVmTIIi4kL_tN3Z7AHaHx?w=157&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>
      </div>

      <div className="pb-3 pr-4 bg-white absolute top-16 sm:top-0 mx-auto sm:mx-36 md:mx-44 lg:mx-96 mt-2 flex shrink-0 w-full sm:w-[60%]">
        <input
          type="text"
          className="sm:w-[] md:w- lg:w-[500px] rounded-l-xl border-2 border-[#d3d3d3] px-3 py-2 outline-none transition-all focus:border-blue-500 w-screen bg-white"
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

      <FontAwesomeIcon
        icon={faUser}
        className="ml-auto mr-2 text-2xl mt-2 bg-red-500 p-2 rounded-full cursor-pointer "
      />

      {!blur && (
        <div
          className={`text-black bg-white absolute top-[59px] left-[460px] z-50 rounded-md w-[410px] px-3 space-y-2 shadow-sm shadow-black`}
        >
          {(suggestions || []).map((suggest) => (
            <div
              className={`cursor-pointer hover:bg-gray-100 py-2 flex gap-x-2`}
              key={suggest}
            >
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
          ))}
        </div>
      )}
    </div>
    // <MobileHeader />
  );
};

export default Header;