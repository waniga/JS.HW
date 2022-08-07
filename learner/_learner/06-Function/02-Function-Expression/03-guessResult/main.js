function magic() {
    return function (x) {
      return x * 42;
    };
  }
  const answer = magic();
  console.log(answer); // f() *
  console.log(answer(1337)); // 1137*42 = 56,154**
  console.log(magic(1337)(42)); // 1764 = 42 * 42***
  
  //function log function