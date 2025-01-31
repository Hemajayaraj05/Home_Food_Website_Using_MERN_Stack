const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const authroutes = require('./routes/authroutes');


dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });


const connectDatabase = require('./config/ConnectDatabase');
connectDatabase();


app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use('/api/auth', authroutes);
app.use('/api/auth/dash',authroutes);



app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
