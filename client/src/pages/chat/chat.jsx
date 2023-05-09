import LeftNav from "../../components/leftnav/leftnav";
import FormSection from "../../components/formSection/formSection";
import AnswerSection from "../../components/answerSection/answerSection";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { Configuration, OpenAIApi } from "openai";
import { useState,  useEffect } from "react";

export default function Chat() {
  const [storedValues, setStoredValues] = useState([]);
  const [openAIKey, setopenAIKey] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/chat/config").then(async (r) => {
      const { openAIKey } = await r.json();
      console.log(openAIKey);
      setopenAIKey(openAIKey)
    });
  }, []);


  const config = new Configuration({
    apiKey: openAIKey,
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
      stop: ["/"],
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(options);

    if (response.data.choices) {
      setStoredValues([
        ...storedValues,
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
      ]);
      setNewQuestion("");
    }
  };

  const deleteResponse = () => {
    setStoredValues([]);
  };

  const copyResponse = () => {
  };

  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="flex flex-col basis-11/12">
        <UpgradePane />
        <div className="w-full h-full flex">
          <div className="flex flex-col w-[100%]">
            <AnswerSection storedValues={storedValues} deleteResponse={deleteResponse} copyResponse={copyResponse}/>
            <FormSection generateResponse={generateResponse} />
          </div>
          <div className="basis-4/12 bg-[rgb(237,236,236)]">editor</div>
        </div>
      </div>
    </div>
  );
}
