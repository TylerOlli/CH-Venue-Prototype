function change(){

	if($(window).width() <= 768){
  		$('.div2').html($('.div1').html());
		}
	else if (width > 769) {
   		$('.div1').html($('.div2').html());
 		}

}

setInterval(change, 10);
