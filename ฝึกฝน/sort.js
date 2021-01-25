let fruits = ["Banana", "Orange", "Apple", "Mango"];

/* เรียงตัวอักษร A ไป Z */
console.log(fruits.sort());
// ["Apple", "Banana", "Mango", "Orange"]

/* แล้ว Reverse ค่า */
console.log(fruits.reverse());
// ["Orange", "Mango", "Banana", "Apple"]
let nums = [4, 7, 2, 1, 9, 7];

/* เรียงตัวเลข น้อยไปมาก */
console.log(nums.sort());
// [1, 2, 4, 7, 7, 9]

/* เรียงตัวเลข มากไปน้อย */
console.log(nums.reverse());
// [9, 7, 7, 4, 2, 1]

/* เรียงตัวเลข มากไปน้อย ใน 1 บรรทัด ไม่ต้อง Sort แล้ว Reverse */
console.log(nums.sort((a, b) => (b - a)));
// [9, 7, 7, 4, 2, 1]