import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-0 m-2 shadow-lg justify-between">
      <div className="flex col-start-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="Hamburger Icon"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-10 mx-1"
          alt="You-Tube Icon"
          src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.svg"
        />
      </div>
      <div className="flex col-span-8">
        <div className="flex w-[54rem] col-span-8">
          <input
            className=" px-5 w-1/2 h-9 p-2 border rounded-l-full border-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-9 px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 shadow-lg rounded-lg mx-0 my-9 w-[27rem]">
            <ul>
              {suggestions.map((s) => {
                return <li key={s}>🔍 {s}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img
          className="h-10"
          alt="User Icon"
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
