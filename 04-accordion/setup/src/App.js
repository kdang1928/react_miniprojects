import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h2>Questions</h2>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
