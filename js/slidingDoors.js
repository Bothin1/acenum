window.onload = function() {
	var box = document.getElementById('sliding_box');

	var imgs = box.getElementsByTagName('img');

	var imgWidth = imgs[0].offsetWidth;	//获取图片宽度

	var exposeWidth = 100;

	var boxwidth = imgWidth + (imgs.length - 1) * exposeWidth;

	box.style.width = boxwidth + 'px';

		//设置每道门的初始位置
	function setImgsPos() {
		for (var i = 1, len = imgs.length; i < len; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	setImgsPos();

	//计算每道门打开时应移动的距离
	var translate = imgWidth - exposeWidth;

	//为每道门绑定事件
	for (var i = 0, len = imgs.length; i < len; i++) {
		//使用立即调用的函数表答式，为了获得不同的i值
		(function(i) {
			imgs[i].onmouseover = function() {
				//先将每道门复位
				setImgsPos();
				//打开门
				for (var j = 1; j <= i; j++) {
					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
				}
			};
		})(i);
	}
};