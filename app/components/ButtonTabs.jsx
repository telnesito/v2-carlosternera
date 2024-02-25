import React from 'react';

const ButtonTabs = ({ text, onClick, isActive }) => {
  const handleClick = () => {
    onClick();
  };

  const ACTIVETAB = 'border-l-2 border-x-Green hover:bg-Lightnavy transition-all duration-500  text-left pl-6  text-Green text-[14px] p-2 w-[200px] pt-3 pb-3 bg-Lightnavy'

  const INACTIVETAB = 'border-l-2 border-x-LightestNavy hover:bg-Lightnavy transition-all duration-500  text-left pl-6 text-Slate hover:text-Green text-[14px] p-2 w-[200px] pt-3 pb-3 hover:bg-Lightnavy'



  return (
    <button
      onClick={handleClick}
      className={` transition-all hover:transition-all ${isActive ? ACTIVETAB : INACTIVETAB}`}
    >
      {text}
    </button>
  );
};

export default ButtonTabs;
