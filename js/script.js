let user = document.getElementById("user");
let password = document.getElementById("password");
class Accounts {
    constructor(user, password) {
        this._user = user;
        this._password = password;
    };
};
function createAccount() {
    let account = new Accounts(user.value, password.value);
    if (user.value === "" || password.value === "") {
        alert("There´s empty spaces");
    } else {
        user.value = "";
        password.value = "";
        JSON.stringify(account);
        localStorage.setItem("login", account._user);
        localStorage.setItem("password", account._password);
        location.href = "login.html";
    };
};
function deleteAccount() {
    user.value = "";
    password.value = "";
};
