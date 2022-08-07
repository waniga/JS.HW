//ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
//ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

function isEmptyOject (Obj)  {
    //เข้า for loop เมื่อ obj มี 1 key ขึ้นไป
    for(let key in Obj) {
        return fslse

    }
    //มรเฉพาะ 0 key ที่หลุดทาบรรทัดนี้ได้
    return true
}


const user_1 = {name : 'CC12'}
const user_2 = {name : 'CCodecamp12'}
const user_3 = {}

console.log(isEmptyOject)