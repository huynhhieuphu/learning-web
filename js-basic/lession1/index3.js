// Xử lý hàm - function
function sumNumber(n1, n2 = 10){
    return n1 + n2;
    //keyword return trả kết quả về hàm - thoát khỏi hàm
}

// gọi hàm ra sử dụng - thực thi
let result = sumNumber(1);
console.log(result);

// *** Định nghĩa anynomous function / function expressions
let kiemTraChanLe = function(num) {
    if(num % 2 === 0 ){
        return true;
    }
    return false;
}

let num  = 26;
if(kiemTraChanLe(num)){  
    console.log('so chan');
}else{
    console.log('so le');
}

// Bài tập: viết hàm kiểm 1 số phải số nguyên tố không ?
function kiemTraSoNguyen(number) {
    if(number < 1){
        return false;
    }
    let limit = Math.sqrt(number);
    for(let i = 2; i <= limit; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

// Bài tập Đếm có bao nhiêu số là số nguyên
let demSoNT = function (min = 30, max = 70) {
    let count = 0;
    for (let i = min; i <= max; i++) {
        if(kiemTraSoNguyen(i)){
            count++;
        }
    }
    return count;
}

let result2 = demSoNT(30, 70);
console.log(result2);

// *** Định nghĩa arrow function
let tinhGiaThua = (num) => {
    let gt = 1;
    for (let i = 1; i <= num; i++) {
        gt *= i;
    }
    return gt;
}

let result3 = tinhGiaThua(4);
console.log(result3);

let shortFunc = (a, b) => a > b ? a : b;
// let example = (a, b) => {
//     return a > b ? a : b;
// }
console.log(shortFunc(1, 2));

// REST PARAMETER
function restParam(a, ...n) {
    console.log(a, ...n);
}

restParam(1, 'a','b','c');