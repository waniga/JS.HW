//จงเรียงข้อมูลใน arr จากมากไปหาน้อย


const arr = [11, 17, 23, 13, 7, 19];
function compareFn(a,b) {
     return a < b ? 1 : -1
}

arr.sort((a,b)=> a < b ? 1 : -1) 

        //return a < b ? 1 : -1
        // a น้อยกว่า b ใช่ไหม? ถ้าใช้ให่รีเทิน 1  ถ้าไม่ใช้ -1

