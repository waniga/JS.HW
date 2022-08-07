let isLeapYear = year =>{
    if(year % 100 === 0){
        if(year % 400 === 0)
        return true
    } else {
        return false
    }

    //return year % 400 === 0  true : fale
    return year % 400 === 0
}

console.log(isLeapYear(200))
console.log(isLeapYear(1600))
console.log(isLeapYear(32))



