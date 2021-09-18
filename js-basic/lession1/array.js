// *** array javascript
let fruits = ['cam','tao','mit','xoai','buoi'];
console.log(fruits, typeof fruits);

let fruits2 = new Array('cam','tao','mit','xoai','buoi');
console.log(fruits2, typeof fruits2);

let test = ['string', 3.14, true];
console.log(test);

// *** mảng đa chiều
let money = [
    [1, 2, 5],
    [10, 20, 50],
    [100, 200, 500]
];
console.log(money);

// *** kiểm tra số lượng trong phần tử mảng
let count = fruits.length;
console.log(count);

// *** truy cập phần tử trong mảng
// syntax: arr[index]
let cam = fruits[0];
console.log(cam);
let money200 = money[2][1];
console.log(money200);

// *** duyệt mảng
let numbers = [1,2,3,4,5,6,7,8,9,0];

// for
let limit = numbers.length;
for(let i = 0; i < limit; i++){
    console.log(numbers[i]);
}

// forEach
numbers.forEach(function(item, index, array){
    console.log('value: ' + item, 'index: ' + index);
})

// for..of
for(let val of numbers){
    console.log(val);
}
console.log('========');

// *** các phương thức làm việc mảng
let numbers2 = [1,2,3,4,5,6,7,8,9,0];

// push() - thêm phần tử cuối mảng - trả về độ dài mảng
numbers2.push(100);
console.log(numbers2);

console.log('========');
// pop() - xoá phần tử cuối mảng - trả về phần tử mảng
let lastEl = numbers2.pop();
console.log(lastEl);
console.log(numbers2);

console.log('========');
// unshift() - thêm phần tử đầu mảng - trả về độ dài mảng
numbers2.unshift(lastEl);
console.log(numbers2);

console.log('========');
// shift() - xoá phần tử đầu mảng - trả về phần tử xoá
let firstEl = numbers2.shift();
console.log(firstEl);
console.log(numbers2);

console.log('========');
// indexOf() - tìm vị trí phần tử trong mảng (bắt đầu từ trái sang phải) 
// - trả về index phần tử đó, không tìm thấy trả về -1
let pos = numbers2.indexOf(8);
console.log(pos);

console.log('========');
// lastIndexOf() - tìm vị trí phần tử trong mảng (bắt đầu từ phải sang trái) 
// - trả về index phần tử đó, không tìm thấy trả về -1
let pos2 = numbers2.lastIndexOf(9);
console.log(pos2);

// slice() / splice() - tách chuỗi
let numbers3 = [1,2,3,4,5,6,7,8,9,0];
let newNum = numbers3.slice(3, 6);
console.log(newNum);

let newNum2 = numbers3.splice(3, 6);
console.log(newNum2);

// splice() - thay thế phần tử trong mảng
numbers3.splice(3, 3, 100, 200, 300);
console.log(numbers3);

// join(separator) - chuyển mảng thành chuỗi, mặc định không truyền (cách nhau dấu phẩy)
let str = numbers3.join('-');
console.log(str, typeof str);

// toString() - chuyển mảng thành chuỗi
let str2 = numbers3.toString();
console.log(str2);

// split(separator) - chuyển chuỗi về mảng
let arr = str2.split(',');
console.log(arr);

// kiểm tra có phải là mảng không
if(Array.isArray(arr)){
    console.log('yes');
}else{
    console.log('no');
}


// sort() - sắp xếp phần tử trong mảng
// cú pháp: variable.sort(callback => biểu-thức-trừ-2-số) 
let number4 = [200, 30, 8, 79, 29, 0, 6, 19, 45];
// number4.sort((a, b) => a - b); 
number4.sort((a, b) => b - a);
// tham số thứ 1: SỐ TRỪ => đứng trước SỐ BỊ TRỪ tăng dần
// tham số thứ 2: SỐ BỊ TRỪ => đứng trước SỐ TRỪ giảm dần
console.log(number4);

// find() - tìm phần tử đầu tiên tìm thấy trong mảng
// cú pháp: variable.find(callback => điều-kiện-tìm-phần-tử) 
let number5 = [200, 31, 8, 79, 29, 1, 6, 19, 45];
let x = number5.find(element => element % 3 == 0);
console.log(x);

// filter - lọc mảng
// cú pháp: variable.filter(callback => điều-kiện) 
let newArr = number5.filter(el => el % 3 === 0);
console.log(newArr);

// Bài tập tự 1 function có chức năng tương tự filter
let demo = function(arr, num) {
    let result = [];
    let limit = arr.length;
    if(Array.isArray(arr)){
        for(let i = 0; i < limit; i++){
            if(arr[i] % num === 0){
                result.push(arr[i]);
            }
        }
    }
    return result;
}

let newArr2 = demo(number5, 3);
console.log(newArr2);

// map - thay đổi mảng
let category = ['home','contact','about'];
let menu = `<ul>
    ${category.map((item,index) => (`
        <li>
            <a href="#" id=${index}>${item}</a>
        <li>
    `))}
</ul>`;
console.log(menu);


// redure + gom mảng
let number6 = [200, 31, 8, 79, 29, 1, 6, 19, 45];
let rs = number6.filter((item) => item % 3 === 0)
                .reduce((previousVal, currentVal) => previousVal + currentVal);
                // previousVal : "giá trị trả về" từ mỗi lần callback
                // currentVal : "giá trị của phần tử hiện tại"
console.log(rs);


let basic = [1,2,3,4].reduce((previousVal, currentVal) => previousVal + currentVal);
                                            // vòng lắp 1: 0 + 1 = 1
                                            // vòng lặp 2: 1 + 2 = 3
                                            // vòng lặp 3: 3 + 3 = 6
                                            // vòng lặp 4: 6 + 4 = 10
console.log(basic);

// BÀI TẬP: Tổng các số nguyên trong mảng ?
let number7 = [100, 6, 10, 1, 5, 2, 4, 3, 99];

let condition = function(number) {
    let tmp = [];
    if(number < 1){
        return false;
    }
    let limit = Math.sqrt(number);
    for(let i = 2; i <= limit; i++){
        if(number % i === 0){
            return false;
        }
    }
    return tmp.push(number);
}
let condition2 = (previousVal, currentVal) => previousVal + currentVal;

let result = number7.filter(condition)
                    .reduce(condition2);
console.log(result);

// *** array - spread operator
let params = [1,2,3];
// spread operator 
let others = [100,200, ...params];
console.log(others);