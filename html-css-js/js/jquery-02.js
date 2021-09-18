$(document).ready(function () {
    $('button#btn1').click(function(){
        // // single css
        // $('div#box1').css('width','200px');
        // $('div#box1').css('height','200px');
        // $('div#box1').css('border','1px solid #ff0000');
        // $('div#box1').css('background-color','#ffff00');

        // multiple css
        // $('div#box1').css({
        //     width: '200px', 
        //     height: '200px', 
        //     backgroundColor: '#ffff00',
        //     border: '1px solid #ff0000'
        // });

        let box1 = document.querySelector('div#box1');
        box1.style.width = '200px';
        box1.style.height = '200px';
        box1.style.backgroundColor = '#ffff00';
        box1.style.border = '1px solid #ff0000';
        box1.style.padding = '30px';
    });

    $('button#btn2').click(function(){
        let box1 = $('div#box1');

        // let width = box1.width();
        // let height = box1.height();
        // console.log(`width: ${width} - height: ${height}`);

        box1.width(100).height(100);
    });

    $('button#btn3').click(function(){
        let box1 = $('div#box1');

        let width = box1.innerWidth();
        let height = box1.innerHeight();
        console.log(`width: ${width} - height: ${height}`);


        // tìm 1 phần tử nằm trong 1 tập hợp
        $('ul.menu li').eq(2).css('color','red');

        // kiểm tra thành phần bên trong selector tồn tại hay không
        let state = $('input[type=checkbox]').is(':checked');
        if(state){
            console.log('da chon');
        }else{
            console.log('chua chon');
        }

        //tìm các phần tử nằm bên trong quan hệ từ phần tử góc
        $('section').find('h1').css('color', 'red');

        // kiểm tra element có tồn tại hay không?
        if($('h1').length){
            console.log("h1 exists");
        }else{
            console.log("h1 does not exists");
        }
        
        // tìm 1 phần tử nằm phía trước trong 1 tập hợp
        $('ul.menu li').eq(2).next().css('color','blue');
        // tìm 1 phần tử nằm phía trước 2 bước trong 1 tập hợp
        $('ul.menu li').eq(2).next().next().css('color','gray');

        // tìm 1 phần tử nằm phía sau trong 1 tập hợp
        $('ul.menu li').eq(2).prev().css('color','lime');

        // tìm phần tử cha của phần tử gốc
        $('h1').parent().css({
            width: '200px', 
            height: '200px', 
            backgroundColor: '#ffff00',
            border: '1px solid #ff0000'
        });

        // $('h1').html('<em>alo alo</em>');
        let header = $('header').html();
        console.log(header);

        // $('header').empty(); // xóa đi các thành phần nằm bên trong
        // $('header').remove(); // xóa phần tử gốc và các thành phần nằm bên trong
    });

    $('#btnHide').click(function(){
        // $('.content').fadeOut(3000);
        // tham số đầu tiên độ hiệu ứng: 'slow','fast', 3000 = 3 second
        // $('.content').hide(3000);
        // $('.content').slideUp(3000);
        $('.content').toggle(3000);
    });

    $('#btnShow').click(function(){
        // $('.content').fadeIn();
        // $('.content').show();
        $('.content').slideDown(3000);
    });
});