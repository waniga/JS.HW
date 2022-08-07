//ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 
function isArray(input) {
    return Array.isArray(input)
}

isArray({}) //false?
isArray(1)  //false?
isArray("")  //false?
isArray([])  //ture?
isArray([1,2,3,4])  // ture?