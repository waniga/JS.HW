//จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array



let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, Jo, jin];
function getAverageAge(arr) {
    let sumAge = arr.reduce(function(acc,item){
        let age = item.age
        return acc+age

    },0)
    let getAverageAge = sumAge / Array.length
    return getAverageAge
}
console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33




