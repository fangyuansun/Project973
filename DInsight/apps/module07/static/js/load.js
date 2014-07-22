//点击创建关键字
$('.add_gjz a').on('click',function(){
			$(this).hide();
			$('.add_gjz input').show();
			$('.add_gjz input').focus();
		});
//失去焦点确认创建
$('.add_gjz input').blur(function(){
		
		if ($(this).val().length == 0){
			$('.add_gjz a').show();
			$('.add_gjz input').hide();
		}else{
			var $span = $('<span>'+$(this).val()+'<a><img src="static/images/iconfont-shanchu.png"></a></span>');
			$(this).parent().prev().append($span);
			$('.add_gjz a').show();
			$('.add_gjz input').val("");
			$('.add_gjz input').hide();
			$('.content_gjz a').unbind('click');
			$('.content_gjz a').bind('click',function(){
				$(this).parent().remove();
			});
		}
	});
//标题失去焦点确认更改
$('.tr_til').next().blur(function(){
		if ($(this).val().length == 0){
			$(this).val($('.opentr').prev().children(':first').html());
		}else{
			$('.opentr').prev().children(':first').html($(this).val());
		}
	});
//删除关键字	
$('.content_gjz a').bind('click',function(){
		$(this).parent().remove();
	});
$('.timearea').change(function(){
		if($(this).is(':checked')){
				$('.text_right span').css('color','#005580');
			}else{
				$('.text_right span').css('color','#ccc');
				}
		
	});
$('.submit_input').on('click',function(){
	$(this).parent().parent().parent().slideToggle('slow');
	});