//จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 
function isArray(input){
    return Array.isArray(input)
}

isArray({})
isArray(1)
isArray("")
isArray([])
isArray(1,2,3,4)


console.log(isArray(input)) 
