import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json()); // to parse json data
app.use(cors());    // to allow cross-origin requests

// api endpoints
app.get('/', (req, res) => {
    res.status(200).send('API Working');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
