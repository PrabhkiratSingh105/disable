function submit(){
	let un = document.getElementById("un").value;
	let pass = document.getElementById("pass").value;
	let cpass = document.getElementById("cpass").value;
	let passl = pass.length;
	let unl = un.length;
	let ls = localStorage.getItem("password");
	if (pass == cpass) {
		if (passl < 4) {
			alert("Password needs to be atlest of 4 letters");
		}
		else if (un.length < 1) {
			alert("Enter username");
		}
		else {
			if (localStorage.getItem("username") == null) {
				localStorage.setItem("password", pass);
				localStorage.setItem("username", un);
				alert("Your account has been created");
				window.open("files.html","_self");
			}
			else {
				alert("You already have account");
			}
		}
	}
	else {
		alert("Password not matched");
	}
}
function login() {
	let un = document.getElementById("cusername").value;
	let lc = localStorage.getItem("username");
	let opass = document.getElementById("opass").value;
	let oopass = localStorage.getItem("password");
	if (un == lc) {
		if (opass == oopass) {
			alert("successfully logedin");
			window.open("files.html","_self");
		}
		else {
			alert("Incorrect password");
		}
	}
	else {
		alert("Your username is not correct")
	}
}
function akey() {
	var key = prompt("Enter developer key");
	if (key == "9090") {
		open("dk.html");
	}
	else {
		alert("Wrong key");
	}
}
function reset() {
	localStorage.clear();
}
function cp() {
	let ur = document.getElementById("cpun").value;
	let cp = document.getElementById("cpcp").value;
	let np = document.getElementById("cpnp").value;
	let rp = document.getElementById("cprp").value;
	let cur = localStorage.getItem("username");
	let ccp = localStorage.getItem("password");
	if (ur == cur) {
		if (cp == ccp) {
			if (np == rp) {
				if (np.length > 3) {
					localStorage.setItem("password", np);
					alert("Your password has been changed");
				}
				else {
					alert("Your password needs to be atlest of 4 letters");
				}
			}
			else {
				alert("repeat password is incoorect");
			}
		}
		else {
			alert("Incorrect password");
		}
	}
	else {
		alert("incorrect username");
	}
}
function rp() {
	let username = prompt("Enter your username");
	let cu = localStorage.getItem("username");
	if (username == cu) {
		let npass = prompt("Enter new password here");
		if (npass.length > 3) {
			localStorage.setItem("password", npass);
			alert("Your password has changed");
		}
		else {
			alert("Your password needs to be of atlest 4 letters");
		}
	}
}
function cu() {
	let ousername = prompt("Enter your current username");
	let cusername = localStorage.getItem("username");
	if (ousername == cusername) {
		let pass = prompt("Enter your password here");
		let cpass = localStorage.getItem("password");
		if (pass == cpass) {
			let nu = prompt("Enter new username here");
			localStorage.setItem("username", nu);
			alert("Your username changed");
		}
		else {
			alert("Incorrect password");
		}
	}
	else {
		alert("incorrect username");
	}
}
function ra() {
	let user = prompt("Enter username");
	let cuser = localStorage.getItem("username");
	if (user == cuser) {
		let password = prompt("Enter password");
		let cpass = localStorage.getItem("password");
		if (password == cpass) {
			localStorage.clear();
			alert("Your account has been deleted");
		}
		else {
			alert("Incorrect password");
		}
	}
	else {
		alert("incorrect username")
	}
}
lc = localStorage.getItem("sl");
if(lc == "true"){
	window.open("files.html","_self");
}
let ls = localStorage.getItem("Blocked");
if(ls == "true"){
	window.open('pages/blocked.html','_self');
}