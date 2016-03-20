$(function(){
		var a='',row=20;
		var colors=['cheng','pink','yellow']
		for(var i=0;i<Math.pow(row+2,2);i++){
				a+="<div></div>"
		}

		$('.scan').html(a).find('div').addClass('box').addClass(function(i){
			return colors[i%3]
		}).end()
		.find('div:lt(22)').removeClass().end()
		.find('div:gt(461)').removeClass().end()
		.find('div:nth-child(22n+1)').removeClass().end()
		.find('div:nth-child(22n)').removeClass().end()
		.find('div')
		.each(function(i){
			$(this).data('index',i)  //设置属性 但看不见   this当前dom对象
		}).end()
		.find('.box')
		.each(function(){
			if(Math.random()>0.9){
				$(this).data('islei',true)
			}
		})
		
		/*$('.scan div').attr('lei',function(){
			if(Math.random()>0.9){
				return 'true';
			}
		})*/
		.click(function(){
			if($(this).data('islei')){
				$('.lei').css('display','block')
				$('.scan .box').removeClass().addClass('box').addClass(function(i){
					if($('.scan .box').eq(i).data('islei')){
						return 'red';
					}
				}).css({'animation-delay':Math.random()*0.5+'s',})
			}else{
				var num=0;
				var cur=$(this).data('index');
				if($('.scan div').eq(cur-1).data('islei')){num++};
				if($('.scan div').eq(cur+1).data('islei')){num++};
				if($('.scan div').eq(cur-22).data('islei')){num++};
				if($('.scan div').eq(cur-21).data('islei')){num++};
				if($('.scan div').eq(cur-23).data('islei')){num++};
				if($('.scan div').eq(cur+23).data('islei')){num++};
				if($('.scan div').eq(cur+22).data('islei')){num++};
				if($('.scan div').eq(cur+21).data('islei')){num++};
				$(this).text(num);
				$(this).css({background:'#fff',color:'#000',fontSize:'20px',fontWeight:'bold'});
			}
		})
	})