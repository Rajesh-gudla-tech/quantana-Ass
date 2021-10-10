let userName = document.getElementById("email");
let passWord = document.getElementById("password");
let buttenEl = document.getElementById("login");

buttenEl.onclick = function() {
    let UserEnteredName = userName.value;
    let userEnteredPass = passWord.value;
    is_valid = UserEnteredName.endsWith("@gmail.com");
    if (is_valid && UserEnteredName !== "" && userEnteredPass !== "") {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }


};