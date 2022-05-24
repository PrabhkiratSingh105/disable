function log(){
	localStorage.clear();
	window.open("https://codingbyprabhkirat.tech/","_self");
}
function block(){
	let promt = prompt("are u really want to block this site from this device, once you blocked you cant ever unblock, write 'y' if you want to really block 'n' if u not want to block");
	if(promt == 'y'){
		alert("You are blocked");
	  localStorage.setItem("Blocked","true");
	}
}