var  quizData =[

    {
        question: "which framwork is related to js",
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct: 'c'
    },
    {
        question: "which is not a Programing language",
        a:'html',
        b:'paython',
        c:'java',
        d:'js',
        correct: 'a'
    },
    {
        question: "which  is not  a framwork ",
        a:'angular',
        b:'java script',
        c:'react',
        d:'django',
        correct: 'b'


    },
    {
        question: "css stand for",
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading  sheet of style ',
        d:'none of the above',
        correct: 'b'
    }

]

var quiz =document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question =document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn =document.getElementById('submit')

var currQuestion = 0;
var quizScore = 0;

loadQuiz()

function loadQuiz(){
    deselect()

    question.innerHTML = quizData[currQuestion].question
    option_a.innerText =quizData[currQuestion].a
    option_b.innerText =quizData[currQuestion].b
    option_c.innerText =quizData[currQuestion].c
    option_d.innerText =quizData[currQuestion].d
}

function deselect(){
    answer.forEach(answer=>answer.checked =false)
}

submitbtn.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption =answer.id
        }
    })

    if(selectedoption==quizData[currQuestion].correct){
        quizScore=quizScore+1;

    }
    currQuestion =currQuestion+1
   if(currQuestion ==quizData.length){

        document.getElementById('quizdiv').innerHTML=`<h1> you have answerd ${quizScore} correctly out of ${quizData.length}</h1>`    
   }else{
    loadQuiz()
   }
})