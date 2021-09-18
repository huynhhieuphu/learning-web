// object javascript
let student = {}; //object rỗng
let car = {
    name : 'BMW', // => name: key, 'BMW': value
    // 1 cặp key: value đại diện cho propety của object, 1 cặp key:value cách nhau bởi dấu phẩy ,
    color : 'white',
    weight : 500,
    start : function() { // method của object
        return 'khoi dong xe'; 
    },
    run : function(speed) {
        return `chay voi toc do ${speed} km/h`;
    },
    stop : function() {
        return 'dung lai xe';
    }
};

// *** truy cập property của object
let nameCar = car.name;
let colorCar = car['color'];
console.log(nameCar, colorCar);

// *** truy cập method của object
let startCar = car.start();
console.log(startCar);

let runCar = car.run(60);
console.log(runCar);

// *** duyệt object
let cat = {
    name : 'tom',
    age : 2,
    weight: 3,
    color : 'blue'
}

for(let key in cat){
    console.log(key, cat[key]);
}

// *** kết hợp array với object
let toDoLists = [
    {
        id : 1,
        name : 'hoc html',
        done : true
    },
    {
        id : 2,
        name : 'hoc css',
        done : true
    },
    {
        id : 3,
        name : 'hoc js',
        done : false
    },
];

let listDone = toDoLists.filter(element => element.done === true);
console.log(listDone);

let newTodoLists = [
    ...toDoLists, 
    {
        id : 4,
        name : 'hoc reactjs',
        done : false
    },
    {
        id : 5,
        name : 'hoc nextjs',
        done : false
    },
];
console.log(newTodoLists);

let myWorks = newTodoLists.map(e => e.done === false ? {...e, done : true} : e);
/*
    {
        ...e,       => lấy lại object (Trong TH này : thoả điều kiện )
        done: true  => gán lại giá trị mới vào thuộc tính object đó.
    }
*/ 
console.log(myWorks);


// Kiến thức thêm
const A = {
    a : 1,
    b : 10
};

// A = { c : 100}; //LỖI: thay đổi giá trị trong object
A.c = 100; // được phép bổ sung thêm vào object
console.log(A); //OUTPUT: { a: 1, b: 10, c: 100 }

// *** Destructuring Object

// console.log(A.a);
// console.log(A.b);
// console.log(A.c);

// const {a,b,c} = A;
// console.log(a,b,c);

// function demo(){
//     return {name: 'Teo', age: 30};
// }

// let {name} = demo();
// let {age} = demo();
// console.log(name);
// console.log(age);

const person = {
    name : 'teo',
    age : 30
}

// copy object, update properties
const person2 = {
    ...person,
    age : 28,
    gender : 'male'
}

console.log(person);
console.log(person2);