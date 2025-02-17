import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const corsOptions = {
    origin: '0.0.0.0/0',
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/signup", (req, res)=>{
    const data = req.body;
    console.log(data);
    res.json({message: "Data received"});
})

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});