import React from 'react'
import "./main.css"
import { Link } from "react-router-dom";
import { SiFramer } from "react-icons/si";

export default function Main() {
    return (
        <div className="md:flex h-full w-full bg-gradient-to-r from-blue-400 to-emerald-400">
            <div className="grid place-items-center h-screen w-screen">
                <div className="border-2 border-gray-50 flex flex-column items-center justify-center p-12">
                    <div className="text-white text-5xl">
                       <SiFramer className="inline" /> GPT Assist
                    </div>
                    <div className="text-white text-sm mt-3">
                    Supercharge Your Productivity with GPT-Assist:
                 
                    </div>
                    <div className="text-white text-sm">
                    Your AI-Powered Personal Assistant!
                    </div>
                 
                    <div className="flex space-x-2">
                    <Link to="/signup">
                        <button type="button" className="main-btn">
                            Signup
                        </button>
                        </Link>
                        <Link to="/signin">
                        <button type="button" className="main-btn">
                            Signin
                        </button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
