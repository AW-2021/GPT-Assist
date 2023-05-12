import "./formSection.css";
import { useState } from "react";
import { BsSend } from "react-icons/bs";

export default function FormSection({ generateResponse }) {
  const [newQuestion, setNewQuestion] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateResponse(newQuestion, setNewQuestion, 0)
    }
  };

  return (
    <div className="form-section">
      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={() => generateResponse(newQuestion, setNewQuestion, 0)}
      >
        Regenerate Now 🤖
      </button>
      <div style={{ display: "flex", width:"95%", borderTop:"1px solid rgb(204, 199, 199)"}}>
        <textarea
          rows="2"
          className="form-control"
          placeholder="E.G: 'I want to start a car washing business that would make me rich'"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          onClick={() => generateResponse(newQuestion, setNewQuestion,0)}
        >
        <BsSend style={{fontSize: "1.3em", color: "grey"}}/>
        </button>
      </div>
    </div>
  );
}
