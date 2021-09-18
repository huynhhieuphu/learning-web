// callback  (EVENT LOOP)

// console.log('code 1');
// setTimeout(() => {
//     console.log('code 2');
// }, 1000);
// console.log('code 3');

// function hocBai(cb){
//     setTimeout(() => {
//         console.log('dang hoc bai');
//         cb();
//     }, 3000);
    
// }

// function myCallBack(){
//     diNgu();
// }

// function diNgu(){
//     console.log('Di ngu thoi');
// }

// hocBai(myCallBack);
// diNgu();

// *** callback hell

// function toTasks() {
//     setTimeout(function(){
//         console.log('task 1');
//         setTimeout(function(){
//             console.log('task 2');
//             setTimeout(function(){
//                 console.log('task 3');
//                 setTimeout(function(){
//                     console.log('task 4');
//                 }, 800);
//             }, 700);
//         }, 600);
//     }, 500);
// }
// toTasks();

// *** Cách giải quyết callback hell -> waterfall callback
// function task1() {
//     console.log('task 1');
//     setTimeout(task2, 500);
// }

// function task2() {
//     console.log('task 2');
//     setTimeout(task3, 600);
// }

// function task3() {
//     console.log('task 3');
//     setTimeout(task4, 700);
// }

// function task4() {
//     console.log('task 4');
// }

// task1();