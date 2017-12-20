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
   		$('.large-div-6').html($('.small-div-6').html());
 		}

}

function change1(){

	if($(window).width() <= 2000){
  		$('.small-div-1').html($('.large-div-1').html());
  		$('.small-div-2').html($('.large-div-2').html());
  		$('.small-div-3').html($('.large-div-3').html());
  		$('.small-div-4').html($('.large-div-4').html());
  		$('.small-div-5').html($('.large-div-5').html());
  		$('.small-div-6').html($('.large-div-6').html());
		}
}

setInterval(change, 10);

var url = "https://www.youtube.com/embed/pZGNblFCvp0"


$(function(){
    $('.dots-button').click(function() {
        $(".event-div").addClass("col-md-4 col-sm-6");
        $(".youtube iframe").remove();
    });
});

$(function(){
    $('.hamburger-button').click(function() {
        $(".event-div").removeClass("col-md-4 col-sm-6");
        $('.youtube').prepend('<iframe id="myIframe" width="560" height="315" style="float: right; top:0;" src="https://www.youtube.com/embed/pZGNblFCvp0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
 		$('#myIframe').attr('src', url)
    });
});