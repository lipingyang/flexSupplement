//	     记住密码
        $(".auto-box").click(function(){
        	$(".remember").toggle();
        })
	
		//      新闻轮播
		$(".slideBox").slide({
			mainCell: ".bd ul",
			effect: "leftLoop",
			autoPlay: true,
			interTime: 2500,
		});
		$(".main-center-title span").click(function() {
			$(this).siblings().removeClass("blue-txt");
			$(this).siblings().addClass("white-txt");
			$(this).addClass("blue-txt");
		});

		var curIndex = 0; //当前index
		//  alert(imgLen);
		// 定时器自动变换2.5秒每次
		var autoChange = setInterval(function() {
			if(curIndex < $(".imgList li").length - 1) {
				curIndex++;
			} else {
				curIndex = 0;
			}
			//调用变换处理函数
			changeTo(curIndex);
		}, 2000);

		$(".indexList").find("li").each(function(item) {
			$(this).hover(function() {
				clearInterval(autoChange);
				changeTo(item);
				curIndex = item;
			}, function() {
				autoChange = setInterval(function() {
					if(curIndex < $(".imgList li").length - 1) {
						curIndex++;
					} else {
						curIndex = 0;
					}
					//调用变换处理函数
					changeTo(curIndex);
				}, 2000);
			});
		});

		function changeTo(num) {
			if(num == 1) {
				$('.second').css('display', 'block');
			}
			$(".imgList").find("li").removeClass("imgOn").hide().eq(num).show().addClass("imgOn");
			$(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
		}
		