//จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

const original = ["A","2","Z"]

function clone(arr) {
    return [...arr]
}

const newArr = clone(original)

console.log(newArr)