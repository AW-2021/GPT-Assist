import AccountInfo from "./pages/accountInfo/accountInfo";
import Chat from "./pages/chat/chat";
import Dashboard from "./pages/dashboard/dashboard";
import PromptLibrary from "./pages/promptLibrary/promptLibrary";
import Welcome from "./pages/welcome/welcome";
import Projects from "./pages/projects/projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/prompts" element={<PromptLibrary />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
