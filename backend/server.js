import express from "express";
import path from 'path';

import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')));
const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 5001;

mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoBD database"))
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((err) => console.log(err.message));


