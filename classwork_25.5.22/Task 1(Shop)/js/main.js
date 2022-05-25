


$(function(){
    
    $('.fa-th-large').click(function(){
        $('.list-for-icon').removeClass("col-lg-6")
        $('.list-for-icon').removeClass("col-lg-12")
        $('.list-for-icon').addClass('col-lg-6')
        $('.fa-th-large').css({"color": "rgb(255, 81, 0)"})
        $('.fa-list').css({"color": "rgb(11,44,61)"})
    })
    $('.fa-list').click(function(){
        $('.list-for-icon').removeClass('col-lg-6')
        $('.list-for-icon').addClass('col-lg-12')
        $('.fa-list').css({"color": "rgb(255, 81, 0)"})
        $('.fa-th-large').css({"color": "rgb(11,44,61)"})
    })

    $('#bars-icon').click(function(){
            $('#mySidenav').css({"width": "400px"})
        })
        $('.closebtn').click(function(){
            $('#mySidenav').css({"width": "0"})
          
        })
})