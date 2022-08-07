
//จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];

let result = persons.reduce((acc,item)=>{
  if(item.sex === `M`){
      acc.M.push(item.name)
  } else {
      acc.F.push(item.name)
  }
  return acc;
}, {M: [],F: []})

console.log(result)


//  result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }


 