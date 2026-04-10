import React from "react";
import { useAI } from "../hook/useAI";

const JudgePanel = ({best_solution}) => {

  const {loading,error}=useAI()

  if (error) {
    return <h1 style={{ color: "red" }}>{error}</h1>;
  }
  return (
    <div className="judge">
      <div className="judge-header">⚖️ AI Judge Verdict</div>
      {loading?(<h3>Loading...</h3>):(<><p>
        {best_solution}
      </p></>)}
    </div>
    
  );
};

export default JudgePanel;