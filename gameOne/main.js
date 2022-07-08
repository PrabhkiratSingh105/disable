var name=localStorage.getItem("name")
if(name==null||name=="null"){
    document.getElementById("name").value=""
}
else{
    document.getElementById("name").value=name
}
var range_1=localStorage.getItem("range_1")
var range_2=localStorage.getItem("range_2")
if(range_1==null||range_1=="null"){
    document.getElementById("range_one").value=""
}
else{
    document.getElementById("range_one").value=range_1
}
if(range_2==null||range_2=="null"){
    document.getElementById("range_two").value=""
}
else{
    document.getElementById("range_two").value=range_2
}
var quan=localStorage.getItem("quantity")
if(quan==null||quan=="null"){
    document.getElementById("questions").value="";
}
else{
    document.getElementById("questions").value=""+quan;
}
setInterval(function(){ra()},1000);
function ra(){
    document.getElementById("ra_1").innerText=document.getElementById("range_one").value
    document.getElementById("ra_2").innerText=document.getElementById("range_two").value
}
document.getElementById("button").onclick=function(){
    run()
}
function run(){
    localStorage.setItem("name",document.getElementById("name").value)
    localStorage.setItem("range_1",document.getElementById("range_one").value)
    localStorage.setItem("range_2",document.getElementById("range_two").value)
    localStorage.setItem("quantity",document.getElementById("questions").value)
    if(document.getElementById("range_one").value==""||document.getElementById("range_two").value==""||document.getElementById("questions").value==""||document.getElementById("name").value=="") return  alert("Form in not fully filled");
    open("index.html")
    window.close()
}
var tn = document.querySelector("html");
tn.addEventListener("keypress", function(event){
    if(event.keyCode == 13){
        run()
    }
});