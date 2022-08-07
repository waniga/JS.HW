//จงหาผลรวมของ element ใน array โดยใช้ forEach

const array = [29, 17, 13, 47, 23, 31];

let sum = 0

function runEveryItems(item,index,array){
        sum += item
}

array.forEach((el,idx,arr)=> {
    sum += el;
})

console.log(sum)