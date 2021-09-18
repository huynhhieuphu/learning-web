/**
 * Có 2 loại đê export: export name, export default.
 * 
 */ 

/**
 * export name
 * 
 * - dùng từ khoá export
 * 
 * cách 1: sử dụng trực tiếp export vào biến, function hoặc class
 */ 

// export const PI = 3.14;

// export let product = 'ipad mini 6';

// export function add(a, b) {
//     return a + b;
// }

// export class student {
//     constructor() {
//         console.log('this is class');
//     }
// }

/**
 * cách 2: gom vào trong 1 export duy nhất, truyền vào trong cặp ngoặc nhọn {..} 
 * 
 */ 
const PI = 3.14;

let product = 'ipad mini 6';

function sum(a, b) {
    return a + b;
}

class student {
    constructor() {
        console.log('this is class');
    }
}

/**
 * Có thể đặt định dạnh khác bằng từ khoá as trong export
 * 
 */ 

export {PI, product, sum as tongHaiSo, student};