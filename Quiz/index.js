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
var answer = document.querySelectorAll('answer')
var question =document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn =document.getElementById('submit')