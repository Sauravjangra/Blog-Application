import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';
// import path from 'path';

// const __dirname = path.resolve();

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', Router);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get('/', function (_, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"), function(error) {
//         if (error) {
//             res.status(500).send(error);
//         }
//     });
// });

app.get('/', (req, res) => {
    res.send('Hello from Express server!');
  });


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT: http://localhost:${PORT}`));

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI ||  `mongodb+srv://${USERNAME}:${PASSWORD}@clusterblog.7o5g9l4.mongodb.net/?retryWrites=true&w=majority&appName=clusterblog`;


Connection(URL);