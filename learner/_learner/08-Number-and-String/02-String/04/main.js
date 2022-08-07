// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  
// 		xxx, porn, sex ตามลำดับ


function wordDectection (str){
    let LowerStr = str.LowerCase()
    let isMath = LowerStr.includes('xxx') || LowerStr.includes('sex') || LowerStr.includes('porn')

    
}

console.log(wordDectection("xxx"))
console.log(wordDectection("sex"))
console.log(wordDectection("xorn"))
