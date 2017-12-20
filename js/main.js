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




$(function(){
    $('.dots-button').click(function() {
        $(".event-div").addClass("col-md-4 col-sm-6");
        $(".youtube iframe").remove();
    });
});

$(function(){
    $('.hamburger-button').click(function() {
    $(".event-div").removeClass("col-md-4 col-sm-6");

    $('.youtube1').prepend('<iframe class="myiFrame myIframe1" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe1').attr('src', url1)

	$('.youtube2').prepend('<iframe class="myiFrame myIframe2" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe2').attr('src', url2)

	$('.youtube3').prepend('<iframe class="myiFrame myIframe3" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe3').attr('src', url3)

	$('.youtube4').prepend('<iframe class="myiFrame myIframe4" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe4').attr('src', url4)

	$('.youtube5').prepend('<iframe class="myiFrame myIframe5" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe5').attr('src', url5)

	$('.youtube6').prepend('<iframe class="myiFrame myIframe6" width="560" height="315" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	$('.myIframe6').attr('src', url6)


    });
});