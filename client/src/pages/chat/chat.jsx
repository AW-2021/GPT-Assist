import React from "react";
import "./chat.css";
import LeftNav from "../../components/leftnav/leftnav";
import FormSection from "../../components/formSection/formSection";
import AnswerSection from "../../components/answerSection/answerSection";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function Chat() {
  const [storedValues, setStoredValues] = useState([]);

  const config = new Configuration({
    apiKey: "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"
  });
  delete config.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(config);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['/'],
      prompt: newQuestion, 
    };

    const response = await openai.createCompletion(options);
    
    if (response.data.choices) {
      
      console.log(response.data.choices[0].text);

      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }

  };

  return (
    <div className="chatContainer">
      <LeftNav />
      <div className="OuterWrapper">
        <UpgradePane />
        <div className="InnerWrapper">
          <div className="chat">
            <AnswerSection storedValues={storedValues} />
            <FormSection generateResponse={generateResponse} />
          </div>
          <div className="editor">editor</div>
        </div>
      </div>
    </div>
  );
}
