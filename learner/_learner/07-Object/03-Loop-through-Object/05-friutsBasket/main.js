//ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย


let fruit = {};

for (var i = 0; i < 4; i++) {
    let name = prompt("Eter fruit");
    let number = prompt("Eter number");
if (number > 1) {
    name += "s"
}
fruit[name] = number;
}

console.log(fruit)


