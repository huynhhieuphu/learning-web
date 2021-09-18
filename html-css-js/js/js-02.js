//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function

// định nghĩa hàm
// các hàm do dev tự định nghĩa
// Cú pháp: function nameFunc(params,...) { //code }

function kiemTraChanLe(number = 1){
    // nơi xử lý logic
    if(number % 2 === 0){
        return true;
    }
    return false;
}

// sử hàm hàm đã được định nghĩa
let check = kiemTraChanLe(12);
console.log(check, typeof check);

// Bài tập: cho biết từ 1-100 có bao nhiêu số là bội số chung của 2 và 3
function demBoiSoChungHaiVaBa(x, y){
    let count = 0;
    for(let i = x; i <= y; i++){
        if(i % 2 == 0 && i % 3 == 0){
            count++;
        }
    }
    return count;
}

let count = demBoiSoChungHaiVaBa(1, 100);
console.log('Bội số chung cùa 2 và 3 từ 1 đến 100 là ' + count);

/****************** function literals (anonymous function) ******************/

let sumNumber = function(x, y) {
    return x + y
}

let sum = sumNumber(10, 20);
console.log(sum, typeof sumNumber);

// Bài tập: in ra tất cả số nguyên tố từ 1 - 100;
let timSoNguyenTo = function(n, m) {
    let result = '';
    for(let i = n; i <= m; i++){
        if(kiemTraSoNuyenTo(i)){
            result += (result == '') ? i : ', ' + i;
        }
    }
    return result;
}   

let kiemTraSoNuyenTo = function(n) {
    if(n <= 1){
        return false;
    }

    if(n == 2){
        return true;
    }

    let limit = Math.sqrt(n);
    for(let i = 2; i <= limit; i++){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

let baitap1 = timSoNguyenTo(1, 100);
document.write('Các số nguyên: ' + baitap1);
document.write('<br>');

// Bài tập: tìm số chính phương
let timSoChinhPhuong = function(n, m) {
    let result = '';
    for(let i = n; i <= m; i++){
        if(kiemTraSoChinhPhuong(i)){
            result += (result == '') ? i : ', ' + i;
        }
    }
    return result;
}

let kiemTraSoChinhPhuong = function(n){
    let sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)){
        return true;
    }
    return false;
}

let baitap2 = timSoChinhPhuong(1, 100);
document.write('Các chính phương: ' + baitap2);
document.write('<br>');

// Bài tập: giải phương trình căn bậc 2
let giaiPhuongTrinhBacHai = function (a, b, c) {
    let detal = b*b - 4*a*c;
    if(detal < 0){
        return 'Phương trình vô nghiệm';
    } else if (detal == 0) {
        let x = -b / (2*a);
        return 'Phương trình có nghiệm kép = ' + x;
    } else {
        let x1 = (-b + Math.sqrt(detal)) / (2*a);
        let x2 = (-b - Math.sqrt(detal)) / (2*a);
        return 'Phương trình 2 nghiệm phân biệt x1= ' + x1 + ', x2= ' + x2;
    }
}

let vonNghiem = giaiPhuongTrinhBacHai(2,3,4);
let nghiemKep = giaiPhuongTrinhBacHai(2,4,2);
let haiNghiem = giaiPhuongTrinhBacHai(1,-3,2);

document.write(vonNghiem);
document.write('<br>');

document.write(nghiemKep);
document.write('<br>');

document.write(haiNghiem);
document.write('<br>');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// object Number

// let n1 = prompt('nhap so thu nhat');
// let n2 = prompt('nhap so thu hai');
// // ép về số nguyên
// n1 = Number.parseInt(n1);
// n2 = Number.parseInt(n2);
// let total = n1 + n2;

// alert('Tong 2 so la ' + total);
// console.log(typeof total);

// // kiểm tra 1 số có phải là số nguyên không ?
// if(Number.isInteger(total)){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// let n3 = prompt('nhap so thu 3');
// console.log(n3, typeof n3);
// if(isNaN(n3)){
//     console.log('YES');
// }else{
//     console.log('ERR');
// }

// let n4 = prompt('nhap chu cai vao');
// n4 = Number.parseInt(n4);
// console.log(n4, typeof n4);
// if(Number.isNaN(n4)){
//     console.log('YESSSSSSSS');
// }else{
//     console.log('ERRORRRRRR');
// }

// let n5 = 4/0;
// console.log(n5, typeof n5);

