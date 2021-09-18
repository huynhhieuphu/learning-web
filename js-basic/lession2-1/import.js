//import

// import module khác vào file này
import giaThua, {maths} from './export'; // hoặc './export.js' (đều được)

let num = 10;
let num2 = 20;

let sum = maths.tongHaiSo(num, num2);

console.log(sum);

if(maths.kiemTraSoChan(num2)){
    console.log(`${num2} day la so chan`);
}else{
    console.log(`${num2} day la so le`);
}

let gt = giaThua(4);
console.log(gt);
