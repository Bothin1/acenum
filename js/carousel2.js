$(document).ready(function(){ 
	var i=0;
  
    var str2 = '#mid-carousel';//第二个轮播图   
    var width2 = String($(str2+'>.el-carousel__container>.el-carousel__item').width()*($(str2+'>.el-carousel__container>.el-carousel__item').length+1));
    $(str2+">.el-carousel__container").css("width",width2);
    //调用showTime()函数（轮播函数）
    showTime(str2);
   
	//创建一个showTime函数
	function showTime(str){
		var Len = $(str+'>.el-carousel__container>.el-carousel__item').length;
		var clone=$(str+'>.el-carousel__container>.el-carousel__item').eq(0).clone();
		$(str+'>.el-carousel__container').append(clone);
		
		for(var j=0;j<Len;j++){
			$(str+">.num").append("<li></li>");
		}
		$(str+">.num li").first().addClass('on');
		
		//定时器
	    var timer = move(str);
		$(str+' button').eq(0).hide();
		$(str+' button').eq(1).hide();
		//鼠标划入圆点
		$(str+">.num li").hover(function(){
			clearInterval(timer);
			var index=$(this).index();
			i=index;
			$(str+">.el-carousel__container").stop().animate({left:-index*$(str).width()},500);
			$(this).addClass('on').siblings().removeClass('on');
		})
		
	    //对定时器的操作
		$(str).hover(function(){
			clearInterval(timer);
			$(str+' button').eq(0).fadeIn(300);
			$(str+' button').eq(1).fadeIn(300);
		},function(){
			timer = move(str);
			$(str+' button').eq(0).fadeOut(300);
			$(str+' button').eq(1).fadeOut(300);
		})
	
	
		/*向左按钮*/
		$(str+' button').eq(0).click(function(){
			i--;
			Show(str);
		})
		/*向右按钮*/
		$(str+' button').eq(1).click(function(){
			i++;
			Show(str);
		})
	}
	 
	 
	function move(str){
	 	timer = setInterval(function(){
	    //调用一个Show()函数
	        i++;
	        Show(str);
	    },2000);
	    return timer;
	 }
	 
	//创建一个Show函数
	function Show(str){
		var Len = $(str+'>.el-carousel__container>.el-carousel__item').length;
	   
		if(i==Len){
			$(str+'>.el-carousel__container').css({left:0});
			i=1;
		}
		if(i==-1){
			$(str+'>.el-carousel__container').css({left:-(Len-1)*$(str).width()});
			i=Len-2;
		}
		$(str+'>.el-carousel__container').stop().animate({left:-i*$(str).width()},500);
		
		if(i==Len-1){
			$(str+" .num li").eq(0).addClass('on').siblings().removeClass('on');
		}else{
			$(str+" .num li").eq(i).addClass('on').siblings().removeClass('on');
		}
	}
	  
});