function responsive(){
	//masonry & imagesLoaded
	var $container = $('.home .mainInner, .blogPosts, .contentsPosts, .eventPosts');
	$container.imagesLoaded(function(){
		$container.masonry({
			percentPosition: true,
			itemSelector: 'article'
		});
	});
	
	var pc_w = window.innerWidth;
	var sp_w = 600;
	if (pc_w <= sp_w){
		//SP
		$('#tagList h3 a').addClass('active');
	}else{
		//PC
		$('#tagList h3 a').removeClass('active');
	}
	
}

$(function(){
	
	responsive();

	//pagetop
	var topBtn = $('#pagetop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.stop().animate({'margin-bottom':'110px'},'fast');
		} else {
			topBtn.stop().animate({'margin-bottom':'0'},'fast');
		}
	});
	$('#pagetop img').hover(
		function(){
			$(this).stop().animate({'margin-bottom':'35px'},'fast');
		},
		function(){
			$(this).stop().animate({'margin-bottom':'0'},'fast');
		}
	);
	$('#pagetop').click(function() {
		$('body,html').animate({scrollTop:0},1000,"easieEaseInOutCubic");
		$(this).children("p").stop().animate(
			{'margin-bottom':'1500px'},
			{
				duration:1300,
				easing: "easieEaseInCubic",
				complete:function(){
					$(this).css("margin-bottom","0");
				}
			}
		);
		return false;
	});
    
    //smoothScroll
    $('.qa__navItemLink').click(function() {
		//var headerH = $("header").outerHeight();
		var myLink = $(this).attr("href");
		var targetY = $(myLink).offset().top;
		//$('body,html').animate({scrollTop:targetY-headerH},500);
        $('body,html').animate({scrollTop:targetY},500);
		return false;
	});
    
	
	//btnFadeHover
	$('article a img').hover(
		function(){
			$(this).stop().animate({'opacity':'0.5'},'fast');
		},
		function(){
			$(this).stop().animate({'opacity':'1'},'fast');
		}
	);
	
	//tag-accordion
	$('#tagList h3 a').click(function() {
    	var $this = $(this);
    	if ($this.hasClass('active')) {
      		$this.removeClass('active');
    	}else{
			$this.addClass('active');
    	}
		$this.parent().next('.contents').slideToggle(500);//�@�J���X�s�[�h
		return false;
	});
	/*
	$('.qaBtn').click(function() {
		$('.qa_contents').slideToggle(500);
		return false;
	});
	*/
	
	//blockquote icon
	$('blockquote').prepend('<i class="fa fa-quote-left"></i>');
	$('blockquote').append('<i class="fa fa-quote-right"></i>');
	
});

$(window).resize(function(){
	responsive();
});
	
$(window).load(function(){
	responsive();
	$('.home main').animate({'opacity':'1'},'slow');
});

/*Firefox*/
$(function(){
	var $container = $('.home .mainInner');
	$container.masonry({
		percentPosition: true,
		itemSelector: 'article'
	});
});
