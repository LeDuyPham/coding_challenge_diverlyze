const express = require('express');
const app = express();
const surveys = require('./challenge.answers.json')
const calc = require('./score_calc')
const port = 5000;


// GET /scores 
app.get('/scores',(req,res)=>{
    const [fScore, mScore, dScore] = calc.scoreGender(surveys)
    res.json({femaleScore: fScore, maleScore: mScore, diverseScore: dScore})
}) 



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})