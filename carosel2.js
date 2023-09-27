// on click of any .subject-pill make all subject pill and .explaination not active and then make it active and make the .explaination that corresponds to its data-t active

   
$('.subject-pill').on('click', function(){
    let current = $(this).data('t')
    //remove all 'active' and hide all
    $('.subject-pill').removeClass('active')
    $(".explaination").css("display", "none");

    // add back to current
    $('.subject-pill[data-t="'+ current +'"]').addClass('active')
    $('.explaination[data-t="'+ current +'"]').css("display", "block");

})