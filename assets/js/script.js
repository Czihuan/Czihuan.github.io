$( document ).ready(function() {

                $("#about_scroll").fadeOut();
                $("#skill_scroll").fadeOut();
                $("#contact_scroll").fadeOut();
                setTimeout(function () {
                    $('body').addClass('loaded');
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                },2000);


                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#skill").click(function(){
                    $("#index").fadeOut();
                    $("#skill_scroll").fadeIn();
                    $('#skill_left').addClass('animated slideInLeft');
                    $('#skill_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});