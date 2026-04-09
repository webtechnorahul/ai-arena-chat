import React, { useState } from "react";
import Header from "./Header";
import SolutionCard from "./SolutionCard";
import JudgePanel from "./JudgePanel";
import ChatInput from "./ChatInput";
import JudgeStats from "./JudgeStats";
import "../style/styles.css";
import { useAI } from "../hook/useAI";


const ChatAI = () => {
  const [hummanMessage, sethummanMessage] = useState('what are you think today')
  const {aiSendProblem,solution_1,solution_1_score,solution_2,solution_2_score,judgesolution_reason}=useAI()
  
  const problem=async (question)=>{
    const result=await aiSendProblem(question);
  }

  return (
    <div className="app">
      <Header />

      <h1 className="heading">
        {hummanMessage}
      </h1>

      <div className="main">
        <div className="left">
          <SolutionCard title="Solution A" score={solution_1_score} solution={solution_1} winner />
          <SolutionCard title="Solution B" score={solution_2_score} solution={solution_2} />
        </div>
        
        <div className="rightJudge">
            <JudgeStats score_solution_1={solution_1_score} score_solution_2={solution_2_score}/>
            <JudgePanel best_solution={judgesolution_reason}/>
        </div>
      </div>

      <ChatInput aifunction={problem} setmessage={sethummanMessage}/>
    </div>
  );
};

export default ChatAI;