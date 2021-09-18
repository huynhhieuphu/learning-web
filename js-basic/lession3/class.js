// class

// Định nghĩa class 
class Student {
    // khai báo thuộc tính
    id = 1;
    name = 'Tony Teo';

    //định nghĩa hàm constructor - hàm khởi tạo luôn chạy đầu tiên khi tạo đối tượng
    constructor(address = ''){
        this.age = 30;
        this.email = 'demo@email.com';
        this.addr = address;
    }

    getAddress = () => {
        return this.addr;
    }

    // khai báo phương thức
    diHoc() {
        return `${this.name} dang hoc`;
    }
    choiGame = () => {
        //console.log(this);
        return `${this.id} dang choi game`;
    }

    static goToSleep = (time = 9) => {
        return `di ngu luc truoc ${time}:00 PM`;
    }
}

// khởi tạo đối tượng
let st = new Student('Ho Chi Minh');

// truy cập thuộc tính
console.log(st.name);
// truy cập phương thức
console.log(st.choiGame());

console.log(st);

// truy cập static
console.log(Student.goToSleep(12));