
// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
  
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
   
    console.log(i);
  }
}
