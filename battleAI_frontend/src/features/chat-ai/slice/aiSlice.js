import { createSlice } from "@reduxjs/toolkit";


// Async action for API call
const aiSlice=createSlice({
  name:"ai",
  initialState:{
    solution_1:'How i can help you',
    solution_2:'How i can help you',
    judgesolution_reason:'i am best',
    solution_1_score:0,
    solution_2_score:0,
    error:'',
    loading:false
  },
  reducers:{
    setsolution_1:(state,action)=>{
      state.solution_1 = action.payload;
      state.loading = false;
      state.error = "";
    },
    setsolution_2:(state,action)=>{
      state.solution_2 = action.payload;
      state.loading = false;
      state.error = "";
    },
    setsolution_1_score:(state,action)=>{
      state.solution_1_score=action.payload;
      state.loading = false;
      state.error = "";
    },
    setsolution_2_score:(state,action)=>{
      state.solution_2_score=action.payload;
      state.loading = false;
      state.error = "";
    },
    setjudgesolution_reason:(state,action)=>{
      state.judgesolution_reason = action.payload;
      state.loading = false;
      state.error = "";
    },
    seterror:(state,action)=>{
      state.error = action.payload;
      state.loading = false;
    },
    setloading:(state)=>{
      state.loading = true;
      state.error = "";
    }
  }
})

export const { seterror,setloading, setjudgesolution_reason,setsolution_1,setsolution_2,setsolution_1_score,setsolution_2_score} = aiSlice.actions;
export default aiSlice.reducer;
