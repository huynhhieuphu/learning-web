// generator function

// trả về giá trị, trước khi hàm kết thúc và có thể quay lại tiếp tục chạy hàm tại thời điểm dừng 
// xử lý đồng bộ các tiến trình
function* idMaker() {
    let i = 1;
    while(true){
        yield i++
    }
}

const gen = idMaker();

// console.log(gen); // OUTPUT: Object [Generator] {}

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);