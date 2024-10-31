import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
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
        <input
          className="w-1/2 h-9 p-2 border rounded-l-full border-gray-400"
          type="text"
        />
        <button className="h-9 px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100">
          🔍
        </button>
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
