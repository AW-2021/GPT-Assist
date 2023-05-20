import React, { useState, useEffect, useContext } from "react";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CustomPrompt() {
    
    const [prompts, setPrompts] = useState([]);
    const [promptText, setPromptText] = useState('');
    const [username, setUsername]=useState('')
    const [userID, setUserID] = useState('');
    const { user } = useContext(AuthContext);
    const email = user.email;

    useEffect(() => {
        const fetchUser = async()=>{
          const res = await axios.get(`http://localhost:3000/user?email=${email}`);
          setUsername(res.data.username)
        }
        fetchUser();
    
    }, [username]);

    useEffect(() => {
        const fetchUserID = async () => {
          const res = await axios.get(`http://localhost:3000/user?email=${email}`);
          setUserID(res.data._id);
        };
        fetchUserID();
      }, [userID]);

    useEffect(() => {
        axios.get('http://localhost:3000/prompt')
        .then(response => {
            setPrompts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    function handlePromptTextChange(event) {
        setPromptText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/prompt', {
            content: promptText,
            category: 'Custom',
            userAccessType: 'free',
            createdBy: userID
        })
        .then(response => setPrompts([...prompts, response.data]))
        .catch(error => console.log(error));
        setPromptText('');

        toast.success('Submitted successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    
    return (
        <div className="md:flex h-full w-full">
            <LeftNav />
            <div className="flex flex-col basis-11/12">
                <UpgradePane />
                <div className="flex flex-col w-[90%] pt-8 mx-auto h-full">
                    <h1 className="text-sky-800 text-2xl font-bold mb-6 py-4">Create Your Custom Prompt!</h1>
                    <div className="w-[60%] bg-slate-200 p-8">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="mb-2">Category:</label>
                                <input type="text" name="category" 
                                    value='Custom' readOnly
                                    className="bg-white mb-4 w-full p-2" />
                            </div>

                            <div className="w-full">
                                <label className="mb-2">Created by: </label>
                                <input type="text" name="createdBy" 
                                    value={username} readOnly
                                    className="bg-white mb-4 w-full p-2"/>
                            </div>

                            <div>
                                <label className="mb-2">Prompt Content:</label>
                                <textarea type="text" name="content" rows="4"
                                    value={promptText} required
                                    className="bg-white mb-4 w-full p-2" 
                                    onChange={handlePromptTextChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Prompt</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}