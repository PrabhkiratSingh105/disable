function timer() {
    if(sessionStorage.getItem("timer") == "true"){
        var timer = 0;
        setInterval(
            function() {
                if(sessionStorage.getItem("timer_reset") == "true"){
                    timer = 0;
                }
                sessionStorage.setItem("timer_reset", "false");
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
