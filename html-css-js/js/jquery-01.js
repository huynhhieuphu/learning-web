// Cú pháp: ký tự $ tương đương từ jquery

$(document).ready(function () {
    
    $('#btn').click(function(){
        // console.log('aaa');
        let idTitle = $('h1').attr('id');
        let classTitle = $('h1').prop('class');
        // console.log(idTitle);
        // console.log(classTitle);

        // $('#imgDemo').attr('src', 'images/picture.jpg');
        $('#imgDemo').prop('src', 'images/picture.jpg');

        $('.my-box').addClass('box');
        $('.my-box').removeClass('border');
    });
    
    // document.getElementById('btn').addEventListener('click', function(){
    //     document.getElementById('imgDemo').setAttribute('src', 'images/picture.jpg');
    // })

    //hoặc
    // jquery('#btn').click(function(){
    //     console.log('aaa');
    // });

    // console.log($('.btn')[1]);
    let btn2 = $('.btn')[1];
    $(btn2).click(function(){
        // console.log('bbb');

        // $('#imgDemo').removeAttr('src');
        $('.my-box').toggleClass('border');
    });
    
    $('#btn3').click(function(){
        if($('.my-box').hasClass('border')){
            console.log('ton tai');
        }else{
            console.log('khong ton tai');
        }
    });

    $('input[id=content]').keyup(function(){
        let self = $(this);
        let valueInput = self.val().trim();

        $('p.txtContent').text(valueInput);
    })

});
