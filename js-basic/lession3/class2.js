// Kế thừa class

class Animals {
    constructor(name = '', color = '', age = 0) {
        this.name = name;
        this.color = color;
        this.age = age;
        // this.name: tạo ra 1 thuộc tính có tên là name
        // name: tham số truyền vào lúc khởi tạo đối tượng
    }

    eating(food = 'fish') {
        return food;
    }

    sleeping(time = 8) {  
        return time;
    }
}

// kế thừa với keyword extends lopKeThua
class Cat extends Animals {
    // lớp Cat sẽ kế thừa các thuộc tính và phương thức từ lớp Animals

    constructor(name = 'doremon', color = 'white-blue') {
        super(); // tương tự như OOP PHP gọi parent::__constructor(); 
        this.name = name;
        this.myAge = this.age;
    }


    // override phương thức
    sleeping(time = 11) {  
        return time;
    }

    getSleeping() {
        return super.sleeping();
    }
}

let tom = new Cat();

console.log(tom.name);
console.log(tom.eating());
console.log(tom.myAge);

console.log(tom.sleeping());
console.log(tom.getSleeping());
