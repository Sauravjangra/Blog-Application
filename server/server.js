import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';



dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', Router);



// app.get('/', (req, res) => {
//     res.send('Hello from Express server!');
//   });


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT: http://localhost:${PORT}`));

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI ||  `mongodb+srv://${USERNAME}:${PASSWORD}@clusterblog.7o5g9l4.mongodb.net/?retryWrites=true&w=majority&appName=clusterblog`;


Connection(URL);