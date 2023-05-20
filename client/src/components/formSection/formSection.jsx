import "./formSection.css";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { SiFramer } from "react-icons/si";

export default function FormSection({ generateResponse,
  storedValues,
  deleteResponse,
  copyResponse,
  addToEditor }) {
  const [newQuestion, setNewQuestion] = useState("");
  const [prevQuestion, setPrevQuestion] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateResponse(newQuestion, setNewQuestion, setPrevQuestion, 0)
      console.log(storedValues)
    }
  };

  return (
    <>

      <div className="answerContainer">
        <div className="answer">
          <div>

            {
              storedValues.map((value) => {
                return (
                  <>
                    <div style={{ display: "flex" }}>
                      <SiFramer
                        style={{
                          color: "#0C5184",
                          fontSize: "1.5em",
                          marginRight: "15px",
                          background: "lightgray",
                          borderRadius: "50%",
                          padding: "2px",
                        }}
                      />

                      <p>{value.question}</p>

                    </div>



                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <SiFramer
                              style={{
                                color: "#0C5184",
                                fontSize: "1.5em",
                                marginRight: "15px",
                                background: "lightgray",
                                borderRadius: "50%",
                                padding: "2px",
                              }}
                            />
                          </td>
                          <td>
                            <p>{value.answer}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                );
              })}


            {newQuestion &&


              <div style={{ display: "flex" }}>
                <SiFramer
                  style={{
                    color: "#0C5184",
                    fontSize: "1.5em",
                    marginRight: "15px",
                    background: "lightgray",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                />

                <p>{newQuestion}</p>

              </div>

            }


          </div>

        </div>

        <div className="chatIcons">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => deleteResponse()}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => copyResponse()}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => addToEditor()}
          >
            Add to Editor
          </button>
        </div>
      </div>



      <div className="form-section">
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={() => generateResponse(prevQuestion, setNewQuestion, setPrevQuestion, 0)}
        >
          Regenerate Now 🤖
        </button>
        <div style={{ display: "flex", width: "95%", borderTop: "1px solid rgb(204, 199, 199)" }}>
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
            onClick={() => generateResponse(newQuestion, setNewQuestion, setPrevQuestion, 0)}
          >
            <BsSend style={{ fontSize: "1.3em", color: "grey" }} />
          </button>
        </div>
      </div>
    </>
  );
}
