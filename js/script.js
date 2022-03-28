   $(document).ready(function(){
    // For Sale
    $("#sale").mouseenter(function(){
        $('.sale .sub-menu').css("display", "block");
        $('.fabric .sub-menu').css("display", "none");
    });
    $(".sub-menu").mouseleave(function(){
        $('.sale .sub-menu').css("display","none");
    });
    // For Fabric
    $("#fabric").mouseenter(function(){
        $('.fabric .sub-menu').css("display", "block");
        $('.sale .sub-menu').css("display","none");
    });
    $(".sub-menu").mouseleave(function(){
        $('.fabric .sub-menu').css("display","none");
    });
    $('.btn').click(function(){
      $('.m1').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-2').click(function(){
      $('.m2').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-3').click(function(){
      $('.m3').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-4').click(function(){
      $('.m4').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });

    $('.btn-5').click(function(){
      $('.m5').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-6').click(function(){
      $('.m6').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-7').click(function(){
      $('.m7').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.btn-8').click(function(){
      $('.m8').css({
        'visibility':'visible',
        'opacity':'1',
        'padding':'25px'
      });
    });
    $('.close-modal').mouseenter(function(){
      // alert('working')
      $('.modal').css({
        'visibility':'hidden',
        'opacity':'0'
     });
    });
    $('#gotop').click(function(){
      topFunction();
    });
});



var mybutton = document.getElementById("gotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}