const calc = require('../score_calc');
const answers = require('./test_answers');


/* Unit-Tests: genderFilter
    - Filtert Survey nach "gender", inwelcher n "gender" enthalten sind.
    - Filtert Survey nach "gender", inwelcher nur "gender" enthalten sind.
    - Filtert Survey nach "gender", inwelcher keine "gender" enthalten sind.
*/
test('filter_male: 9_surveys, 3_male', () => {
    const filteredSurvey = calc.genderFilter(answers.s9_f3m3d3,'male');
    expect((filteredSurvey).length).toEqual(3);

    filteredSurvey.forEach(survey => {
        expect(survey.gender).toEqual("male")
    });
});

test('filter_female: 6_surveys, 6_female', () => {
    const filteredSurvey = calc.genderFilter(answers.s6_f6m0d0,'female');
    expect((filteredSurvey).length).toEqual(6);

    filteredSurvey.forEach(survey => {
        expect(survey.gender).toEqual("female")
    });
});

test('filter_diverse: 4_surveys, 0_diverse',() => {
    const filteredSurvey = calc.genderFilter(answers.s4_f2m2d0,'diverse');
    expect((filteredSurvey).length).toEqual(0);
});

test('filter_"": 9_surveys, 0_""',() => {
    const filteredSurvey = calc.genderFilter(answers.s9_f3m3d3,"");
    expect((filteredSurvey).length).toEqual(0);
});

/* Unit-Tests: avgRating
    - Berechnet kleine/große Survveys-rating
    - Scheckt auf Gültigkeit der Surveys (> 2 ratings, valid rating "1-10")
*/
test('3 Surveys score_avg', () =>{
    const avgScore = calc.avgRating(answers.s3_i0_avg5);
    expect(avgScore).toEqual(5);
});

test('9 Surveys score_avg', () =>{
    const avgScore = calc.avgRating(answers.s9_i0_avg6_2);
    expect(avgScore).toEqual(6.2);
});

test('0 Survey score_avg', () =>{
    const avgScore = calc.avgRating(answers.s0_f0m0d0);
    expect(avgScore).toEqual(null);
});

test('2 Surveys score_avg', () =>{
    const avgScore = calc.avgRating(answers.s2_i0_avg4_0);
    expect(avgScore).toEqual(null);
});

test('3 Surveys, 1 invalid score_avg', () =>{
    const avgScore = calc.avgRating(answers.s3_i1_avg0);
    expect(avgScore).toEqual(null);
});

test('4 Surveys, 1 invalid score_avg', () =>{
    const avgScore = calc.avgRating(answers.s4_i1_avg3_3);
    expect(avgScore).toEqual(3.3);
});

test('9 Surveys, 4 invalid score_avg', () =>{
    const avgScore = calc.avgRating(answers.s9_i4_avg5_8);
    expect(avgScore).toEqual(5.8);
});

/* Unit-Tests: scoreGender
    - Berechnet kleine/große Surveyliste
    - Berechnet für ungültige Surveylisten (< 2 Surveys für ein "gender")
*/

//Test schlägt fehl, da Rundung nicht betrachtet wurde => Frage Louis wie die Definition von "eine Nachkommastelle" gemacht werden soll
test('kleine Survey', () =>{
    expect(calc.scoreGender(answers.f3_6m4_3d5_6)).toEqual([3.6,4.3,5.6]);
});
//Test schlägt fehl, da Rundung nicht betrachtet wurde
test('großer Survey', () =>{
    expect(calc.scoreGender(answers.f5_1m5_5d5_1)).toEqual([5.1,5.5,5.1]);
});

test('zu wenig "female" Surveys', () =>{
    expect(calc.scoreGender(answers.f0m6_3d4_3)).toEqual([null,null,null]);
});

test('zu wenig "male" Surveys', () =>{
    expect(calc.scoreGender(answers.f4_3m0d4)).toEqual([null,null,null]);
});

test('zu wenig "diverse" Surveys', () =>{
    expect(calc.scoreGender(answers.f7_6m8_3d0)).toEqual([null,null,null]);
});

test('zu wenig "female" Surveys durch ungueltiges rating', () =>{
    expect(calc.scoreGender(answers.f2m6_3d4_3)).toEqual([null,null,null]);
});