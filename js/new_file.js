$(function(){
	var sidebar=$('.sidebar');
	var mask=$('.mask');
	var sidebar_trigger=$('#sidebar_trigger');
	var backButton=$('.back-to-top');
	
	function showSideBar()
	{
		mask.fadeIn();
		sidebar.css('right','0');
	}
	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
	
	backButton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},600)
	})
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=$(window).height()/4)
		{
			backButton.fadeIn();
		}else{
			backButton.fadeOut();
		}
	})
	
	$(window).trigger('scroll');
})