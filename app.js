const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookingAppRoutes = require('./routes/booking-app')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/",bookingAppRoutes);


app.listen(3000);