import "./answerSection.css";
import { SiFramer } from "react-icons/si";

export default function AnswerSection() {
  return (
    <div className="answerContainer">
      <div className="answer">
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
          <p>Who is the founder of OpenAi?</p>
        </div>
        
        <table>
          <tr>
            <td>
              {" "}
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
              {" "}
              <p>
                OpenAI was founded in December 2015 by Elon Musk, Sam Altman,
                Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and John
                Schulman.
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div className="chatIcons">
        <button type="button" class="btn btn-light">
          Delete
        </button>
        <button type="button" class="btn btn-light">
          Copy
        </button>
        <button type="button" class="btn btn-light">
          Add to Editor
        </button>
      </div>
    </div>
  );
}
