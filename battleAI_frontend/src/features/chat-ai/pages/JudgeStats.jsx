import React from "react";
import { useAI } from "../hook/useAI";

const JudgeStats = ({score_solution_1,score_solution_2}) => {
  const {loading,error}=useAI()
  if (error) {
  return <h1 style={{ color: "red" }}>{error}</h1>;
}
  return (
    <div className="judge-stats">

      {/* TOP */}
      <div className="judge-top">
        <div className="judge-avatar"></div>
        <span>4L VAL Cases:</span>
      </div>
      <div className="score-board">
        <div className="score-board-a">
            {loading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <p>{score_solution_1}</p>
              <span>solution A</span>
            </>
          )}
        </div>
        <div className="score-board-b">
            {loading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <p>{score_solution_2}</p>
              <span>solution B</span>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default JudgeStats;