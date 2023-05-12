import React from "react";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { AuthContext } from "../../context/authContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Projects() {
  const [userFiles, setUserFiles] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
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

  useEffect(() => {
    const fetchUserFiles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/file?userID=${userID}`
        );
        console.log(res);
        setUserFiles(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserFiles();
  }, [userID]);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/project?userID=${userID}`
        );
        console.log(res);
        setUserProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserProjects();
  }, [userID]);

  const projectsBox = `flex flex-col items-center justify-center border-[2px] 
      border-[#84bde6] w-[225px] h-[125px] rounded-[10px] text-[12px] hover:shadow-lg`;

  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="flex flex-col basis-11/12">
        <UpgradePane />
        <div className="md:w-[90%] w-[85%] pl-[80px] pt-[45px]">
          <p className="text-2xl">Projects</p>
          <div className="grid grid-cols-4 gap-4 py-[10px]">
          {userProjects.map((project) => {
              return <div className={projectsBox}>{project.name}</div>;
            })}
          </div>
        </div>
        <div className="md:w-[90%] w-[85%] pl-[80px] pt-[20px]">
          <p className="text-2xl">Files</p>
          <div className="grid grid-cols-4 gap-4 py-[10px]">
            {userFiles.map((file) => {
              return <div className={projectsBox}>{file.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
