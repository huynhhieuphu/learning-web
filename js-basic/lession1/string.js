// *** STRING JAVASCRIPT
let time = '21:03';
let mess = `bay gio la ${time} sap duoc ve roi\n`;
let mess2 = "bay gio la " + time + " sap duoc ve roi";
// console.log(mess, mess2);

// *** đếm độ dài của chuỗi
let lenStr = mess.length; 
console.log(lenStr);

// *** viết hoa chuỗi
let ucStr = mess.toUpperCase();
console.log(mess, ucStr);

// *** tìm vị trí chuỗi
let myStr = 'dang hoc js';
// let pos = myStr.indexOf('js');
let pos = myStr.lastIndexOf('js', 2);
console.log(pos);

// *** tách chuỗi
let newStr = myStr.slice(5, -4); 
// tham số 2 : vị trí kết thúc chuỗi - tính từ đầu chuỗi
// tham số 2 : giá trị số âm - tính từ cuối chuỗi (từ phải sang trái)
console.log(newStr);

let newStr2 = myStr.substring(5, 8); 
// tham số 2: vị trí kết thúc chuỗi - tính từ đầu chuỗi,  không chấp số âm
console.log(newStr2, newStr2.length);

let newStr3 = myStr.substr(5, 3);
// tham số 2: độ dài của chuỗi
console.log(newStr3);

// *** thay thê chuỗi
let newStr4 = myStr.replace('js','html');
console.log(newStr4);

// *** nối chuỗi
let str1 = 'Hi-';
let str2 = 'man';
let newStr5 = str1 + str2;
let newStr6 = str1.concat(str2);
console.log(newStr5);
console.log(newStr6);