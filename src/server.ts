import express, {Request, Response} from 'express'
import dotenv from 'dotenv'

import getTodos from './controler/index'
dotenv.config()

const port = process.env.NODE_PORT || 3000;
const app = express();
app.use(express.json());

app.get('/',(req:Request, res: Response) => {
    res.send("hi")
})


app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
  });