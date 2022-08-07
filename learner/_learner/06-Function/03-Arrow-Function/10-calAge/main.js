let calDayBirthYear = (birthYear) => {
    let day = 0
    for(let i = birthYear; i <= 2020; i++){
        if(isLeapYear(i)){
            day += 365;
        }
        day += 365;
    }
    return day
}

console.log(calDayBirthYear(2020))