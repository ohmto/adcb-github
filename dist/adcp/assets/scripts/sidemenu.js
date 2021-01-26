jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
			sidemenuBg 	 = $('.site-wrap').find('.sidemenu-bg');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
				$('.site-wrap').find('.sidemenu-bg').fadeToggle();
			});

		});

		$(document).on('click', function(event){
			(!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible') && sidemenuBg.fadeOut()  ;
		});
	}
});