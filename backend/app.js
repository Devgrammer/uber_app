const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.route')
const captainRoutes =  require('./routes/captain.route')


connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send("Welcome to Uber Backend")
    res.end();
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);



module.exports = app;
