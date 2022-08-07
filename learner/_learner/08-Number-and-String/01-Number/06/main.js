//จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)



function makeRandomNumberInRange (min,max) {
    let random = Math.random()*(max-min)
    return (min + random).toFixed(2)
}

console.log(makeRandomNumberInRange(2,9))