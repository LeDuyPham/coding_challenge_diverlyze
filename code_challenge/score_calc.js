
// Filtert die Surveys nach dem gesuchtem Geschlecht
const genderFilter = (surveys, genderType) => {
    const filteredSurvey = surveys.filter(
        (survey)=> survey.gender === genderType
    );
    return filteredSurvey;
};


/* Berechnet den Durchschnitt der Bewertungen vom Survey
    - Falls Anzahl der Surveys unter 3 ist => return 0
    - Nur richtige Bewertungen (1-10) betrachten (" " wird ignoriert)
    - Mit einer Dezimalstelle zurueckgeben*/
const avgRating = (surveys) =>{
    let sum = count = 0;
    surveys.forEach((survey) => {
        if(survey.rating !== ""){
            sum += survey.rating;
            count += 1;
        }
    });
    if(count < 3){ return null }
    return Number((sum/count).toFixed(1));
};

/* Berechnet den Durchschnitt der Bewertungen für 'female','male','diverse'
    - Falls einer der 'Scores' eine 0 ist => alle Scores auf 0 setzten */
const scoreGender = (surveys) => {
    const femaleScore = avgRating(genderFilter(surveys,"female"));
    const maleScore = avgRating(genderFilter(surveys,"male"));
    const diverseScore = avgRating(genderFilter(surveys,"diverse"));

    if(femaleScore === null || maleScore === null || diverseScore === null){
        return [null,null,null];
    }
    return [femaleScore,maleScore,diverseScore];
}


//Exportieren
module.exports = {genderFilter,avgRating,scoreGender};