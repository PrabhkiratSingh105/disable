alert("Get ready!");
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
// var cn =  prompt('How many questions you want to attempt? \nMax 30 questions')
// cn = parseInt(cn)
// localStorage.setItem("quantity", cn++);
if(localStorage.getItem("range")==null){
    // var range = prompt("Enter range\nEg:- 10,15")
    // range=range.split(",")
    localStorage.setItem("range", range);
    localStorage.setItem("range_1", range[0]);
    localStorage.setItem("range_2", range[1]);
}
remove()
localStorage.setItem("pt", "0");
localStorage.setItem("timer", "true");
localStorage.setItem("timer_reset", "false"); 
time()
function gn(){
    var random_1=random(Int(localStorage.getItem("range_1")),Int(localStorage.getItem("range_2")));
    var random_2=random(Int(localStorage.getItem("range_1")),Int(localStorage.getItem("range_2")));
    first_number=random_1
    second_number=random_2
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
    localStorage.setItem("timer_reset", "true");
    var typed_number = document.getElementById("typed_number").value
    var typed_number = parseInt(typed_number)
    var correct_answer = localStorage.getItem("correct_answer")
    correct_answer = parseInt(correct_answer)
    if(typed_number == correct_answer){
        var timer_get = localStorage.getItem("timer");
        function funnn(number, code, wrong_correct) {
            if(localStorage.getItem("pt") == number){
                localStorage.setItem(code, [wrong_correct, document.getElementById("typed_number").value, document.getElementById("typed_number").value, localStorage.getItem("show_number"), timer_get]);
            }
        }
        local()
        funnn("1", "one", "Correct");
        funnn("2", "two", "Correct");
        funnn("3", "three", "Correct");
        funnn("4", "four", "Correct");
        funnn("5", "five", "Correct");
        funnn("6", "six", "Correct");
        funnn("7", "seven", "Correct");
        funnn("8", "eight", "Correct");
        funnn("9", "nine", "Correct");
        funnn("10", "ten", "Correct");
        funnn("11", "eleven", "Correct");
        funnn("12", "one_two", "Correct");
        funnn("13", "one_three", "Correct");
        funnn("14", "one_four", "Correct");
        funnn("15", "one_five", "Correct");
        funnn("16", "one_six", "Correct");
        funnn("17", "one_seven", "Correct");
        funnn("18", "one_eight", "Correct");
        funnn("19", "one_nine", "Correct");
        funnn("20", "two_zero", "Correct");
        funnn("21", "two_one", "Correct");
        funnn("22", "two_two", "Correct");
        funnn("23", "two_three", "Correct");
        funnn("24", "two_four", "Correct");
        funnn("25", "two_five", "Correct");
        funnn("26", "two_six", "Correct");
        funnn("27", "two_seven", "Correct");
        funnn("28", "two_eight", "Correct");
        funnn("29", "two_nine", "Correct");
        funnn("30", "three_zero", "Correct");
        gn()
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
    var quan = localStorage.getItem("quantity");
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


//language
function random(value_one, value_two){
    value_one = parseInt(value_one)
    value_two = parseInt(value_two)
    value_two = value_two++
    var va = Math.random() * value_two;
    while(va < value_one){
        var va = Math.random() * value_two;
    }
    va = parseInt(va)
    return va;
}
function Int(number){
    return parseInt(number)
}
function hour(){
    var date = new Date();
    var hour = date.getHours();
    return hour
}
function min(){
    var date = new Date();
    var min = date.getMinutes();
    return min
}
function sec(){
    var date = new Date();
    var sec = date.getSeconds();
    return sec
}
function date(){
    var date = new Date();
    return date
}

//Keys
var tn = document.querySelector("html");
tn.addEventListener("keyup", function(e){
    console.log(e.keyCode)
    if(e.keyCode==8){
        textbox=document.getElementById("typed_number").value
        textbox=textbox.toString()
        textbox=textbox.slice(0,-1)
        document.getElementById("typed_number").value=textbox
    }
})
tn.addEventListener("keypress", function(event){
    textbox=document.getElementById("typed_number").value
    console.log(event.keyCode)
    if(event.keyCode == 13){
        submit()
    }
    if(event.keyCode == 49){
        document.getElementById("typed_number").value+=1;
    }
    if(event.keyCode == 50){
        document.getElementById("typed_number").value+=2;
    }
    if(event.keyCode == 51){
        document.getElementById("typed_number").value+=3;
    }
    if(event.keyCode == 52){
        document.getElementById("typed_number").value+=4;
    }
    if(event.keyCode == 53){
        document.getElementById("typed_number").value+=5;
    }
    if(event.keyCode == 54){
        document.getElementById("typed_number").value+=6;
    }
    if(event.keyCode == 55){
        document.getElementById("typed_number").value+=7;
    }
    if(event.keyCode == 56){
        document.getElementById("typed_number").value+=8;
    }
    if(event.keyCode == 57){
        document.getElementById("typed_number").value+=9;
    }
    if(event.keyCode == 48){
        document.getElementById("typed_number").value+=0;
    }
});
function time() {
    setTimeout(timer(), 6000);
}
//Timer
function timer() {
    if(localStorage.getItem("timer") == "true"){
        var timer = 0;
        setInterval(
            function() {
                if(localStorage.getItem("timer_reset") == "true"){
                    timer = 0;
                }
                localStorage.setItem("timer_reset", "false");
                timer++;
                setInterval(function(){
                    msec=localStorage.getItem("msec")
                    if(msec==null || msec=="null"){
                        localStorage.setItem("msec","0")
                        msec="0"
                    }
                    else{
                        msec=parseInt(msec)
                        msec++
                        msec=msec.toString()
                        msec=msec.split("")
                        msec=msec[0]
                        localStorage.setItem("msec",msec)
                        // msec=msec.toString()
                        msec="."+msec+"s"
                        localStorage.setItem("msec_use",msec)
                        document.getElementById("timer").innerText = timer + localStorage.getItem("msec_use");
                        timer=timer.toString();
                        localStorage.setItem("timer", timer+localStorage.getItem("msec_use"));
                    }
                },100)
            }, 1000
        )
    }
}
