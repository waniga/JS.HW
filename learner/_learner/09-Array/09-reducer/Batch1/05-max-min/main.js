//จงหาค่ามากสุดและน้อยสุดใน arr


let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

function findMaxMin(array) {
const intailValue = {
    max : arr[0],
    min : arr[0],
}
let summary =arr.reduce((acc,item)=>{
    if(acc.max < item){
        acc = item
    }

    if(acc.min > item){
        acc.min = item
    }
    return acc
},intailValue)
return summary
}
findMaxMin(arr)