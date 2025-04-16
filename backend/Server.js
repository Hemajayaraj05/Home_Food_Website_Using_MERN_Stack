const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const authroutes = require('./routes/authroutes');
const connectDatabase = require('./config/ConnectDatabase');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();


connectDatabase();


app.use(express.json());
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use('/api/auth', authroutes);
app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
