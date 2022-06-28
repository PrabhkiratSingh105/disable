function remove(){
    localStorage.removeItem("one");
    localStorage.removeItem("two");
    localStorage.removeItem("three");
    localStorage.removeItem("four");
    localStorage.removeItem("five");
    localStorage.removeItem("six");
    localStorage.removeItem("seven");
    localStorage.removeItem("eight");
    localStorage.removeItem("nine");
    localStorage.removeItem("ten");
    localStorage.removeItem("eleven");
    localStorage.removeItem("one_two");
    localStorage.removeItem("one_three");
    localStorage.removeItem("one_four");
    localStorage.removeItem("one_five");
    localStorage.removeItem("one_six");
    localStorage.removeItem("one_seven");
    localStorage.removeItem("one_eight");
    localStorage.removeItem("one_nine");
    localStorage.removeItem("two_zero");
    localStorage.removeItem("two_one");
    localStorage.removeItem("two_two");
    localStorage.removeItem("two_three");
    localStorage.removeItem("two_four");
    localStorage.removeItem("two_five");
    localStorage.removeItem("two_six");
    localStorage.removeItem("two_seven");
    localStorage.removeItem("two_eight");
    localStorage.removeItem("two_nine");
    localStorage.removeItem("three_zero");
}
if(localStorage.getItem("name") == null){
    var qn = prompt("Enter your name: ");
    localStorage.setItem("name", qn);
}
var cn =  prompt('How many questions you want to attempt? \nMax 30 questions')
cn = parseInt(cn)
sessionStorage.setItem("quantity", cn++);
// ep
remove()
localStorage.setItem("score", "0");
document.getElementById("score").innerText = "Score: 0";
localStorage.setItem("pt", "0");
var ep = localStorage.getItem("ep");
sessionStorage.setItem("timer", "true");
sessionStorage.setItem("timer_reset", "false"); 

var tn = document.getElementById("typed_number");
tn.addEventListener("keypress", function(event){
    console.log(event.keyCode)
    if(event.keyCode == 13){
        console.log("yo")
        submit()
    }
});
function timer() {
    if(sessionStorage.getItem("timer") == "true"){
        var timer = 0;
        setTimeout(
            setInterval(
                function() {
                    if(sessionStorage.getItem("timer_reset") == "true"){
                        timer = 0;
                    }
                    sessionStorage.setItem("timer_reset", "false");
                    timer++;
                    document.getElementById("timer").innerText = timer + "s";
                    localStorage.setItem("timer", timer);
                }, 1000
            ), 5000
        )
    }
}
timer()
var high_score = localStorage.getItem("high_score")
var score = document.getElementById("score")
var score_local = localStorage.getItem("score")
if(score_local == "NaN"){
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
    var first_number = first_number * 21
    var first_number = parseInt(first_number)
    if(first_number == 0 || first_number == 1){
        var first_number = Math.random()
        var first_number = first_number * 21
        var first_number = parseInt(first_number)
    }
    var second_number = Math.random()
    var second_number = second_number * 21
    var second_number = parseInt(second_number)
    if(second_number == 0 || second_number == 1){
        var second_number = Math.random()
        var second_number = second_number * 21
        var second_number = parseInt(second_number)
    }
    var correct_answer = first_number * second_number
    localStorage.setItem("correct_answer", correct_answer)
    var first_number = first_number.toString()
    var second_number = second_number.toString()
    var show_number = first_number + " * " + second_number
    localStorage.setItem("show_number", show_number)
    var show = document.getElementById("show")
    show.innerHTML = show_number
}

gn()
var show_number = localStorage.getItem("show_number")
var show = document.getElementById("show")
show.innerHTML = show_number

