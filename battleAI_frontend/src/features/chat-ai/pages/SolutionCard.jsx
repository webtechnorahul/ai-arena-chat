import React from "react";
import { useAI } from "../hook/useAI";

const SolutionCard = ({ title, score, winner,solution }) => {
  const {loading,error}=useAI()
  if (error) {
    return <h1 style={{ color: "red" }}>{error}</h1>;
  }
  return (
    <div className={`card ${winner ? "winner" : ""}`}>
      <div className="card-top">
        <span>{title}</span>
        {loading ? (<h3>Loading...</h3>) : (<><b>Score: {score}</b></>)}
        
      </div>
      {loading ? (<h3>Loading...</h3>) : (<><div className="code">
        {solution}
      </div></>)}
    
    </div>
  );
};

export default SolutionCard;