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
      <h1 className="app-title">Raptor</h1>
      {/* ... */}
      <div className="input-container">
          <label className="input-label">
            <h2>Context</h2>
          <textarea className="input-field" value={context} onChange={handleContextChange} />
        </label>
      </div>
      <div className="input-container">
          <label className="input-label">
          <h2>Question</h2>
          <input className="input-field" type="text" value={question} onChange={handleQuestionChange} />
        </label>
      </div>
      <div>
        <button className="button" onClick={handleAnswerRequest}>Get Answer</button>
      </div>
        {answer && (
            <div>
                <h2>Answer:</h2>
                <p>{answer}</p>
            </div>
            )}
      {/* ... */}
    </div>
    );
};

export default QuestionAnswerApp;


