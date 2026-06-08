function showRegister(){
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");

    document.querySelectorAll(".tab")[0].classList.remove("active");
    document.querySelectorAll(".tab")[1].classList.add("active");
}

function showLogin(){
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");

    document.querySelectorAll(".tab")[1].classList.remove("active");
    document.querySelectorAll(".tab")[0].classList.add("active");
}

function register(){
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem(user, pass);
    localStorage.setItem("currentUser", user);

    let redirect = localStorage.getItem("redirectPage");

    if(redirect){
        localStorage.removeItem("redirectPage");
        window.location.href = redirect;
    }else{
        window.location.href = "index.html";
    }
}

function login(){
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedPass = localStorage.getItem(user);

    if(savedPass === pass){
        localStorage.setItem("currentUser", user);

        let redirect = localStorage.getItem("redirectPage");

        if(redirect){
            localStorage.removeItem("redirectPage");
            window.location.href = redirect;
        }else{
            window.location.href = "index.html";
        }

    }else{
        alert("Sai tài khoản!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let user = localStorage.getItem("currentUser");
    let menu = document.getElementById("account-menu");

    if(user){
        menu.innerHTML = `
            <li style="color:#4da6ff;">👤 ${user}</li>
            <li><a href="#" onclick="logout()">Đăng xuất</a></li>
        `;
    }
});

function logout(){
    localStorage.removeItem("currentUser");
    location.reload();
}

function savePage(){
    localStorage.setItem("redirectPage", window.location.href);
}