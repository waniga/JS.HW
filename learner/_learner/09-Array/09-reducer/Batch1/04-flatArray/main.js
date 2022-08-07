//จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

function flatArray(array) {
    let flattenArray = array.reduce((acc,item,index)=>{
        acc.push(...item)
        return acc
    },[])

    return flattenArray
}
flatArray(flattened)

// expected result: [0, 1, 2, 3, 4, 5]
