


const user = {  
    name: 'John',
    surname: 'Doe',
  };
  
  user.name = 'Matt'; //now key "name" store value "Jame"
console.log(user.name); // Matt



const user = {}
user.name = "John"
let a = 'name'
user[a] = 'John'
console.log(user)

user.surname = 'Doe'
console.log(user)

user.name = "Matt"
console.log(user)

delete user.name
console.log(user)
