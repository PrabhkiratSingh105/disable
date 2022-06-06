// ep
var ep = localStorage.getItem("ep")

var high_score = localStorage.getItem("high_score")
var score = document.getElementById("score")
var score_local = localStorage.getItem("score")
if(score_local == "NaN" || score_local == null){
    score_local = "0"
    localStorage.setItem("score", "0")
}
score.innerHTML = "Score: " + score_local
var show_high_score = document.getElementById("high_score")
if(high_score == null){
    high_score = "0"
}
show_high_score.innerHTML = "High score: " + high_score
function gn(){
    var first_number = Math.random()
    var first_number = first_number * 100
    var first_number = parseInt(first_number)
    if(first_number == 0 || first_number == 1){
        var first_number = Math.random()
        var first_number = first_number * 100
        var first_number = parseInt(first_number)
    }
    var second_number = Math.random()
    var second_number = second_number * 100
    var second_number = parseInt(second_number)
    if(second_number == 0 || second_number == 1){
        var second_number = Math.random()
        var second_number = second_number * 100
        var second_number = parseInt(second_number)
    }
    var correct_answer = first_number * second_number
    sessionStorage.setItem("correct_answer", correct_answer)
    var first_number = first_number.toString()
    var second_number = second_number.toString()
    var show_number = first_number + " * " + second_number
    sessionStorage.setItem("show_number", show_number)
    var show = document.getElementById("show")
    show.innerHTML = show_number
}
gn()
var show_number = sessionStorage.getItem("show_number")
var show = document.getElementById("show")
show.innerHTML = show_number

function submit(){
    var typed_number = document.getElementById("typed_number").value
    var typed_number = parseInt(typed_number)
    var correct_answer = sessionStorage.getItem("correct_answer")
    if(typed_number == correct_answer){
        var score = localStorage.getItem("score")
        var score = parseInt(score)
        score++
        localStorage.setItem("score", score)
        ep = localStorage.getItem("ep")
        var ep = parseInt(ep)
        ep++
        ep++
        ep++
        localStorage.setItem("ep", ep)
        score = score.toString()
        score_div_set = document.getElementById("score")
        score_div_set.innerHTML = "Score: " + score
        var high_score = localStorage.getItem("high_score")
        if(high_score == null){
            localStorage.setItem("high_score", 0)
            high_score_set = document.getElementById("high_score")
            high_score_set.innerHTML = "High score: " + high_score
        }
        var high_score = localStorage.getItem("high_score")
        var high_score = parseInt(high_score)
        if(score > high_score){
            high_score = score
            localStorage.setItem("high_score", score)
            high_score = high_score.toString()
            high_score_set = document.getElementById("high_score")
            high_score_set.innerHTML = "High score: " + high_score
        }
        var correct_wrong = document.getElementById("correct_wrong")
        correct_wrong.innerHTML = "Correct👍👍"
        gn()
    }
    else{
        var correct_wrong = document.getElementById("correct_wrong")
        score = 0
        localStorage.setItem("score", score)
        correct_wrong.innerHTML = "Wrong😔😔"
        score_div_set = document.getElementById("score")
        score_div_set.innerHTML = "Score: " + score
        var ep = localStorage.getItem("ep")
        var ep = parseInt(ep)
        var ep = ep - 1
        localStorage.setItem("ep", ep)
        gn()
    }
}