function submit(){
    sessionStorage.setItem("timer_reset", "true");
    var typed_number = document.getElementById("typed_number").value
    var typed_number = parseInt(typed_number)
    var correct_answer = localStorage.getItem("correct_answer")
    correct_answer = parseInt(correct_answer)
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
        var timer_get = localStorage.getItem("timer");
        function funn(number, code, wrong_correct) {
            if(localStorage.getItem("pt") == number){
                localStorage.setItem(code, [wrong_correct, document.getElementById("typed_number").value, localStorage.getItem("correct_answer"), localStorage.getItem("show_number"), timer_get]);
            }
        }
        local()
        funn("1", "one", "Correct");
        funn("2", "two", "Correct");
        funn("3", "three", "Correct");
        funn("4", "four", "Correct");
        funn("5", "five", "Correct");
        funn("6", "six", "Correct");
        funn("7", "seven", "Correct");
        funn("8", "eight", "Correct");
        funn("9", "nine", "Correct");
        funn("10", "ten", "Correct");
        funn("11", "eleven", "Correct");
        funn("12", "one_two", "Correct");
        funn("13", "one_three", "Correct");
        funn("14", "one_four", "Correct");
        funn("15", "one_five", "Correct");
        funn("16", "one_six", "Correct");
        funn("17", "one_seven", "Correct");
        funn("18", "one_eight", "Correct");
        funn("19", "one_nine", "Correct");
        funn("20", "two_zero", "Correct");
        funn("21", "two_one", "Correct");
        funn("22", "two_two", "Correct");
        funn("23", "two_three", "Correct");
        funn("24", "two_four", "Correct");
        funn("25", "two_five", "Correct");
        funn("26", "two_six", "Correct");
        funn("27", "two_seven", "Correct");
        funn("28", "two_eight", "Correct");
        funn("29", "two_nine", "Correct");
        funn("30", "three_zero", "Correct");
        document.getElementById("typed_number").value = "";
    }
    else{
        var timer_get = localStorage.getItem("timer");
        function funn(number, code, wrong_correct) {
            if(localStorage.getItem("pt") == number){
                localStorage.setItem(code, [wrong_correct, document.getElementById("typed_number").value, localStorage.getItem("correct_answer"), localStorage.getItem("show_number"), timer_get]);
            }
        }
        local()
        funn("1", "one", "Wrong");
        funn("2", "two", "Wrong");
        funn("3", "three", "Wrong");
        funn("4", "four", "Wrong");
        funn("5", "five", "Wrong");
        funn("6", "six", "Wrong");
        funn("7", "seven", "Wrong");
        funn("8", "eight", "Wrong");
        funn("9", "nine", "Wrong");
        funn("10", "ten", "Wrong");
        funn("11", "eleven", "Wrong");
        funn("12", "one_two", "Wrong");
        funn("13", "one_three", "Wrong");
        funn("14", "one_four", "Wrong");
        funn("15", "one_five", "Wrong");
        funn("16", "one_six", "Wrong");
        funn("17", "one_seven", "Wrong");
        funn("18", "one_eight", "Wrong");
        funn("19", "one_nine", "Wrong");
        funn("20", "two_zero", "Wrong");
        funn("21", "two_one", "Wrong");
        funn("22", "two_two", "Wrong");
        funn("23", "two_three", "Wrong");
        funn("24", "two_four", "Wrong");
        funn("25", "two_five", "Wrong");
        funn("26", "two_six", "Wrong");
        funn("27", "two_seven", "Wrong");
        funn("28", "two_eight", "Wrong");
        funn("29", "two_nine", "Wrong");
        funn("30", "three_zero", "Wrong");
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
        document.getElementById("typed_number").value = "";
    }
}
function local(){
    var quan = sessionStorage.getItem("quantity");
    quan = parseInt(quan)
    var pt = localStorage.getItem("pt");
    pt = parseInt(pt);
    console.log(pt)
    console.log(typeof(pt))
    pt = pt+1
    console.log(pt)
    localStorage.setItem("pt", pt);
    if(pt == quan){
        open("scored.html");
        setTimeout(window.close(), 15000)
    }
}