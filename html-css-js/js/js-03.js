//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Object

let cars = {
    name : 'BMW',
    model : 'X5',
    colors : 'white',
    money : 1000,
    start : function(hours) {
        return hours;
    },
    stop : function(hours) {
        return hours;
    }
}

// truy cập các phần tử trong object
// cú pháp: nameObject.key hoặc nameObject['key']
let nameCars = cars.name;
console.log(nameCars);
// hoặc
let colorCars = cars['money'];
console.log(colorCars);

// truy cập các phương thức trong object
let start = cars.start(2);
console.log(start);

let students = {
    name : 'Tony teo',
    age : 30,
    isMale: true,
    tutorial : [
        {name : 'html', rate : 9},
        {name : 'css', rate : 8},
        {name : 'js', rate : 7}
    ],
    time : {
        t : "am",
        name : 'abc',
    }
}

let diem = students.tutorial[0].rate;
let diem2 = students['tutorial'][1]['rate'];
console.log(diem, diem2);

// duyệt các đối tượng
let cats = {
    name : 'Tom',
    color : 'lavender',
    age : 3,
    weight: 5
}

for(let key in cats){
    console.log(cats[key]);
}

let doctors = [
    {name: 'Van A', age: 28, addr : 'Ho Chi Minh', gender : 1, money: 300},
    {name: 'Thi B', age: 26, addr : 'Binh Duong', gender : 0, money: 500},
    {name: 'van C', age: 30, addr : 'Long An', gender : 1, money: 300}
];

let totalMoney = 0;
let table = '';
table += '<table border="1" width="100%">';
doctors.forEach(function(item, index){
    let gender = (item.gender == 1) ? 'Nam' : 'Nu';
    totalMoney += item.money;
    
    table += '<tr>';
        table += `<td>${item.name}</td>`;
        table += `<td>${item.age}</td>`;
        table += `<td>${item.addr}</td>`;
        // table += `<td>${(item.gender == 1) ? 'Nam' : 'Nu'}</td>`;
        table += `<td>${gender}</td>`;
        table += `<td>${item.money}</td>`;
    table += '</tr>';
});
table += '<tr>';
table += '<td colspan="4">Tong Tien:</td>';
table += `<td>${totalMoney}</td>`;
table += '</tr>';

table += '</table>';

document.write(table);
