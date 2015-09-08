$(document).ready(function(){
  // $.ajax({
  //   url
  // });
  var login = $("#login"),
    about = $("#about"),
    register = $("#register");

  login.click(function(){
    register.fadeOut(500);
    about.fadeOut(500);
    login.off('click');
    $(".logo").animate({
      marginTop:"3em"
    },700);

    $.ajax({
      url:"/login.html",
      method: "GET",
      success: function(text){
        console.log("nice");
        $('.content').html(text).parent().removeClass("hidden");

      }
    })
  });

  register.click(function(){
    login.fadeOut(500);
    about.fadeOut(500);
    register.parent().animate({
    left:"-=120"
    },true,
    function(){
      register.off('click');
    }).promise().done(function(){
      $(".logo").animate({
      marginTop:"3em"
    },700);
    });

    $.ajax({
      url:"/register.html",
      method: "GET",
      success: function(text){
        console.log("nice");
        $('.content').html(text).parent().removeClass("hidden");

      }
    })
     
      
       

  });

  about.click(function(){
    login.fadeOut(500);
    register.fadeOut(500);
    about.parent().animate({
    left:"+=120"
    },true,
    function(){
      about.off('click');
    }).promise().done(function(){
      $(".logo").animate({
      marginTop:"3em"
    },700);
    });

    $.ajax({
      url:"/about.html",
      method: "GET",
      success: function(text){
        console.log("nice");
        $('.content').html(text).parent().removeClass("hidden");

      }
    })

  });

});