import AccountInfo from "./pages/accountInfo/accountInfo";
import Chat from "./pages/chat/chat";
import Dashboard from "./pages/dashboard/dashboard";
import PromptLibrary from "./pages/promptLibrary/promptLibrary";
import Welcome from "./pages/welcome/welcome";
import Projects from "./pages/projects/projects";
import Signup from "./pages/signup-in/signup";
import Signin from "./pages/signup-in/signin";
import Main from "./pages/main/main";
import PricingPlans from "./pages/pricingplans/pricingplans";
import StripeCheckout from "./pages/stripecheckout/stripecheckout";
import CustomPrompt from "./pages/customPrompt/customPrompt";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/prompts" element={<PromptLibrary />} />
          <Route path="/customprompt" element={<CustomPrompt />}/>
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/pricing" element={<PricingPlans/>}/>
          <Route path="/checkout" element={<StripeCheckout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