document.write('<hr>');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// object Array
let numArr = new Array(1,2,3,4,5,6,7,8,9,0);
let fruits = ['trau cau','dua hau','du du','xoai cat'];
let mangDaChieu = new Array(
    (1,2,3), 
    'cam', 
    'buoi', 
    ('a','b','c'), 
    'xa'
);
let mangDaChieu2 = [
    [1,2,3], 
    'cam', 
    'buoi', 
    ['a','b',[100,200,300]], 
    'xa'
];

// Đếm số phần tử nằm trong mảng
let countElement = numArr.length;
console.log(countElement);

// Truy cập phần tử trong mảng
// cú pháp: nameArray[index];
let du = fruits[2];
console.log(du);

let chuC = mangDaChieu2[3][2][2];
console.log(chuC);

// Duyệt các phần tử trong mảng
// 1-for
for(let i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 == 0){
        document.write(numArr[i] + '<br/>');
    }
}

// 2-foreach
// cú pháp: tên-mảng.foreach(function(item, index, array){...});
numArr.forEach(function(item, index, array){
    if(item % 2 != 0){
        document.write(`value: ${item} - key: ${index} <br/>`);
    }
})

// 3-for..of
// cú pháp: for(let item of numArr)
for(let item of numArr)
{   
    if(item < 5){
        document.write(`Phần tử trong mảng là ${item} <br/>`);
    }
}

// Các hàm trong mảng

// arr.push(item) - Thêm phần tử vào cuối mảng
document.write(`Mảng ban đầu: ${numArr} <br/>`);
let lenArr = numArr.push(99);
document.write(`Trả về độ dài của mảng : ${lenArr} <br/>`); // trả vè length mới của mảng
document.write(`Trả về mảng mới ${numArr} <br/>`); // trả về mảng mới

// arr.pop() - Xóa phần tử cuối mảng
let elementDelete = numArr.pop();
document.write(`Trả về giá trị phần tử xóa : ${elementDelete} <br/>`); // trả về value phần tử xóa
document.write(`Trả về mảng mới ${numArr} <br/>`); // trả về mảng mới

// arr.unshift(item) - thêm phần tử đầu mảng
let lenArr2 = numArr.unshift(88);
document.write(`Trả về độ dài của mảng ${lenArr2} <br/>`); // trả về length của mảng
document.write(`Trả về mảng mới ${numArr} <br/>`); // trả về mảng mới

// arr.shift() - xóa phần tử đầu mảng
let elementDelete2 = numArr.shift();
document.write(`Trả về giá trị phần tử xóa ${elementDelete2} <br/>`); // trả về value phần tử xóa
document.write(`Trả về mảng mới ${numArr} <br/>`); // trả về mảng mới

// arr.indexOf(item, position) - tìm vị trí phần tử bắt đầu từ TRÁI sang PHẢI.
// trả về -1 là không tìm thấy phần tử trong mảng
let pos = numArr.indexOf(4, 2);
document.write(`Phần tử 4 nằm vị trí số ${pos} trong mảng <br>`); // trả về vị trí tìm thấy

// arr.lastIndexOf(item, position) - tìm vị trí phần tử bắt đầu từ PHẢI sang TRÁI.
let pos2 = numArr.lastIndexOf(4, 2);
document.write(`Phần tử 4 nằm vị trí số ${pos2} trong mảng <br>`); // trả về vị trí tìm thấy

// Array.isArray(arr) - kiểm tra có phải là mảng không ?
if(Array.isArray(numArr)){
    console.log('yess');
}else{
    console.log('noo');
}

// arr.sort(function(a, b){ //code }); - sắp xếp mảng
let randomArr = [100,50,20,80,30,0,70];
randomArr.sort(function(a, b){
    // return a - b; // tăng dần
    return b - a; // giảm dần
});

console.log(randomArr);

//Bài tập: kiểm tra xem số 10 có nằm trong mảng không ?
// TH1: nếu có lấy ra các vị trí của số 10 cho đến hết mảng
// TH2: nếu không thêm phần tử 10 vào giữa mảng

let randomArr2 = [100,50,20,80,30,0,70,55];
let checkExistsOrAddEleInArray = function(array, number){
    let pos = array.indexOf(number);
    let newArr = [];
    if(pos !== -1){
        // hiển thị các phần tử phía sau number cho đến hết mảng
        for(let i = pos; i < array.length; i++){
            newArr.push(array[i]);
        }
        return newArr;
    }
    let half = Math.ceil(array.length / 2);
    for(let i = 0; i < half; i++){
        newArr.push(array[i]);
    }
    newArr.push(number);
    for(let i = half; i < array.length; i++){
        newArr.push(array[i]);
    }
    return newArr
}

let resultNewArr = checkExistsOrAddEleInArray(randomArr2, 10);
console.log(resultNewArr);