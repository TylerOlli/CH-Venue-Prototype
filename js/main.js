function change(){

	if($(window).width() <= 768){
  		$('.small-div-1').html($('.large-div-1').html());
  		$('.small-div-2').html($('.large-div-2').html());
  		$('.small-div-3').html($('.large-div-3').html());
  		$('.small-div-4').html($('.large-div-4').html());
  		$('.small-div-5').html($('.large-div-5').html());
  		$('.small-div-6').html($('.large-div-6').html());
		}
	else if (width > 769) {
   		$('.large-div-1').html($('.small-div-1').html());
   		$('.large-div-2').html($('.small-div-2').html());
   		$('.large-div-3').html($('.small-div-3').html());
   		$('.large-div-4').html($('.small-div-4').html());
   		$('.large-div-5').html($('.small-div-5').html());
   		$('.large-div-6').html($('.small-div-').html());
 		}

}

setInterval(change, 10);

$(function(){
    $('.dots-button').click(function() {
        $(".event-div").addClass("col-md-4 col-sm-6");
    });
});

$(function(){
    $('.hamburger-button').click(function() {
        $(".event-div").removeClass("col-md-4 col-sm-6");
    });
});