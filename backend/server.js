const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log("sending from backend")
})
app.listen(8000, (req, res) => {
    console.log("listening on port" + 8000)
})