let funcOne = function(name) {
    alert(`Hello wolrd : ${name}`);
}

// con trỏ "this" là chỉ đến chính thành phần (đối tượng) đang thao tác. 
let funcTwo = function(object) {
    console.log(object); 
    //OUTPUT: <button type="button" onclick="funcOne('tony teo');funcTwo(this);">click me</button> 
}

let myOnFocus = function() {
    console.log('focus');
}

let myOnBlur = function() {
    console.log('blur');
}

let myOnChange = function(object){
    let gender = Number.parseInt(object.value);
    if(gender === 1){
        alert('chon nam');
    }else if(gender === 0){
        alert('chon nu');
    }else{
        alert('chua chon');
    }   
}

let getText = function(object) {
    let text = object.value;
    alert(text);
}

let myDblClick = function() {
    alert('nhap chuot lien tiep 2 lan');
}

let myOnError = function() {
    console.log('File hoặc Hình đang lỗi')
}

let myOnKeyDown = function() {
    console.log('nhấn nút xuống');
}

let myOnKeyPress = function() {
    console.log('đang giữ nút');
}

let myOnKeyUp = function(object) {
    console.log('nhả nút ra');
    let text = object.value;
    console.log(text);
}

let myOnLoad = function(object) {
    console.log('Tai trang web hoan tat');
    console.log(object);
}

let myOnMouseDown = function() {
    console.log('nhấn chuột xuống');
}

let myOnMouseUp = function() {
    console.log('nhả chuột xuống');
}

let myOnMouseMove = function() {
    console.log('đang di chuyển bên trong thành phần');
}

let myOnMouseOver = function() {
    console.log('di chuyển bên trong phần tử');
}

let myOnMouseOut = function() {
    console.log('di chuyển bên ngoài phần tử');
}

let zoomIn = function(object) {
    object.width = 200;
    object.height = 200;
}

let zoomOut = function(object) {
    object.width = 100;
    object.height = 100;
}

let myOnResize = function() {
    console.log('Khung trình duyệt đang thay đổi');
}

window.onbeforeunload = function(){
    return 'exit';
}