// *** NUMBER JAVASCRIPT

// let n1 = 10;
// let n2 = '10';
// let n3 = n1 + n2;
// console.log(n3, typeof n3);

// Trong javascript, dấu cộng + ngoài toán tử toán học còn là toán tử gán

// let n1 = 10;
// let n2 = '10';
// let n3 = n1 - n2;
// console.log(n3, typeof n3);

// Trong javascript, có khái niệm number string (trong chuỗi chỉ có số) tự động thông dịch sẽ tự động chuyển hoá thành số

// let n1 = 10;
// let n2 = 'n10';
// let n3 = n1 - n2;
// console.log(n3, typeof n3);
// Trường hợp kết quả NaN về mặt giá trị không phải số, nhưng về mặt data type là number

let n1 = 10;
let n2 = '10';
n2 = Number.parseInt(n2); // ép về kiểu số
let n3 = n1 + n2;
console.log(n3, typeof n3);

// ===================================================================================================

let myName = '';
if(myName === false){
    console.log('yes');
}else{
    console.log('no');
}

// TH bằng nhau về mặt giá trị: false == 0 == ''
// true == 1

// 2 dấu bằng == so sánh tương đối - so sánh về mặt giá trị
// 3 dấu bằng === so sánh tuyệt đối - so sánh về mặt giá trị và so sánh mặt kiểu dữ liệu

// ===================================================================================================

let x = 100;
let y = x / 0;
console.log(y, typeof y); //OUTPUT: Infinity number

// =================================================================================================== 
let strNumber = '123456'
if(!isNaN(strNumber)){
    console.log('yes');
}else{
    console.log('no');
}