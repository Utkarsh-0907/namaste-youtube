import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Cricket",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((items, index) => (
        <Button key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonList;
