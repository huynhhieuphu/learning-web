/**
 * export default
 * 
 * - Sử dụng từ khoá: export default
 * - LƯU Ý: Chỉ cho phép sử dụng 1 export default trên file
 * 
 */ 

/**
 * - Trường hợp: sử dụng export default trực tiếp không cần đặt tên đối (function, class)
 * 
 */

// export default function (a, b) {
//     return a + b;
// }

// export default class {
//     constructor() {
//         console.log('This is method Constructor');
//     }
// }

/**
 * - Bình thường định dạnh trước rồi gán tên đó vào export default
 * 
 */ 

// const PI = 3.14;
// export default PI;

export let name = 'Chi Pheo';

function sum(a, b) {
    return a + b;
}

export default sum;
