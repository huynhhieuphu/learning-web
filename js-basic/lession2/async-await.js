// async/await

// async function() {
//     try {
//         const user = await api.getUser('pikalong');
//         const posts = await api.getPostsOfUser(user);
//         const comments = await api.getCommentsOfPosts(posts);

//         console.log(comments);
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function hello(){
//     return 1;
// }

// console.log(hello() instanceof Promise); //true
// hello().then(console.log); //1