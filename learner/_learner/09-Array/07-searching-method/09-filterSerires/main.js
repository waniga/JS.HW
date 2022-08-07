//ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter



const arrayNum = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const resultNum = arrayNum.filter(function(item,index,arr){

    if (item > 10){
        return true // เอา item นั้น 
    } else {
        return false  // ไม่เอา item นั้น
    }
})
console.log(resultNum)

const arrayInt = [1, 2, 3, 4];

const resultInt = arrayInt.filter(function(item,index,arr){
   
    return item % 2 !== 0
})
console.log(resultInt)


const arrayMix = [1, '1', 2, {}];

const resultMix = arrayMix.filter((item)=> typeof(item) === 'number' )
console.log(resultMix)


const arrayFruits = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];

const resultFruits = arrayFruits.filter(item => item.length > 6)
const arrayAnimals = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];

const resultAnimals = arrayAnimals.filter(function(item,index,arr) {
    if(item.startsWith('E')) {
        return true
    } else {
        return false
    }
} )

console.log(resultAnimals)

const arrayMixCaseFruits = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const resultMixCaseFruits = arrayMixCaseFruits.filter(item => {

    if(item === item.toUpperCase()) {// APPLE === APPLE , oRanGE === ORANGE
        return true
    } else {
        return false
    }
})

console.log(resultMixCaseFruits)

const arrayProvince = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];


const resultProvince = arrayProvince.filter(item => item.toLowerCase().includes('buri'))
console.log(resultProvince)

const arrayPerson = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// // อายุไม่น้อยกว่า 18 
const resultPerson = arrayPerson.filter(item=> item.age >=18)
console.log(resultPerson)

const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6

const resultArray = array.filter(item => {

    let month = item.birth.slice(5,7)
    if(month === '06'){
        return true
    } else {
        return false
    }


})

console.log(resultArray)
