import LeftNav from "../../components/leftnav/leftnav";
import FormSection from "../../components/formSection/formSection";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { Configuration, OpenAIApi } from "openai";
import { useState, useEffect, useRef, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Modal from "react-modal";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./chat.css";
import "../signup-in/signup-in.css";

export default function Chat(props) {
  const [storedValues, setStoredValues] = useState([]);
  const [openAIKey, setopenAIKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileText, setFileText] = useState("");
  const [userID, setUserID] = useState("");
  const { user } = useContext(AuthContext);
  const email = user.email;
  const editorRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/chat/config").then(async (r) => {
      const { openAIKey } = await r.json();
      console.log(openAIKey);
      setopenAIKey(openAIKey);
    });
  }, []);

  useEffect(() => {
    const fetchUserID = async () => {
      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      setUserID(res.data._id);
    };
    fetchUserID();
  }, [userID]);

  const config = new Configuration({
    apiKey: openAIKey,
  });

  delete config.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(config);

  const generateResponse = async (newQuestion, setNewQuestion, setPrevQuestion, no) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1.5,
      stop: ["/"],
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(options);

    if (response.data.choices) {
      setStoredValues([
        ...storedValues,
        {
          question: newQuestion,
          answer: response.data.choices[no].text,
        },
      ]);

      setPrevQuestion(newQuestion)
      setNewQuestion("");
    }
  };

  const deleteResponse = () => {
    setStoredValues([]);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(storedValues.slice(-1)[0].answer);
  };

  const addToEditor = () => {
    editorRef.current.initialValue = "";
    const lastResponse = storedValues.slice(-1)[0].answer;
    console.log(lastResponse);
    editorRef.current.insertContent(lastResponse);
  };

  const clearEditor = () => {
    editorRef.current.setContent("");
  };

  const handleSaveToFileClick = (e) => {
    e.preventDefault();
    setFileText(editorRef.current ? editorRef.current.getContent() : "")
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveToFile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/file/create",
        {
          name: fileName,
          text: fileText,
          uploadedBy: userID
        });
      console.log(res)
      setIsModalOpen(false);
      setFileName("");
      setFileText("");
      toast.success('File created successfully!', {
        position: toast.POSITION.TOP_CENTER
    });
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

  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="flex flex-col basis-11/12">
        <UpgradePane />
        <div className="w-full h-full flex">
          <div className="flex flex-col w-[100%]">
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleModalClose}
              style={customStyles}
            >
              <form>
                <input
                  className="signup-inInput"
                  type="text"
                  placeholder="Enter Filename"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />

                <textarea
                  rows="5"
                  className="signup-inInput"
                  value={fileText}
                />

                <button
                  type="submit"
                  className="signup-inbtn"
                  onClick={handleSaveToFile}
                >
                  Save
                </button>
              </form>
            </Modal>


            <FormSection generateResponse={generateResponse}
              storedValues={storedValues}
              deleteResponse={deleteResponse}
              copyResponse={copyResponse}
              addToEditor={addToEditor} />
          </div>
          <div className="basis-4/12 bg-[rgb(237,236,236)]">
            <Editor
              apiKey="v4fvwklc00x7u9yylubof99936hjs0u35rxdtoye75p7lzpm"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>Welcome to the TinyMCE editor!</p>"
              init={{
                height: 550,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="button"
                onClick={clearEditor}
                className="btn btn-primary"
                id="clearEditor"
                style={{
                  width: "49%",
                  backgroundColor: "rgb(139, 0, 0)",
                  border: "none",
                }}
              >
                Clear Editor
              </button>
              <button
                type="button"
                onClick={handleSaveToFileClick}
                className="btn btn-primary"
                id="saveToFile"
                style={{
                  width: "49%",
                  backgroundColor: "green",
                  border: "none",
                }}
              >
                Save to File
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
