import React, { useState, useEffect } from "react";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { BsSearch } from "react-icons/bs";
import PromptBox from "../../components/promptBox/promptBox";
import axios from 'axios';

export default function PromptLibrary() {

  // useEffect(() => {
  //   const newPrompts = [
  //     {
  //       category: 'Twitter' ,
  //       content: 'Create a Twitter list of industry thought leaders for followers.',
  //       userAccessType: 'free'
  //     },
  //     {
  //       category: 'Social Media',
  //       content: 'Create a before-and-after post showcasing a transformation on Instagram.',
  //       userAccessType: 'free'
  //     },
  //     {
  //       category: 'YouTube',
  //       content: 'Analyze video performance with YouTube Analytics.',
  //       userAccessType: 'free'
  //     },
  //     {
  //       category: 'LinkedIn',
  //       content: 'Optimize your LinkedIn profile for professional branding.',
  //       userAccessType: 'free'
  //     },
  //     {
  //       category: 'Blog Articles',
  //       content: "Write a case study showcasing a client's success with your product or service.",
  //       userAccessType: 'free'
  //     },
  //     {
  //       category: 'Copy Writing' ,
  //       content: 'Write a persuasive sales letter that addresses important points.',
  //       userAccessType: 'free'
  //     },
  //   ];
    
  //   newPrompts.map(newPrompt => (
  //     axios.post('http://localhost:3000/prompt', newPrompt)
  //     .then(response => console.log(response))
  //     .catch(error => console.error(error))
  //   ));
  // }, []);

  const [prompts, setPrompts] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/prompt')
    .then(response => setPrompts(response.data))
    .catch(error => console.error(error));
  }, []);

  const handleCategoryFilter = (categoryType) => {
    axios.get(`http://localhost:3000/prompt?category=${categoryType}`)
    .then(response => setPrompts(response.data))
    .catch(error => console.error(error));
  }

  const handleFilterClick = (categoryType) => {
    if (categoryType === 'Social Media' || categoryType === 'Twitter' || categoryType === 'YouTube' || categoryType === 'LinkedIn' 
    || categoryType === 'Blog Articles' || categoryType === 'Copy Writing' || categoryType === 'Business' || categoryType === 'Others'){
      setShowAll(false);
    }
    else if (categoryType === ''){
      setShowAll(true)
    }
    handleCategoryFilter(categoryType);
  }

  return (
    <div className={`md:flex w-full ${!showAll && "h-[100vh]"}`}>
      <LeftNav />
      <div className="flex flex-col basis-11/12 bg-gray-100 h-full">
        <UpgradePane />
        <div className="flex flex-col w-[90%] pt-8 mx-auto h-full">
          <div className="flex items-center justify-around rounded-[10px] bg-white h-12 border-[rgb(224,224,224)] border-2">
            <button type="submit" className="text-lg px-[10px] h-full">
              <BsSearch style={{ color: "grey" }} />
            </button>
            <input
              type="text"
              className="text-lg w-[96%] border-none outline-none"
              placeholder="Double click on a box below to copy!"
            />
          </div>

          <div className="flex justify-between items-center pt-3 pb-4 font-bold">
            <button type="button" className="btn btn-primary w-[12%]" onClick={() => handleFilterClick('')}>
              All Prompts
            </button>
            <button onClick={() => handleFilterClick('Social Media')} className="hover:text-yellow-500"><p className="text-sm">Social Media</p></button>
            <button onClick={() => handleFilterClick('Twitter')} className="hover:text-yellow-500"><p className="text-sm">Twitter</p></button>
            <button onClick={() => handleFilterClick('YouTube')} className="hover:text-yellow-500"><p className="text-sm">YouTube</p></button>
            <button onClick={() => handleFilterClick('LinkedIn')} className="hover:text-yellow-500"><p className="text-sm">LinkedIn</p></button>
            <button onClick={() => handleFilterClick('Blog Articles')} className="hover:text-yellow-500"><p className="text-sm">Blog Articles</p></button>
            <button onClick={() => handleFilterClick('Copy Writing')} className="hover:text-yellow-500"><p className="text-sm">Copy Writing</p></button>
            <button onClick={() => handleFilterClick('Business')} className="hover:text-yellow-500"><p className="text-sm">Business</p></button>
            <button onClick={() => handleFilterClick('Others')} className="hover:text-yellow-500"><p className="text-sm">Others</p></button>
          </div>
         
          <div className="grid grid-cols-4 gap-4 py-[10px]">
            {prompts.map(prompt => (
            <PromptBox key={prompt._id} src="https://cdn-icons-png.flaticon.com/512/2600/2600291.png" 
              alt={prompt.category} txt={prompt.category} desc={prompt.content} />
          ))}
          {/* <p onClick={handleClick(prompt.content)}>skcjlaks</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}