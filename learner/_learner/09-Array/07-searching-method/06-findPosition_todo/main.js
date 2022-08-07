// จงหา index ใน tasks ที่มี id เท่ากับ 2


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

let someTasks = tasks.filter(item => item.id === 2);
console.log(someTasks); 




