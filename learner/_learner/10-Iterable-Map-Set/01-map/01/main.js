// - จงสร้าง Map เก็บไว้ในตัวแปรชื่อ map
// - เพิ่ม key ชื่อ name และ age มี value เท่ากับ Thomas และ 31 ตามลำดับ
// - แก้ไข value ใน key ชื่อ name ให้มีค่าเท่ากับ Dan
// - ลบ key ชื่อ age
// - ตรวจสอบว่าใน map มี key ชื่อ birthDate หรือไม่
// - หาจำนวนของ key-value ใน map
// - ลบข้อมูลทั้งหมดใน map 

const map = new Map();       
map.set('name', 'Thomas');          // เพิ่ม map.set
map.set('age', 31);
map.set('name', 'Dan');
map.delete('age');
map.has('birthDate');              // ให้ตรวจสอบว่ามี birthDate ให้ใช้ map.has
map.size; // ให้หา หาจำนวนของ key-value ใน map ใช้ map. size
map.clear();
