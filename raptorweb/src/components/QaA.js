import React, { useState } from "react";
import axios from "axios";

const QuestionAnswerApp = () => {
    const [context, setContext] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleContextChange = (e) => {
        setContext(e.target.value);
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAnswerRequest = () => {
        axios
      .post("/api/ask", { context, question })
      .then((response) => {
          setAnswer(response.data.answer);
      })
      .catch((error) => {
          console.error("Error requesting answer:", error);
      });
    };

    return (
        <div>
            <h1>Question Answer App</h1>
            <div>
                <label>
                    Context:
                    <textarea value={context} onChange={handleContextChange} />
                </label>
            </div>
            <div>
                <label>
                    Question:
                    <input type="text" value={question} onChange={handleQuestionChange} />
                </label>
            </div>
            <div>
                <button onClick={handleAnswerRequest}>Get Answer</button>
            </div>
            {answer && (
                <div>
                    <h2>Answer:</h2>
                    <p>{answer}</p>
                </div>
                )}
        </div>
        );
};

export default QuestionAnswerApp;


