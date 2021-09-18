/*
document.write('<h1>Hello world</h1>');
// cho phép in ra nội dung ra trình duyệt với hàm write trong đối tượng document

alert('Hello you !!!');
// hàm alert hiển thị thông báo ra trình duyệt

console.log('learing javascript');
// Để hiển thị kết quả. dùng debug lỗi javascript.
// Nhấn nút F12 hoặc chọn chuột phải trong trình duyệt --> chọn Inspect.

// hàm promt cho phép người dùng nhập dữ liệu từ trình duyệt
var myName = prompt('Vui long nhap ten');
document.write('toi ten la ' + myName);
*/

// comment 1 line
/*
    comment multiple line
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Các kiểu dữ liệu trong js
// 1 - Kiểu number
var myNumber = 3.14;

// var là từ khoá khai báo biến;
// typeof dùng để kiểm trả dữ liệu biến
console.log(typeof myNumber);

// 2 - kiểu string
var myString = "Tony Teo";
console.log(typeof(myString));

// 3 - kiểu boolean
var isHidden = true;
console.log(typeof(isHidden));

// 4 - kiểu underfined --> khai biến, mà không thiết lập giá trị nào, thì đó là underfined
var myName;
console.log(typeof(myName));

// Trong lập trình thực tế thì không ai đặt giá trị biến underfined 
var myAge = null; // myAge = '';
console.log(typeof(myAge));
// 1 Biến gán bằng null không tốn bộ nhớ để lưu biến ấy.
// 1 Biến gán bằng 1 chuỗi rỗng vẫn tốn bộ nhớ để lưu biến ấy.

var a = 10;
var b = '10'; // Trong javascript, có khái niệm number string trong chuỗi có chỉ có số
var c = a - b;
console.log(c);

// lưu ý: Phép toán cộng (+) trong trường hợp này là nối chuỗi. 
// Các phép tính trừ (-), nhân (*), chia (/) vẫn tính toán bình thường.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// KHAI BÁO BIẾN

// 1. từ khoá var
// var 123abc = 'hello'; // SAI không được phép bắt đầu bằng số
// var while = 'hello'; // SAI không trùng từ khoá

// có 3 phong cách đặt tên biến
var myLoremIpsum = 'lorem ipsum'; // Kiểu lạc đà khuyến dùng
// var MyLoremIpsum = 'lorem ipsum'; // không nên dùng
// var my_lorem_ipsum = 'lorem ipsum'; // không nên dùng

// biến js phân biệt chữ hoa - chữ thường
var myLOREMIPSUM = 'lorem ipsum';

// không lặp lại từ khoá var trên cùng 1 tên biến
var myMoney = 10;
// var myMoney = 20; // cho phép override lại biến khi lặp lại từ khoá var - không nên dùng
myMoney = 20;
console.log(myMoney);

// 2 - từ khoá let
let myCompany = 'abc';
// let myCompany = 'xyz'; // Không được phép override lại biến
myCompany = 'xyz';
console.log(myCompany);

// - khác nhau let và var
//   - var cho phép override
//   - let không cho phép override

// Phạm vi hoạt động let và var
// - Khi đặt let và var không nằm trong hàm nên phạm vi hoạt động như nhau.

// Phạm vi hoạt động trong hàm

// function testFunction() {
//     var myNum = 10;
//     if(true){
//         var myNum = 20;
//         console.log(myNum);
//     }
//     console.log(myNum);
// }

// testFunction();
// //OUTPUT : 20
// //OUTPUT : 20

function testFunction() {
    let myNum = 10;
    if(true){
        let myNum = 20;
        console.log(myNum);
    }
    console.log(myNum);
}

testFunction();
//OUTPUT : 20
//OUTPUT : 10

// 3 - const
const PI = 3.14;
// PI = 3.15; // SAI không được phép thay đổi giá trị
console.log(PI);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Biểu thức điều kiện

let checkNumber = 10;

// // if
// if(checkNumber == 9){
//     console.log('success');
// }

// // if..else...
// if(checkNumber == 9){
//     console.log('success');
// }else{
//     console.log('fail');
// }

// if...else if...
// if(checkNumber == 8){
//     // do something
// }else if(checkNumber == 9) {
//     // do something
// }else if(checkNumber == 10) {
//     // do something
// }else {
//     // do something
// }

// Lưu ý: không nên dùng if else quá 3 lần

// // switch...case
// switch (checkNumber) {
//     case 6:
//         // statement
//         break;
//     case 7:
//         // statement
//         break;
//     case 8:
//     case 9:
//         // statement
//         break;
//     case 10:
//         // statement
//         break;
//     default:
//         // nếu không có kết quả nào trùng các case trên thì sẽ thực thi các lệnh trong default
//         break;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Vòng lặp

// for
//điểm bắt đầu ; điếm kết thúc ; bước nhảy vòng lặp
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        document.write(i + '<br />');
    }
}

document.write('<hr>');

// while - kiểm tra điều kiện, thực thi vòng lặp
// 0 - n 
let demo = 0; //  điểm bắt đầu 
while (demo <= 10) { // điếm kết thúc 
    if(demo % 2 == 0){
        document.write(demo + '<br />');
    }
    demo++; // bước nhảy vòng lặp
} 

document.write('<hr>');

// do...while - thực thi vòng lặp, mới kiểm tra điều kiện
// 1 - n
let demoTwo = 0;
do {
    if(demoTwo % 2 == 0){
        document.write(demoTwo + '<br />');
    }
    demoTwo++;
}while (demoTwo <= 10);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Toán tử logic

// 0, '', false bằng nhau về mặt giá trị
// 1, true bằng nhau về mặt giá trị
let myStr = '';
if(myStr === false){
    console.log('yes');
}else{
    console.log('no');
}

// toán tử điều kiện ? alias if...else

let x = 10;
let y = 20;
let result = ((x-y) > (y-x)) ? x/y : (y%x == 0 ? x*y : y/x);

// if (x-y > y-x) {
//     result = x/y;
// } else {
//     if (y%x == 0) {
//         result = x*y;
//     } else {
//         result = y/x;
//     }
// }
console.log(result); 

let i = 10;
let j = 9;
let k = (i++) - (j++) + (++i) + (++j) - (--i) - (--j);
//        10  -   9   + (++i) + (++j) - (--i) - (--j) --> lúc này: i = 11, j = 10
//        10  -   9   +   12  +   11  - (--i) - (--j) --> lúc này: i = 12, j = 11
//        10  -   9   +   12  +   11  -   10  -   11
// kết quả  =   3
console.log(k);
