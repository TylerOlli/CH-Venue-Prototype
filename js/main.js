function change(){

	if($(window).width() <= 768){
  		$('.small-div-1').html($('.large-div-1').html());
  		$('.small-div-2').html($('.large-div-2').html());
		}
	else if (width > 769) {
   		$('.large-div-1').html($('.small-div-1').html());
   		$('.large-div-2').html($('.small-div-2').html());
 		}

}

setInterval(change, 10);
