//จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง

//INPUT : sell
//OUTPUT : point

function calPoint (sell) {
    let point = Math.floor(sell / 100)
    return point
}

console.log(calPoint(159))
console.log(calPoint(6900))
console.log(calPoint(25007))