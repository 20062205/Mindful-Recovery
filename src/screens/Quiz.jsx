// import React, { useState } from "react";
// import "./styles.css";

// const quizQuestions = [
//   { question: "Do you have trouble relaxing?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
//   { question: "Do you avoid certain situations due to anxiety?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
//   { question: "Do you feel restless or on edge?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
//   // Add more questions here as needed
// ];

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [yesCount, setYesCount] = useState(0);
//   const [showResults, setShowResults] = useState(false);

//   const handleAnswer = (option) => {
//     if (option === "Very much") {
//       setYesCount(yesCount + 1);
//     }
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   const anxietyLevel = yesCount < 5 ? "Low" : yesCount < 10 ? "Medium" : "High";

//   return (
//     <div className="quiz-container">
//       <header>
//         <h1>Quiz</h1>
//       </header>
//       <main>
//         {showResults ? (
//           <div id="quiz-results">
//             <h2>Your Anxiety Level: {anxietyLevel}</h2>
//           </div>
//         ) : (
//           <div id="quiz-display">
//             <h3>
//               Question {currentQuestion + 1}: {quizQuestions[currentQuestion].question}
//             </h3>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {quizQuestions[currentQuestion].options.map((option, index) => (
//                 <li key={index}>
//                   <button onClick={() => handleAnswer(option)}>{option}</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <div className="back">
//           <button>
//             <a href="/">Back to Homepage</a>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Quiz;

import React, { useState } from "react";
import "./quiz.css"; // Ensure you import the CSS file for styling

const quizQuestions = [
  { question: "Do you have trouble relaxing?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you avoid certain situations due to anxiety?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you feel restless or on edge?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Are you easily fatigued?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you have difficulty concentrating?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you experience irritability?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you have muscle tension?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you have sleep problems?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you feel overwhelmed?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
  { question: "Do you avoid social situations?", options: ["Not at all", "A little bit", "Somewhat", "Very much"] },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextClick = () => {
    const selectedOption = document.querySelector(
      `input[name="question${currentQuestion}"]:checked`
    );

    if (selectedOption) {
      if (selectedOption.value === "Very much") {
        setYesCount(yesCount + 1);
      }
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    } else {
      alert("Please select an answer.");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setYesCount(0);
    setShowResults(false);
  };

  const calculateAnxietyLevel = () => {
    if (yesCount < 5) return "Low";
    if (yesCount < 10) return "Medium";
    return "High";
  };

  return (
    <div className="quiz-container">
      <header>
        <h1>Quiz</h1>
      </header>
      <main>
        <div id="quiz-display">
          {!showResults ? (
            <>
              <h3>Question {currentQuestion + 1}: {quizQuestions[currentQuestion].question}</h3>
              <ul>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`option${index}`}
                      name={`question${currentQuestion}`}
                      value={option}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                  </li>
                ))}
              </ul>
              <button id="next-btn" onClick={handleNextClick}>
                Next
              </button>
            </>
          ) : (
            <div className="results">
              <h2>Your Anxiety Level: {calculateAnxietyLevel()}</h2>
              <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;

