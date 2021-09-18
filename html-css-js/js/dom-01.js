//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DOM Element - Truy xuất thẻ hTML

// Truy xuất bằng id : trả về phần tử duy nhất là id
let title = document.getElementById('title');
console.log(title);

// Truy xuất bằng class : trả về các phần tử có cùng tên class 
let title2 = document.getElementsByClassName('title')[1];
console.log(title2);

// Truy xuất bằng tag name : trả về các phần tử có cùng tên thẻ
let title3 = document.getElementsByTagName('h2');
console.log(title3[1]);

// Truy xuất selector css
// querySelector : trả về phần tử tìm thấy đầu tiên
let title4 = document.querySelector('.title');
console.log(title4);
// querySelectorAll : trả về tất cả phần tử tìm thấy
let title5 = document.querySelectorAll('h2');
console.log(title5[1]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DOM Event - Bắt sự kiện, 
/// DOM listener - lắng nghe sự kiện xảy ra
let btn = document.querySelector('button');

// 1- bắt sự kiện
btn.onclick = function() {
    console.log('Hello wolrd');
}

// 2- lắng nghe sữ kiện
btn.addEventListener('dblclick', function(){
    console.log('Hello wolrd 2');
});

// ví dụ
let input = document.querySelector("input[type=text]");

input.addEventListener('blur', function(){
    let text = this.value;
    alert(text);
});

input.onchange = function() {
    let text = this.value;
    console.log(text);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DOM HTML - Gán và Lấy trong html

let btnCLickMe2 = document.getElementById('btnCLickMe2');
let titleTest = document.querySelector('.js-title-test');
let changeTag = document.querySelector('.js-change-tag');
let image = document.getElementsByClassName('js-image');

btnCLickMe2.addEventListener('click', function(){
    // lấy nội dung html
    let text = titleTest.innerHTML;
    console.log(text);
    // gán nội dung html
    titleTest.innerHTML = 'Hello world'; 

    // Thay đổi thuộc tính html
    changeTag.type = 'button';
    // hoặc
    image[0].setAttribute('src','images/picture.jpg');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DOM CSS - Gán và Lấy trong CSS

let btnCLickMe3 = document.getElementsByTagName('button')[2];
let box = document.querySelector('.box');

btnCLickMe3.onclick = function() {
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.border = '1px solid #ff0000';
    box.style.backgroundColor = 'lime';
    box.style.marginTop = '20px';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BOM - Windows

let btnBomWindow = document.querySelectorAll('button')[3];
btnBomWindow.addEventListener('click', function(){
    // lấy ra chiều cao va chiều rộng khung trình duyệt
    let width = window.innerWidth;
    let height = window.innerHeight;

    let p = document.createElement('p');
    p.className = 'demo';
    box.appendChild(p);
    p.innerHTML = `Chiều rộng: ${width} - chiều cao ${height}`;

    // hiển thị ra 1 cửa số khác
    window.open('template-shopping-bootstrap.html', 'template demo', 'width=1000px, height=600px');
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BOM - Location
document.getElementById('btnReloadPage').onclick = function(){
    window.location.reload(true);
    // true: load tải trang từ trang web về
}

document.getElementById('btnGoToPage').addEventListener('click', function(){
    window.location.href = 'https://www.google.com.au';
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BOM - screen & history

//screen
document.getElementById('screen').addEventListener('click', function(){
    let widthScreen = screen.width;
    let heightScreen = screen.height;
    alert(`screen width: ${widthScreen} - height: ${heightScreen}`);
})

// history
document.getElementById('js-history-forward').addEventListener('click', function(){
    history.forward();
})

document.getElementById('js-history-back').addEventListener('click', function(){
    history.back();
})

