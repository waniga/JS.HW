function checkPermission(role, cb1, cb2) {
    if (role === "ADMIN" ) {
        cb1();

} else {
    cb2
}
    
}

let adMinEcecute = function (){
    alert(“ACCESS GRANTED”)
}

let guestEcecute = 