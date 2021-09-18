// *** symbol data type js
// Symbol tạo ra giá trị không trùng lập
let s = Symbol(); 
console.log(s, typeof s);

let userId = Symbol('user-id');
console.log(userId);
let username = Symbol('username');

if(userId == username || userId === username){
    console.log('yes');
}else{
    console.log('no');
}

//lấy giá trị mô tả trong biến symbol
console.log(userId.description);

// Kiểm tra symbol đã tồn tại chưa
let x = Symbol('test');
let y = Symbol.for('test');
let z = Symbol.for('test');

if(x == y || x === y){
    console.log('Yes');
}else{
    console.log('No');
}

if(z == y || z === y){
    console.log('Yes');
}else{
    console.log('No');
}