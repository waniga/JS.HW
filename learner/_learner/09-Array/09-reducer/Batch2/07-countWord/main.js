//จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str


let str = 'I live in Thailand';

let lowerCase = str.toLowerCase() 
const arrChar = lowerCase.split("")
arrChar //

const result = arrChar.reduce(function(acc,item){
    if(item.item() != ""){
        let foundValue = acc[item]
    if(foundValue){
        acc[item] += 1
    } else {
        acc[char] = 1

    }
    acc[char] = acc[char] ? acc[char] + 1 : 1
    }
    return acc
},{})

consols.log(result)






// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
