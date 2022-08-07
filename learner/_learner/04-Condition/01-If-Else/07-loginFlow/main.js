// let username
// let password
let username = prompt(" Enter uername")
let password = prompt("Enter password")

if (username === null || username ===  '' || username.trim() === '' ){
    alert("username is required")
} else if(password === null || password ===  '' ||password.trim() === '' ) {
    alert("password is required")
  
} else if (username === "admin" && password === "1234" && password === "john" ) {
    alert("Hello, ${username}")

} else {
    alert("invalid username or password")}
