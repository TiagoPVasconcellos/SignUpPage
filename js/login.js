let user = document.getElementById("user");
let password = document.getElementById("password");
function login() {
    if (user.value === "" || password.value === "") {
        alert("There´s empty spaces");
    } else if (user.value === localStorage.login && password.value === localStorage.password) {
        console.log("It´s working");
        alert("Congrats. Your user and password are corrects.");
        user.value = "";
        password.value = "";
        localStorage.clear();
        location.href = "index.html";
    } else {
        alert("User or password are invalid, please, try again.");
    };
};

function forgotAccount() {
    alert("Howw??? You just write this...but ok, press F12 and in the console, digit 'localStorage' then you´ll see your information");
};