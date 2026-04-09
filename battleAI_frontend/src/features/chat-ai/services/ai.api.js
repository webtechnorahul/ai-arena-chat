import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:3000/api',
    withCredentials:true
})
export async function chatAiResponse(question){
const result=await api.post('/use-graph',{question})
return result.data;
}