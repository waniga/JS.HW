//จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 


let str = '31 45 12 67 34 86 23 37 19 41';

const arrNum = str.split(" ")
let sum = arrNum.reduce(function(acc,item,index,array){
    if(item < 40){
        acc += +item
        acc += index
    }
},0)

consle.log(sum)