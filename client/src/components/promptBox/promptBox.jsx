import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PromptBox(props) {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();
  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
        navigate('/chat');
      }
    }, 1000);
  }

  function handleClick(text) {
    return function() {
      handleCopy(text);
    }
  }
  return (
    <div className="relative flex flex-col p-3 border-[2px] border-[#086cb9] rounded-[18px] 
      hover:shadow-xl hover:shadow-sky-600/30" onClick={handleClick(props.desc)}>
      <div className="flex justify-between items-center">
        <img className="w-[40px] h-[40px] rounded-[50%] bg-[rgb(216,209,209)]" 
          src={props.src} alt={props.alt} />
        <p className="bg-[#174b8b] text-white px-3 py-1 text-[10px] rounded-[5px]">NEW</p>
      </div>

      <div className="text-[16px] my-2 capitalize">{props.txt}</div>
      <p className="text-[13px] pb-3">
        <i>"{props.desc}"</i>
      </p>
    </div>
  );
}
