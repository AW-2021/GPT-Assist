import React from "react";
import { useState, useContext, useEffect } from "react";
import { CiPaperplane } from "react-icons/ci";
import { AiOutlineFileSearch, AiOutlineProject } from "react-icons/ai";
import { RxPieChart } from "react-icons/rx";
import { SiFramer } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";
import { AuthContext } from '../../context/authContext';
import axios from "axios";

import useMediaQuery from "../../hooks/useMediaQuery";
function LeftNav() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [username, setUsername]=useState('')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const {user}=useContext(AuthContext);
  const email=user.email;

  useEffect(() => {
    const fetchUser=async()=>{
      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      setUsername(res.data.username)
    }
    fetchUser();

}, [username]);


  return (
    <div className="flex flex-col text-white basis-[14%] bg-[#006AB7] h-[1900px]">
      <div className="h-[60px] bg-[#1a5a93] top-0 py-8">
        <div className="w-full h-full flex md:justify-center xs:justify-between items-center text-xl font-bold">
          <p><SiFramer className="inline" />&nbsp;GPT Assist</p>
        {isAboveMediumScreens ? ("") : (
          <button className="rounded-full bg-sky-500 p-2" 
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="menu" src="../../assets/menu-icon.svg" className="mx-auto"/>
          </button> 
        )}
        </div>
      </div>

      {isAboveMediumScreens ? (
        <div className="w-full h-full flex flex-col justify-between">
          <div className="h-full flex flex-col items-start justify-start gap-8 bg-[#006AB7] 
            text-[16px] pt-4 pl-4 font-light">
              <Link className="hover:text-[rgb(212,224,224)]" to="/dashboard">
                <RxPieChart />&nbsp;&nbsp;Dashboard
              </Link>

              <Link to="/chat" className="hover:text-[rgb(212,224,224)]">
                <CiPaperplane />&nbsp;&nbsp;Chat
              </Link>

              <Link to="/projects" className="hover:text-[rgb(212,224,224)]">
                <AiOutlineProject />&nbsp;&nbsp;Projects
              </Link>

              <Link to="/prompts" className="hover:text-[rgb(212,224,224)]">
                <AiOutlineFileSearch />&nbsp;&nbsp;Prompts
              </Link>

              <Link to="/customprompt" className="hover:text-[rgb(212,224,224)]">
                <BiCustomize />&nbsp;&nbsp;Custom Prompts
              </Link>
          </div>

          <div className="bg-[#1a5a93] flex justify-start items-center gap-2 px-3 py-4">
            <BsPersonCircle className="text-2xl"/>
            <Link to="/account" className="hover:text-[rgb(212,224,224)]">{username}</Link>
          </div>
        </div>
      ) : ("")
      }  

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="flex flex-col justify-between fixed right-0 bottom-0 h-full bg-[#006AB7] w-[200px] z-30">
          <div>
            <div className="flex justify-end p-9">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="rounded-full bg-yellow-500 p-1">
                <img alt="close-icon" src="../../assets/close-icon.svg" className="mx-auto" />
              </button>
            </div>

            <div className="flex flex-col ml-[12%] mt-2 gap-4 bg-[#006AB7] 
              text-lg font-light">
                <Link className="hover:text-[rgb(212,224,224)]" to="/dashboard">
                  <RxPieChart />&nbsp;&nbsp;Dashboard
                </Link>

                <Link to="/chat" className="hover:text-[rgb(212,224,224)]">
                  <CiPaperplane />&nbsp;&nbsp;Chat
                </Link>

                <Link to="/projects" className="hover:text-[rgb(212,224,224)]">
                  <AiOutlineProject />&nbsp;&nbsp;Projects
                </Link>

                <Link to="/prompts" className="hover:text-[rgb(212,224,224)]">
                  <AiOutlineFileSearch />&nbsp;&nbsp;Prompts
                </Link>

                <Link to="/customprompt" className="hover:text-[rgb(212,224,224)]">
                <BiCustomize />&nbsp;&nbsp;Custom Prompts
              </Link>
            </div>
          </div>

          <div className="bg-[#1a5a93] flex justify-start items-center gap-2 px-3 py-4">
            <BsPersonCircle className="text-2xl"/>
            <Link to="/account" className="hover:text-[rgb(212,224,224)]">{username}</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftNav;