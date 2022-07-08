var tn = document.querySelector("body");
tn.addEventListener("keypress", function(event){
    textbox=document.getElementById("typed_number").value
    if(event.keyCode == 13){
        submit()
    }
});