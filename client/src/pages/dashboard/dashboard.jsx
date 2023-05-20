import React from "react";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import "../signup-in/signup-in.css";

function Dashboard() {
  const projectsBox = `flex flex-col items-center justify-center border-[2px] 
      border-[#84bde6] w-[225px] h-[125px] rounded-[10px] text-[12px]`;

  const [projName, setProjName] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projFiles, setProjFiles] = useState([]);
  const [userFiles, setUserFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userID, setUserID] = useState("");
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    const fetchUserID = async () => {
      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      setUserID(res.data._id);
    };
    fetchUserID();
  }, [userID]);

  const handleSaveToProjClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/file?userID=${userID}`
      );
      console.log(res);
      setUserFiles(res.data);
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSaveToProj = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/project/create", {
        name: projName,
        description: projDesc,
        files: projFiles,
        createdBy: userID,
      });
      console.log(res);
      setIsModalOpen(false);
      setProjName("");
      setProjDesc("");
      setProjFiles([]);
    } catch (err) {
      console.error(err);
    }
  };

  const customStyles = {
    content: {
      width: "40%",
      height: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      padding: "21px",
    },
  };

  const handleCheckboxChange = (e) => {
    if (e && e.target) {
      const option = e.target.value;
      const isChecked = e.target.checked;

      console.log(option)
      console.log(isChecked)
    }
  };

  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="flex flex-col basis-11/12">
        <UpgradePane />
        <div className="md:w-[60%] w-[85%] flex flex-col justify-between gap-2 pl-[80px] pt-[45px]">
          <p className="text-3xl">Welcome To GPT Assist 👋</p>
          <p className="text-xl py-[12px]">
            Follow These Steps To Get Started And Write Anything And Anywhere
          </p>

          <div
            className="flex gap-6 w-full p-[16px] border-[3px] border-[#086cb9] 
                rounded-[10px] text-sm"
          >
            <div className="basis-1/3 flex flex-col gap-6">
              <p className="text-[0.95vw]">1. "Account Created Successfully"</p>
              <p className="text-[0.95vw]">2. "Watch The Welcome Video"</p>
              <p className="text-[0.95vw]">3. "Add Your Open API Key"</p>
              <p className="text-[0.95vw]">4. "Create Your First Project"</p>
              <p className="text-[0.95vw]">
                5. "Write A Blog For Your Website"
              </p>
              <p className="text-[0.95vw]">6. "Save A Copy"</p>
            </div>

            <div className="basis-1/3 flex flex-col gap-3 px-3">
              <button type="button" className="btn btn-light bg-slate-200">
                Free Plan
              </button>
              <button type="button" className="btn btn-light bg-slate-200">
                Watch Video
              </button>
              <Link to="/account">
                <button
                  type="button"
                  className="btn btn-light bg-slate-200 w-[98%]"
                >
                  Add API Key
                </button>
              </Link>
              <Link to="/projects">
                <button
                  type="button"
                  className="btn btn-light bg-slate-200 w-[98%]"
                >
                  Create
                </button>
              </Link>
              <Link to="/chat">
                <button
                  type="button"
                  className="btn btn-light bg-slate-200 w-[98%]"
                >
                  Write
                </button>
              </Link>
              <button type="button" className="btn btn-light bg-slate-200">
                Save
              </button>
            </div>

            <div className="basis-1/3 flex flex-col gap-[0.7rem] font-bold">
              <Link to="/pricing">
                <button type="button" className="btn btn-primary w-full">
                  Upgrade Now
                </button>
              </Link>
              <div className="mx-auto w-[85%] text-[0.7vw]">
                Important: Watch This Video To Complete Your Account Setup
              </div>
              <div className="mx-auto w-[85%] text-[0.7vw]">
                Integrate Your API Key To Get Started To Writing
              </div>
              <div className="mx-auto w-[85%] text-[0.7vw]">
                Follow The Steps Provided To Start Creating Your Project
              </div>
              <div className="mx-auto w-[85%] text-[0.7vw]">
                Start Writing A Blog Article Or Social Media Post Headlines
              </div>
              <div className="mx-auto w-[85%] text-[0.7vw]">
                Save All Your Copy Generated In One Place And Access Anytime
              </div>
            </div>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleModalClose}
              style={customStyles}
            >
              <form>
                <input
                  className="signup-inInput"
                  type="text"
                  placeholder="Enter project name"
                  value={projName}
                  onChange={(e) => setProjName(e.target.value)}
                />

                <textarea
                  className="signup-inInput"
                  type="text"
                  rows="2"
                  placeholder="Enter project description"
                  value={projDesc}
                  onChange={(e) => setProjDesc(e.target.value)}
                />

                <p className="text-gray-600 text-base">Include files</p>

                <div className="flex flex-col">
                  {userFiles.map((file) => {
                    return (
                      <label className="text-gray-500">
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange()}
                          value={file.name}
                        />
                        &nbsp; {file.name}
                      </label>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="signup-inbtn"
                  onClick={handleSaveToProj}
                >
                  Save
                </button>
              </form>
            </Modal>
          </div>

          <div className="flex items-center justify-between mt-[20px] mb-2">
            <p className="text-xl">Projects :</p>
            <div>
              <Link to="">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleSaveToProjClick}
                >
                  Create A Folder
                </button>
              </Link>
              <Link to="/projects">
                <button type="button" className="btn btn-primary">
                  View All
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className={projectsBox} onClick={handleSaveToProjClick}>
              <AiOutlinePlusCircle style={{ fontSize: "1.5em" }} />
              Create A New Project
            </button>
            <div className={projectsBox}>Project 1</div>
            <div className={projectsBox}>Project 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
