//จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

function randomDice () {
    return 1 + Math.floor(Math.random()*6)
}

console.log(randomDice(1))
console.log(randomDice(2))
console.log(randomDice(3))
console.log(randomDice())
console.log(randomDice())
