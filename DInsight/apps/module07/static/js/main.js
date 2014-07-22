$(document).ready(function() {
    $('.mdl_news').on('click',function(){
		 $(this).addClass('mdl_selected').siblings().removeClass('mdl_selected');
		 if($(this).html()=='百度新闻'){
			 	draw();
			 }
		});
	
	$('.but_a').on('click',function(){
			$('#index_html').hide();
			$('#right_html').hide();
			$('#right_html').slideToggle('slow');
			if($('.wrapmenu_pz').children().length==0){
				createtree();
				}
			
		});
	
});

	function reloadnews(date){
		$('.el_left').empty();
		$('.el_right').empty();
		$('.el_left').hide();
		$('.el_right').hide();
		for(var i=1;i<6;i++){
			var $a = $('<a><span  class="news_info">新闻'+i+'------------ </span><span class="news_time">'+date+' 15:55</span></a>');
			var $aelse = $('<a><span class="news_info">其它'+i+'------------ </span><span class="news_time">'+date+' 15:55</span></a>');
			$('.el_left').append($a);
			$('.el_right').append($aelse);
		}
		$('.el_left').append('<a class="more">查看更多>></a>');
		$('.el_right').append('<a class="more">查看更多>></a>');
		
		$('.el_left').slideToggle();
		$('.el_right').slideToggle();
	}