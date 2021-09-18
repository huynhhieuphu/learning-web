// *** dieu kien
let n = 10;
if(n > 12) {
    console.log('hi man');
}else if(n > 13){
    console.log('bye');
}else{
    console.log('snap');
}

let m = 10;
// đk switch chỉ so sánh bằng
// dùng if()...else() để hỗ trợ lẫn nhau
switch (m) {
    case 1:
        console.log('thang gieng');
        break;
    case 2:
        console.log('thang hai');
        break;
    case 3:
        console.log('thang ba');
        break;
    case 10:
        console.log('thang muoi');
        break;
    case 11:
        console.log('thang muoi mot');
        break;
    case 12:
        console.log('thang chap');
        break;
    default:
        console.log('khong hop le')
        break;
}

// vong lap
// 1-for(giá-trị-vòng-lặp; điều-kiện-kết-thúc-vòng-lặp; bước-nhảy-vòng-lặp)
for(let i = 0; i < 10; i++){
    console.log(i);
}

// 2-while
let j = 20;
while (j < 30) {
    console.log(j);
    j++;
}

// for, while chạy từ 0 đến n lần

// 3-do...while
let k = 50;
do {
    console.log(k);
    k++;
}while(k < 60)

// do...while chạy từ 1 đế n lần

//++i : tăng lên 1 đơn vị thực thi luôn
//i++ : thực thi - sau đó, tăng lên 1 đơn vị
let aa = 9;
let bb = 10;
let rs = ++aa - ++bb + aa-- + --bb - --aa;
//         10  -  11 + aa-- + --bb - --aa; => aa=10, bb=11
//         10  -  11 + 10   +   10 - --aa; => aa=9, bb=10
//         10  -  11 + 10   +   10 -    8; 
console.log(rs); //OUTPUT: 11
