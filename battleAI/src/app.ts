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
    const result=await useGraph(question)
    res.status(200).json(result);
})

export default app