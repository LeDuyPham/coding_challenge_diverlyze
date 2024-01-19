const express = require('express');
const app = express();
const surveys = require('./challenge.answers.json')
const calc = require('./score_calc')
const port = 5000;


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})


app.get('/', (req,res)=>{
    res.send('Hello Test')
})

app.get('/survey',(req,res)=>{
    const femaleSurvey = calc.genderFilter(surveys,'male')
    const ratingSurvey = calc.avgRating(femaleSurvey)
    console.log(ratingSurvey)
    res.json(femaleSurvey)
})

app.get('/all',(req,res)=>{
    const [fScore, mScore, dScore] = calc.scoreGender(surveys)
    console.log(fScore)
    res.json({femaleScore: fScore, maleScore: mScore, diverseScore: dScore})
})



// GET /scores 
app.get('/scores',(req,res)=>{
    //code zu schreiben
    res.json({femaleScore: 'filler1', maleScore: 'filler2', diverseScore: 'filler3'})
}) 
