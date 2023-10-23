import express from 'express';
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js"
import booksRoute from './routes/booksRoute.js';

import mongoose from 'mongoose';

const app = express();


// Middleware for Parsing request body
app.use(express.json());

// Middleware for CORS
app.use(cors());

// Middleware for CORS (for custom origins)
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack tutorial');
});

app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    });