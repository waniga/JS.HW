//ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
//คูณเฉพาะ value ที่เป็น number เท่านั้น

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

menu = {
  width: 600,
  height: 900,
  title: 'My menu'
};


const multiplyNumeric = (Obj,num) => {
    const resolt = {}
    for(let key in Obj){
        let currentValue = Obj[key]

        if(typeof currentValue === 'number'){
            resolt[key] = currentValue*num
        }else {
            resolt[key] = currentValue

        }
    }

    return resolt
  }

  console.log(multiplyNumeric(menu,3))
  console.log(menu)

