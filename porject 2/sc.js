// Create default user (database)
if (!localStorage.getItem("user")) {
    localStorage.setItem(
        "user",
        JSON.stringify({ id: "admin", password: "1234" })
    );
}

function login() {
    let uid = document.getElementById("userid").value;
    let pwd = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (uid === user.id && pwd === user.password) {
        window.location.href = "home.html";
    } else {
        document.getElementById("msg").innerText = "Invalid ID or Password";
    }
}

function logout() {
    window.location.href = "login.html";
}