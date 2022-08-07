// จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let scoreStr = prompt("Enter your score: ");

let isScoreNumber = scoreStr && scoreStr.trim() !== '' && !isNaN(scoreStr);

if (!isScoreNumber){
    alert('Invalid score');
} else {
    let score = Number(scoreStr)
    if (score >= 80 ) {
        alert('A');
    } else if (score >= 70 && score < 80) {
        alert('B');
    } else if (score >= 60 && score < 70) {
        alert('C');
    } else if (score >= 50 && score < 60) {
        alert('D');
    } else {
        alert('F')
    }
}