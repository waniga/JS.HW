//ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง

const names = ['Mike', 'Sid', 'Jack', 'Bill'];
names.forEach((item,index,array)=> {
    console.log(`${index + 1}. ${item}`)
})