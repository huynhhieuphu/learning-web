/**
 * - đặt các export name vào trong dấu ngoặc nhọn {} đúng tên đã đặt bên export.
 * - có thể đặt lại định danh khác khi import.
 * 
 */

import {PI, product as sanPham, tongHaiSo, student} from './module-export-name.js';

console.log(PI);
console.log(sanPham);
console.log(tongHaiSo(2,3));
new student();