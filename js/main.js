document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Document is ready");
    init();
});

function init() {
    console.log("Initialization function");

    console.log("Connected to main.js");

    var loginBool = getCookie("loginBool") === "true";

    if (loginBool) {
        login();
    }

    function login() {
        loginBool = true;
        setCookie("loginBool", "true", 1);

        let profile = document.getElementById("nav-profile");
        profile.innerHTML = "<img src='../assets/LogoIcons/profile.png'>";
        profile.style.padding = "0px 3px";
        profile.href = "user-page.html";
    }

    window.login = login; // Assign the login function directly to window.login
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loginB() {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let last4 = email.slice(-4);
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    let err = document.getElementById('err-msg');

    if (email == "" || password == "") {
        err.style.display = "block";
        err.innerHTML = "Please fill all the fields";
        return;
    } else if (last4 != ".com") {
        err.style.display = "block";
        err.innerHTML = "Please enter a valid email";
        return;
    } else {
        setCookie("loginBool", "true", 1);
        window.location.href = "index.html";
    }
}

function signupB(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let last4 = email.slice(-4);
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    let err = document.getElementById('err-msg');

    if (fname == "" || lname == "" || email == "" || password == "" || age == "") {
        err.style.display = "block";
        err.innerHTML = "Please fill all the fields";
        return;
    }
    else if (last4 != ".com") {
        err.style.display = "block";
        err.innerHTML = "Please enter a valid email";
        return;
    }
    else if (password.length < 8) {
        err.style.display = "block";
        err.innerHTML = "Password must be at least 8 characters";
        return;
    }
    else if (age < 10) {
        err.style.display = "block";
        err.innerHTML = "You must be at least 10 years old";
        return;
    }
    else {
        setCookie("loginBool", "true", 1);
        window.location.href = "index.html";
    }
}