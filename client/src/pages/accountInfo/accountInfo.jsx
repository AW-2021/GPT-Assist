import React from 'react'
import './accountInfo.css'
import LeftNav from '../../components/leftnav/leftnav'
import UpgradePane from "../../components/upgradePane/upgradePane";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

export default function AccountInfo() {
  const [preferences, showPreferences] = useState(true);
  const [profileDetails, showprofileDetails] = useState(false);
  const [plans, showPlans] = useState(false);
  const [apiDashboard, showapiDashboard] = useState(false);
  const [username, setUsername] = useState("");
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    const fetchUserID = async () => {
      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      setUsername(res.data.username);
    };
    fetchUserID();
  }, [username]);

  const Preferences = () => {
    showPreferences(true)
    showprofileDetails(false)
    showPlans(false)
    showapiDashboard(false)
  }

  const ProfileDetails = () => {
    showPreferences(false)
    showprofileDetails(true)
    showPlans(false)
    showapiDashboard(false)
  }

  const PlansAndBilling = () => {
    showPreferences(false)
    showprofileDetails(false)
    showPlans(true)
    showapiDashboard(false)
  }

  const APIDashboard = () => {
    showPreferences(false)
    showprofileDetails(false)
    showPlans(false)
    showapiDashboard(true)
  }

  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="flex flex-col basis-11/12">
        <UpgradePane />
        <div className="md:w-[90%] w-[85%] pl-[80px] pt-[45px]">
          <p className="text-2xl">Account Information</p>
          <div className="flex justify-between items-center pt-3 pb-4 font-bold">
            <button onClick={() => Preferences()} className="hover:text-yellow-500 underline underline-offset-8"><p className="text-sm">Preferences</p></button>
            <button onClick={() => ProfileDetails()} className="hover:text-yellow-500 underline underline-offset-8"><p className="text-sm">Profile Details</p></button>
            <button onClick={() => PlansAndBilling()} className="hover:text-yellow-500 underline underline-offset-8"><p className="text-sm">Plans and Billing</p></button>
            <button onClick={() => APIDashboard()} className="hover:text-yellow-500 underline underline-offset-8"><p className="text-sm">API Dashboard</p></button>
          </div>

          {preferences &&
            <div>
              <p className="mb-2">Languages</p>
              <div className="w-[60%] bg-slate-200 p-8">
                <form>
                  <div>
                    <label className="mb-2">System Language</label>
                    <input type="text" name="category"
                      value='Custom' readOnly
                      className="bg-white mb-4 w-full p-2" />
                  </div>

                  <div className="w-full">
                    <label className="mb-2">Generation Language</label>
                    <input type="text" name="createdBy"
                      value='English' readOnly
                      className="bg-white mb-4 w-full p-2" />
                  </div>

                  <button type="submit" className="btn btn-primary">Save</button>

                </form>
              </div>
            </div>
          }


          {profileDetails &&

            <div>
              <p className="mb-2">Personal Information</p>
              <div className="w-[68%] bg-slate-200 p-6">
                <form>

                  <div className="flex justify-between items-center ">

                    <div>


                      <div>
                        <label className="mb-2">Username</label>
                        <input type="text" name="category"
                          value={username}
                          className="bg-white mb-4 w-full p-2" />
                      </div>


                      <div>
                        <label className="mb-2">Email Address</label>
                        <input type="text" name="createdBy"
                          value={email}
                          className="bg-white mb-4 w-full p-2" />
                      </div>



                    </div>

                    <img className="w-[150px] h-[150px] rounded-[50%] bg-[rgb(216,209,209)]"
                      src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="avatar" />

                  </div>

                  <div className="flex justify-between">

                    <div>
                      <label className="mb-2">Password</label>
                      <input type="text" name="createdBy"
                        value='New Password'
                        className="bg-white mb-4 w-full p-2" />
                    </div>

                    <div>
                      <label className="mb-2">Confirm Password</label>
                      <input type="text" name="createdBy"
                        value='Confirm Password'
                        className="bg-white mb-4 w-full p-2" />
                    </div>

                  </div>

                  <button type="submit" className="btn btn-primary">Update</button>

                </form>
              </div>
            </div>

          }


          {plans &&
            <div>
              <p className="mb-2 font-semibold text-xl">Your Current Plan : Free</p>
              <div className="w-[55%] bg-slate-200 p-6">
                <form>

                  <div className="flex justify-between items-center ">

                    <div className="mb-4">

                      <div>
                        <div className="mb-2 font-semibold text-lg">Upgrade to Pro Plan<br />147 / Annual</div>
                        <div className="mb-2">
                          <input type="checkbox" id="annual" />
                          <label for="annual"> &nbsp; &nbsp; Pay Annually</label><br />
                          <input type="checkbox" id="monthly" />
                          <label for="monthly"> &nbsp; &nbsp; Pay Monthly</label><br />
                        </div>

                      </div>


                    </div>

                    <div>
                      <ul style={{ listStyleType: "circle" }} className="text-sm">
                        <li className="font-semibold">Get Access to all pro features</li>
                        <li>Unlimited Prompts</li>
                        <li>Unlimited Projects</li>
                        <li>Save unlimited copy</li>
                        <li>Access all your copy in one place</li>
                        <li>Get 24/7 support by email</li>
                      </ul>
                    </div>



                  </div>

                  <div className="flex justify-between">

                    <div>
                      <input type="text"
                        value='Name on the card'
                        className="bg-white mb-4 w-full p-2" />
                    </div>

                    <div className="text-xs italic">
                      Safe and secure.<br />Cancel anytime.
                    </div>

                  </div>

                  <div className="flex justify-between">

                    <div>
                      <input type="text"
                        value='Card Number'
                        className="bg-white mb-4 w-full p-2" />
                    </div>

                    <div>
                      <button type="submit" className="btn btn-primary">Pay Now ✈️</button>
                    </div>

                  </div>

                  <div className="flex justify-between">

                    <div>
                      <button type="submit" className="btn btn-light">Use coupon</button>
                    </div>

                    <a href="#" style={{ color: "dodgerblue" }} className="text-sm">
                      <u> Apply code</u>
                    </a>

                    <div className="text-xs italic text-amber-500 font-semibold">
                      Powered by Stripe
                    </div>


                  </div>



                </form>
              </div>
            </div>
          }


          {apiDashboard && <div>
            <p className="mb-2 font-semibold">Get Your OpenAI API Key</p>
            <button className="btn btn-primary mb-2">View Keys on OpenAI 🔑</button>
            <div className="w-[60%] bg-slate-200 p-4">
              <form>
                <div className="mb-2 font-semibold text-lg">Connect your API key</div>
                <div className="flex justify-between items-center ">
                  <div>
                    <label className="mb-2">Enter your API key and save it.</label>
                    <input type="text" name="category"
                      value='key'
                      className="bg-white mb-2 w-full p-2" />
                  </div>
                  <div>
                  <button type="submit" className="btn btn-light">Save</button>
                  </div>
                </div>
              </form>
            </div>
            <p className="mb-1 mt-2 font-semibold underline underline-offset-4">Monitor how much you used</p>
            <p className="mb-1 mt-2 font-semibold text-sm">Tokens</p>
            <p className="mb-2 text-xs">0000 Tokens</p>
            <p className="mb-2 font-semibold text-sm">Words</p>
            <p className="mb-2 text-xs">0000 Words</p>
            <button className="btn btn-success text-sm rounded-xl">View Usage on OpenAI 🖱</button>
          </div>}

        </div>

      </div>

    </div>

  )
}
