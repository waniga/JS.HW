// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)





for (var i = 0; i < 4; i++) {
    let name = prompt("Eter name");
    let number = prompt("Eter number");
    let price = prompt("Eter price");
    let discount = prompt("discount");
}

    let keyvale = { 
        name, 
        number,
        price, 
        discount,
      };
      

if (discount = 0  || null) {
    
}

function calPercentag(percent,price){
	var discount = (percent*price)/100;
	return discount;

}

function calPercentag(percent,amount){
	var discount = (percent*amount)/100;
	return discount;
}
    console.log(keyvale);
    console.log(calPercentag[100]);
  
  