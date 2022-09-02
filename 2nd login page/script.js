function validate() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username == "admin" && password == "user") {
        alert("login successfully")
        return false
    }
    else {
        alert("login failed")
    }
}