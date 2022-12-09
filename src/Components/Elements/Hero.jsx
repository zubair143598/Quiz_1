import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Hero = () => {

  useEffect(()=>{
    const arr1 = [1,2]
    const aa2 = [...arr1]
    arr1.push(3)
    console.log(aa2);
  })
  var quiz = [  
    {
      question: "Css stand for?",
      option: [
        { Answer: "Cascading Style Sheet", isCorrect: true },
        { Answer: "Color and style sheets", isCorrect: false },
        { Answer: "Cascading style sheets", isCorrect: false },
        { Answer: "None of the above", isCorrect: false },
      ]},
      {question: "Sum of 12 and 3?",
      option: [
        { Answer: "10", isCorrect: false },
        { Answer: "18", isCorrect: false },
        { Answer: "15", isCorrect: true },
        { Answer: "13", isCorrect: false },
      ]},
      {question: "How many calories are there in egg?",
      option: [
        { Answer: "120Calories", isCorrect: false },
        { Answer: "155Calories", isCorrect: true },
        { Answer: "177Calories", isCorrect: false },
        { Answer: "165Calories", isCorrect: false },
      ]},
      {question: "Who is the Prime Minester of pakistan? ",
      option: [
        { Answer: "QamerBajwa", isCorrect: false },
        { Answer: "AsimMunir", isCorrect: false },
        { Answer: "ShahbazShareef", isCorrect: true },
        { Answer: "Muzammil", isCorrect: false },
      ]},
      {question: "_____ is called the city of flower",
      option: [
        { Answer: "Peshawar", isCorrect: true },
        { Answer: "Bannu", isCorrect: false },
        { Answer: "Mardan", isCorrect: false },
        { Answer: "Lahore", isCorrect: false },
      ]},
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAction = (isCorrect) => {
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion = currentQuestion+1;
   if(nextQuestion<quiz.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
  }
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-9 quiz text-center rounded-5 mt-5  text-white bg-black">
            <h1>Quiz</h1>
            <div>
              {showScore ? (
                <div>
                  
                  You have scored {score} out of {quiz.length}
                  
                </div>
              ) 
              : 
              (
                <>
                 <div className='question-section'>
                            <div className='question-count'>
                               <h5 className="mt-4">question no: {currentQuestion+1}/{quiz.length}</h5>
                            </div>

                            <div className='question-text'>
                             <h4 className="mt-4">

                             {quiz[currentQuestion].question}
                             </h4>
                            </div>
                        </div>

                        <div className='answer-section'>
                          {quiz[currentQuestion].option.map((answer)=>
                          (
                              <button className="btn btn-danger px-4 ms-3 my-5" onClick={()=>handleAction(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
