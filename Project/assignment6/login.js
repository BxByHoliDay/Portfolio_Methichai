window.onload = loginLoad;

function loginLoad(){
	document.getElementById("myLogin").onsubmit = checkLogin;
}

function checkLogin(){
	var form = document.forms["myLogin"];

    var userName = form["username"].value;
    var password = form["password"].value;

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
    
	const regUser = urlParams.get("username");
    const regPass = urlParams.get("password");

	if (userName == regUser && password == regPass) {
        alert("Login สำเร็จ! ยินดีต้อนรับ " + userName);
        return true;
    } 
	else {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }
}

