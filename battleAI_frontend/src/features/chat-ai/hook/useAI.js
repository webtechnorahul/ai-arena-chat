import { useDispatch,useSelector } from "react-redux";
import { setsolution_1,setsolution_2,setjudgesolution_reason,seterror,setloading,setsolution_1_score,setsolution_2_score } from "../slice/aiSlice";
import { chatAiResponse } from "../services/ai.api";

export const useAI=()=>{
  const dispatch=useDispatch()
  // const {aimessage,error,loading}=useSelector((state)=>state.ai);
  const { solution_1,solution_1_score,solution_2,solution_2_score,judgesolution_reason, error, loading, } = useSelector((state) => state.ai);

  async function aiSendProblem(question) {
    try{
      dispatch(setloading(true));
      const response=await chatAiResponse(question);
      
      dispatch(setsolution_1(response.solution_1))
      dispatch(setsolution_2(response.solution_2))
      dispatch(setsolution_1_score(response.judge.solution_1_score))
      dispatch(setsolution_2_score(response.judge.solution_2_score))
      dispatch(setjudgesolution_reason(response.judge.solution_1_reasoning))
      
    }
    catch(err){
      dispatch(seterror(err.response.data?.message))
    }
  }
  return {
    error,loading,aiSendProblem,solution_1,solution_1_score,solution_2,solution_2_score,judgesolution_reason
  }
}