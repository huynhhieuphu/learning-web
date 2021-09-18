// console.log('hello world');

// comment 1 dòng

/*
comment nhiều dòng
*/

// *** Khai báo biến
let myName = 'Van teo';
var myAge = 30;
let checking = true;
var myPhone;
var myAddress = null; // data type: object

// *** kiểm tra kiểu dữ liệu
console.log(typeof myName);
console.log(typeof(myAge));
console.log(typeof checking);
console.log(typeof myPhone);
console.log(typeof myAddress);

/*
    Sự khác nhau giữa let và var
*/

// Từ khoá let không cho định nghĩa lại biến đã tồn tại
// let myMoney = 10;
// let myMoney = 30;
// console.log(myMoney); // Lỗi

// var myMoney = 10;
// var myMoney = 30;
// console.log(myMoney); // Thao tốn tài nguyên vùng nhớ

// let n = 10;
// if(n > 9){
//     let n = 12
//     if(n > 11){
//         let n = 13;
//         console.log(n); //OUTPUT: 13
//     }
//     console.log(n); //OUTPUT: 12
// }    
// console.log(n); //OUTPUT: 10

// var n = 10;
// if(n > 9){
//     var n = 12
//     if(n > 11){
//         var n = 13;
//         console.log(n); //OUTPUT: 13
//     }
//     console.log(n); //OUTPUT: 13
// }
// console.log(n); //OUTPUT: 13

// phạm vi hoạt động của biến dựa vào keyword let hoặc var
// keyword let nhỏ hơn dựa vào cặp ngoặc nhỏ gần nhất bao lấy nó
// keyword var dựa vào function gần nó nhất bao lấy nó.

// keyword var tồn tại con trỏ "this" trỏ vào chính biến đó - keyword let thì không
// keyword var nằm trong function có trường hợp - xuất hiện hoisting - keyword let thì không

// *** HẰNG SỐ - không được phép thay đổi giá trị ban đầu
const PI = 3.14;
// PI = 3.15; // lỗi
console.log(PI, typeof PI); 
