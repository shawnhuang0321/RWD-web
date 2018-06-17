// JavaScript Document
$(document).ready(function(){
	$('.tea-btn').click(function(){
		$('.tea').show();
		$('.coffee').hide();
		$('.ice').hide();
	});
	$('.coffee-btn').click(function(){
		$('.coffee').show();
		$('.tea').hide();
		$('.ice').hide();
	});
	$('.ice-btn').click(function(){
		$('.ice').show();
		$('.tea').hide();
		$('.coffee').hide();
	});
	
//	top button
	$('.top,.logo').click(function(){
		$('html,body').animate({scrollTop:0},1000,'easeOutBounce');
		return false;
	});
	
//	文件捲動向下，顯示top鈕，向上則隱藏
	$(document).scroll(function(){
		var scrollnum=$(window).scrollTop();
		if(scrollnum>200){
		   $('.top').stop().animate({opacity:'1'},500);
		}else{
		   $('.top').stop().animate({opacity:'0'},500);
		   }
	});
	
//	頁內超連結
	$('.about-btn').click(function(){
		$('html,body').animate({scrollTop:$('#about').offset().top-100},1000,'easeOutBack');
		return false;
	});
	
	$('.menu1-btn').click(function(){
		$('html,body').animate({scrollTop:$('#menu1').offset().top-100},1000,'easeOutBack');
		return false;
	});
	
	$('.menu2-btn').click(function(){
		$('html,body').animate({scrollTop:$('#menu2').offset().top-100},1000,'easeOutBack');
		return false;
	});
	
	$('.contact-btn').click(function(){
		$('html,body').animate({scrollTop:$('#map').offset().top-100},1000,'easeOutQuint');
		return false;
	});
});