/**
 * import
 * 
 * - Export default nên không cần đặt trong {}
 * - Sử dụng bất kỳ tên nào, miễn không trùng tên và trùng keyword
 * 
 */ 

// import tong from './module-export-default.js';
// console.log(tong(5,6));


// import connguoi from './module-export-default.js';
// new connguoi();


// import HANGSO from './module-export-default.js';
// console.log(HANGSO);

/**
 * - sử dụng import đặt export default trước export name
 * 
 */

import sum, {name} from './module-export-default.js';
console.log(sum(2, 9));
console.log(name);