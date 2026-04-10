import express from 'express'
import useGraph from './services/grap.ai.service.js'
import cors from 'cors'
const app=express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

app.post("/api/use-graph",async (req, res) => {
    const {question}=req.body;
    // console.log(req.body)
    // const result={
    // "problem": "hello",
    // "solution_1": "Hello! 😊 How can I help you today? Whether you have a question, need advice, or just want to chat, I'm here for you! Let me know what's on your mind. 🚀\n\n(Or if you're testing me—*beep boop*—I’m fully operational! 🤖)",
    // "solution_2": "Hello! How can I assist you today?",
    // "judge": {
    //     "solution_1_score": 10,
    //     "solution_2_score": 9,
    //     "solution_1_reasoning": "This solution is warm, friendly, and engaging. It provides a comprehensive greeting and clearly explains how it can help the user, making it very approachable.",
    //     "solution_2_reasoning": "This solution is professional, polite, and direct. While it is perfectly correct and functional, it is slightly more generic and less conversational than the first option."
    // }
    // }
    const result=await useGraph(question)
    res.status(200).json(result);
})

export default app