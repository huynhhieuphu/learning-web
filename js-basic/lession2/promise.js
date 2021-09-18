// promise

// const p = new Promise (/* executor */function(resolve, reject){
//     // Thực thi các tác vụ bất đồng bộ ở đây, và gọi `resolve(success)` khi tác vụ hoàn thành.
//     // Nếu xảy ra lỗi, gọi đến `reject(error)`
// }); 

// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('foo');
//     }, 300);
// });

// promise1.then(function(value){
//     console.log(value); // expected output: "foo"
// });

// console.log(promise1); // expected output: [object Promise]

const myPromise = new Promise((resolve, reject) => {
    // resolve: khi nào tiến hành xử lý bất đồng bộ thành công
    // reject: khi nào tiến hành xử lý bất đồng bộ thất bại
    let x = 10;
    let y = 20;
    setTimeout(() => {
        if(x < y) {
            resolve(x);
        }else{
            reject(y);
        }
    },3000);
});

// then() : nhận dữ liệu từ resolve
// catch() : nhận dữ liệu từ reject
myPromise.then(res => {
    console.log(res);
    // tiến trình xử lý bất động bộ đã xong 
    // xử lý công việc khác ở đây
}).catch(err => {
    console.log(err);
});

// api.getUser('pikalong')
//     .then(user => {
//         api.getPostsOfUser(user)
//         .then(posts => {
//             api.getCommentsOfPosts(posts)
//             .then(comments => {
//                 console.log(comments);
//             })
//             .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

// api.getUser('pikalong')
// // trả về 1 promise
// .then(user => api.getPostsOfUser(user))
// .then(posts => api.getCommentsOfPosts(posts))
// .catch(err => {throw err});