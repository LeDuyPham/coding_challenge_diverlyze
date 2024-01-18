const express = require('express');
const app = express();
const survey = require('./challenge.answers.json')

const port = 5000;


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})


app.get('/', (req,res)=>{
    res.send('Hello Test')
})

app.get('/survey',(req,res)=>{
    res.json(survey)
})



// GET /scores 
app.get('/scores',(req,res)=>{
    //code zu schreiben
    res.json({femaleScore: 'filler1', maleScore: 'filler2', diverseScore: 'filler3'})
}) 
