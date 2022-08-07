//ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
//และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา


// INPUT : null
// OUTPUT : Object

function createOjectFromUserInput (){
    const resolt = {}

    let key;
    let value;
    do {


    key = prompt("Enter key")
    value = prompt("Enter value")
    if(key !== null && key.trim !== '' && (key !== THE_SENTINEL && value !== THE_SENTINEL)){
        resolt [key] = value
    }


    } while (ket !== THE_SENTINEL && value !== THE_SENTINEL)

    return resolt



}

let userCreateOject = createOjectFromUserInput()
console.log(userCreateOject )