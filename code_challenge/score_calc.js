const genderFilter = (surveys, genderType) => {
    const filteredSurvey = surveys.filter(
        (survey)=> survey.gender === genderType
    )
    //console.log(filteredSurvey.length)
    return filteredSurvey
}

const avgRating = (surveys) =>{
    let sum = count = 0
    surveys.forEach((survey) => {
        if(survey.rating !== ""){
            sum += survey.rating
            count += 1
        }
    });
    console.log(`anzahl der gültigen ratings: ${count}`)
    console.log(`gesamtsumme der ratings:  ${sum}`)
    return (sum/count).toFixed(1)
}

const scoreGender = (surveys) => {
    const femaleScore = avgRating(genderFilter(surveys,"female"))
    const maleScore = avgRating(genderFilter(surveys,"male"))
    const diverseScore = avgRating(genderFilter(surveys,"diverse"))
    console.log(surveys)
    console.log(femaleScore)

    return [femaleScore,maleScore,diverseScore]
}


//export default
module.exports = {genderFilter, avgRating, scoreGender}