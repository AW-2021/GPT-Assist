import "./answerSection.css";
import { SiFramer } from "react-icons/si";

export default function AnswerSection({ storedValues }) {
  return (
    <div className="answerContainer">
      <div className="answer">
        {storedValues.map((value) => {
          return (
            <div>
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
              </table>
            </div>
          );
        })}
      </div>

      <div className="chatIcons">
        <button type="button" className="btn btn-light">
          Delete
        </button>
        <button type="button" className="btn btn-light">
          Copy
        </button>
        <button type="button" className="btn btn-light">
          Add to Editor
        </button>
      </div>
    </div>
  );
}
