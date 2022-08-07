let str = 'I live in Thailand';
let lowercase = str.toLowerCase()
const arrChar = lowercase.split("")
const result = arrChar.reduce(function(acc,char) {
    if(char.trim() !== ""){
    acc[char] = acc[char] ? acc[char] + 1 : 1
    }
    return acc
} , {})
console.log(result)