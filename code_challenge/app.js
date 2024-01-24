const express = require('express');
const app = express();
const surveys = require('./challenge.answers.json');
const {scoreGender} = require('./score_calc');


// GET /scores 
app.get('/scores',(req,res)=>{
    const answer = scoreGender(surveys);
    res.json(answer);
});


module.exports = app;