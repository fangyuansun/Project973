$(document).ready(function() {
	$('.sort_sel').on('click',function(){
			$('#li_pz').slideToggle();
			if($('.sort_sel img').attr("src")=="static/images/iconfont-chevron-up.png"){
				$('.sort_sel img').attr('src','static/images/iconfont-chevron-down.png');
			}else{
				$('.sort_sel img').attr('src','static/images/iconfont-chevron-up.png');
			}
			
			$(document).click(function(event){
				$('#li_pz').fadeOut();
				$('.sort_sel img').attr('src','static/images/iconfont-chevron-up.png');
			});
		});
	//创建菜单栏展开时点击其他地方隐藏菜单
	$('.sort_sel').click(function(event){
		event.stopPropagation();
		});
	$('#li_pz').click(function(event){
		event.stopPropagation();
		});
		
	//编辑TITLE
	$('.edit_a').on('click',function(){
			var itemid = $(this).parent().parent().next().attr('id');
			if($('#'+itemid+'').children().length==0){
				//创建详情
				$('#'+itemid+'').load('load.html');
			}

			if($('#'+itemid+'').is(':visible')&&$('.opentr').attr('id')!=itemid){
					$('.opentr').hide();
					$('.opentr').removeClass('opentr');
					$('#'+itemid+'').addClass('opentr');
				}
			$('#'+itemid+'').slideToggle('slow');
			
		});
	//删除TITLE
	$('.del_a').on('click',function(){
			$(this).parent().parent().parent().remove();
		});
	//移动更换背景色
	$('.ajax_tr').mousemove(function(){
			$(this).css('background','#ddd');
		});
	$('.ajax_tr').mouseout(function(){
			$(this).css('background','#fff');
		});	
	
	//新建话题
	$('.addtil a').on('click',function(){
		$('.add_news').slideToggle('slow');
		});
	$('.addnews_th a').on('click',function(){
		$('.add_news').slideToggle('slow');
	});
	$('.addnews_info a').on('click',function(){
		$('.add_news').slideToggle('slow');
		addtr();
		});
});
//加载标题项内容
function loadsel(itemid,itemname){
		if($('.selected')){
				$('.selected').removeClass('selected');
			}
		$('#'+itemid+'').addClass('selected');
		$('.content_ajax ul').empty();
		$('.sort_sel span').html(itemname);
		//获取数据循环出内容
		createli(itemid);
		$('.edit_a').on('click',function(){
			var aid = $(this).parent().parent().next().attr('id');
			if($('#'+aid+'').children().length==0){
				//创建详情
				$('#'+aid+'').load('load.html');
			}
			$('#'+aid+'').slideToggle('slow');
			if($('#'+aid+'').is(':visible')&&$('.opentr').attr('id')!=aid){
					$('.opentr').hide();
					$('.opentr').removeClass('opentr');
					$('#'+aid+'').addClass('opentr');
				}
		});
		//删除TITLE
		$('.del_a').on('click',function(){
				$(this).parent().parent().parent().remove();
			});
		//移动更换背景色
		$('.ajax_tr').mousemove(function(){
				$(this).css('background','#ddd');
			});
		$('.ajax_tr').mouseout(function(){
				$(this).css('background','#fff');
			});	
	}
	
	
	function createli(itemid){
		$('.content_ajax ul').hide();
		for(var i=0;i<10;i++){
			var $li = $('<li></li>');
			var $tr1 = $('<div></div>');
			$tr1.attr('class','ajax_tr');
			var $tr2 = $('<div></div>');
			$tr2.attr('class','ajax_item_content');
			$tr2.attr('id','row'+itemid+i+'');
	
			var $td1 = $('<div></div>');
			$td1.attr('class','td_title');
			$td1.html('TITLE'+itemid+'-'+i);
			var $td2 = $('<div></div>');
			$td2.attr('class','td_upddate');
			$td2.html('最后修改于2014/7/16');
			var $td3 = $('<div></div>');
			$td3.attr('class','td_func');
			$td3.html('<a class="edit_a">编辑</a> <a class="del_a">删除</a>');
			
			$tr1.append($td1);
			$tr1.append($td2);
			$tr1.append($td3);
			$li.append($tr1);
			$li.append($tr2);
			
			$('.content_ajax ul').append($li);
			}
		$('.content_ajax ul').slideToggle('slow');
		}
		
	function addtr(){
			var itemid =$('.addnews_info input').val();//模拟的id 创建的id需要异步从后面获取.
			var $li = $('<li></li>');
			var $tr1 = $('<div></div>');
			$tr1.attr('class','ajax_tr');
			var $tr2 = $('<div></div>');
			$tr2.attr('class','ajax_item_content');
			$tr2.attr('id','row'+itemid+'');
			$tr2.css('boder','1px dashed #999');
	
			var $td1 = $('<div></div>');
			$td1.attr('class','td_title');
			$td1.html('TITLE'+itemid+'');
			var $td2 = $('<div></div>');
			$td2.attr('class','td_upddate');
			$td2.html('最后修改于2014/7/16');
			var $td3 = $('<div></div>');
			$td3.attr('class','td_func');
			$td3.html('<a class="edit_a">编辑</a> <a class="del_a">删除</a>');
			
			$tr1.append($td1);
			$tr1.append($td2);
			$tr1.append($td3);
			$li.append($tr1);
			$li.append($tr2);
			$('.content_ajax ul').prepend($li);
			//给添加项添加事件
			$('#row'+itemid+'').prev().children('div').children('.edit_a').on('click',function(){
				var aid = $(this).parent().parent().next().attr('id');
				if($('#'+aid+'').children().length==0){
					//创建详情
					$('#'+aid+'').load('load.html');
				}
				$('#'+aid+'').slideToggle('slow');
				if($('#'+aid+'').is(':visible')&&$('.opentr').attr('id')!=aid){
					$('.opentr').hide();
					$('.opentr').removeClass('opentr');
					$('#'+aid+'').addClass('opentr');
				}
			});
			//删除TITLE
			$('.del_a').removeAttr('onclick');
			$('.del_a').on('click',function(){
					$(this).parent().parent().parent().remove();
				});
			//移动更换背景色
			$('.ajax_tr').removeAttr('onmousemove');
			$('.ajax_tr').removeAttr('onmouseout');
			$('.ajax_tr').mousemove(function(){
					$(this).css('background','#ddd');
				});
			$('.ajax_tr').mouseout(function(){
					$(this).css('background','#fff');
				});	
		}