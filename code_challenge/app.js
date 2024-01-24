const express = require('express');
const app = express();
const surveys = require('./challenge.answers.json');
const calc = require('./score_calc');


// GET /scores 
app.get('/scores',(req,res)=>{
    const answer = calc.scoreGender(surveys);
    res.json(answer);
});


module.exports = app;