function change(){

	if($(window).width() <= 700){
  		$('#div2').html($('#div1').html());
		}
	else if (width > 770) {
   		$('#div1').html($('#div2').html());
 		}

}

setInterval(change, 10);

//$(window).resize(function() { //Fires when window is resized
//    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//    if(width <= 770) {
 //       $('#div2').html($('#div1').html());
		
 //   }

 //  else if (width > 770) {
  //  	$('#div1').html($('#div2').html());
 //   }
//})
