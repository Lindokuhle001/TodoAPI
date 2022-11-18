import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import todoRouter from './routes/index'
dotenv.config()

const port = process.env.NODE_PORT || 3000;
const app = express();
app.use(express.json());
app.use("", todoRouter)

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});