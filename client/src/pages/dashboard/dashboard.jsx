import React from "react";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Dashboard() {
    const projectsBox = `flex flex-col items-center justify-center border-[2px] 
      border-[#84bde6] w-[225px] h-[125px] rounded-[10px] text-[12px]`;
    
    return (
        <div className="md:flex w-full h-full">
          <LeftNav />
          <div className="flex flex-col basis-11/12">
            <UpgradePane />
            <div className="md:w-[60%] w-[85%] flex flex-col justify-between gap-2 pl-[80px] pt-[45px]">
              <p className="text-3xl">Welcome To GPT Assist 👋</p>
              <p className="text-xl py-[12px]">Follow These Steps To Get Started And Write Anything And Anywhere</p>
              
              <div className="flex gap-6 w-full p-[16px] border-[3px] border-[#086cb9] 
                rounded-[10px] text-sm">
                <div className="basis-1/3 flex flex-col gap-6">
                  <p className="text-[0.95vw]">1. "Account Created Successfully"</p>
                  <p className="text-[0.95vw]">2. "Watch The Welcome Video"</p>
                  <p className="text-[0.95vw]">3. "Add Your Open API Key"</p>
                  <p className="text-[0.95vw]">4. "Create Your First Project"</p>
                  <p className="text-[0.95vw]">5. "Write A Blog For Your Website"</p>
                  <p className="text-[0.95vw]">6. "Save A Copy"</p>
                </div>

                <div className="basis-1/3 flex flex-col gap-3 px-3">
                  <button type="button" className="btn btn-light bg-slate-200">Free Plan</button>
                  <button type="button" className="btn btn-light bg-slate-200">Watch Video</button>
                  <Link to="/account"><button type="button" className="btn btn-light bg-slate-200 w-[98%]">Add API Key</button></Link>
                  <Link to="/projects"><button type="button" className="btn btn-light bg-slate-200 w-[98%]">Create</button></Link>
                  <Link to="/chat"><button type="button" className="btn btn-light bg-slate-200 w-[98%]">Write</button></Link>
                  <button type="button" className="btn btn-light bg-slate-200">Save</button>
                </div>

                <div className="basis-1/3 flex flex-col gap-[0.7rem] font-bold">
                  <Link to="/pricing"><button type="button" className="btn btn-primary w-full">Upgrade Now</button></Link>
                  <div className="mx-auto w-[85%] text-[0.7vw]">Important: Watch This Video To Complete Your Account Setup</div>
                  <div className="mx-auto w-[85%] text-[0.7vw]">Integrate Your API Key To Get Started To Writing</div>
                  <div className="mx-auto w-[85%] text-[0.7vw]">Follow The Steps Provided To Start Creating Your Project</div>
                  <div className="mx-auto w-[85%] text-[0.7vw]">Start Writing A Blog Article Or Social Media Post Headlines</div>
                  <div className="mx-auto w-[85%] text-[0.7vw]">Save All Your Copy Generated In One Place And Access Anytime</div>
                </div>
              </div>  

              <div className="flex items-center justify-between mt-[20px] mb-2">
                <p className="text-xl">Projects :</p>
                <div>
                  <Link to=""><button type="button" className="btn btn-light">Create A Folder</button></Link>
                  <Link to="/projects"><button type="button" className="btn btn-primary">View All</button></Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className={projectsBox}>
                  <AiOutlinePlusCircle style={{fontSize: "1.5em"}}/>
                    Create A New Project
                </div>
                <div className={projectsBox}>
                  Project 1
                </div>
                <div className={projectsBox}>
                  Project 2
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Dashboard;