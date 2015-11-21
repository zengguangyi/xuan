/*媒体查询 width低于800px 隐藏字样*/
$(function(){
	var mq=window.matchMedia("(min-width: 801px)");
	if(mq.matches){
		// alert(window.innerWidth);
	}else{
		
		$('#btu-menu').click(function(){
			var vis=document.getElementById('LINK').style.visibility;
			if(vis == "visible"){
				$('.link').off().css("visibility","hidden");
			}else{
				$('.link').off().css("visibility","visible");
			}
		});
		
	}
})

/*媒体查询 width低于480px 调整图片width百分比*/
$(function(){
	var mx=window.matchMedia("(min-width: 600px)");
	if(mx.matches){
		// alert(window.innerWidth);
	}else{
		$('.grid-item').css("width","50%");	
	}
})

/*点击#dropdown触发页面滚动 方法*/
function click_scroll(){//得到pos这个div层的offset，包含两个值，top和left
	var scroll_offset = $("#pos").offset(); 
	$("body,html").animate({
				scrollTop:scroll_offset.top},1000);  //让body的scrollTop等于pos的top，就实现了滚动
}

// function shooPic(whichpic){
// 	var source = whichpic.getAttribute("href");
// 	var placeholder = document.getElementById("placeholder");
// 	placeholder.setAttribute("src",source);
// 	var text = whichpic.getAttribute("title");
// 	var description = document.getElementById("description");
// 	description.firstChild.nodeValue = text;
// }

/*#dropdown鼠标悬浮事件*/
$(document).ready(function(){
	$("#dropdown").mouseover(function(){
		var drop=document.getElementById("dropdown");
		drop.setAttribute("class","fa fa-chevron-down fa-5x");
	});
	$("#dropdown").mouseout(function(){
		var drop=document.getElementById("dropdown");
		drop.setAttribute("class","fa fa-chevron-down fa-4x");
	});
	$("#dropdown").click(function(){
		var drop=document.getElementById("dropdown");
		drop.setAttribute("class","fa fa-chevron-down fa-4x");
	});
});

/*div抖动*/
$(function(){
	$('#a-vedio,#a-more').jrumble({
		x: 1,
		y: 8,
		rotation: 0
	});
	var demoTimeout;
	$(window).scroll(function(){
		$this = $("#a-vedio,#a-more");
		clearTimeout(demoTimeout);
		$this.trigger('startRumble');
		demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 250)
	});

	$('#dropdown').jrumble({
		x: 0,
		y: 15,
		rotation: 0,
		speed:150
	});
	$('#dropdown').trigger('startRumble');
	$('#dropdown').hover(function(){
		$('#dropdown').trigger('stopRumble');
	},function(){
		$(this).trigger('startRumble');
	});
})

/*jelly动画*/
$(document).ready(function (){
	var count=0;
	$('#jelly-right-eyebrows,#jelly-left-eyebrows').jrumble();
	$('#jelly-right-eyebrows,#jelly-left-eyebrows').trigger('startRumble');


	$("#jelly").mouseover(function(){

		$('#jelly').jrumble({
			x: 3,
			y: 8,
			rotation: 0
		});
		var demoTimeout;
		$this = $("#jelly");
		clearTimeout(demoTimeout);
		$this.trigger('startRumble');
		demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 250)

		count+=1;

		if(count == 1){
			$("#jelly-mouth").show();
		}
		// if(count == 4){
		// 	$("#jelly-left-eye").show();
		// }
		// if(count == 6){
		// 	$("#jelly-right-eye").show();
		// }
		if(count == 2){	
			$('#jelly-mouth').jrumble({
				x: 1,
				y: 8,
				rotation: 0
			});
			var demoTimeout;
			$this = $("#jelly-mouth");
			clearTimeout(demoTimeout);
			$this.trigger('startRumble');
			demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 250)
		}

		if(count == 5)count=0;

	})
})

$(document).ready(function (){
	var count=0;
	$("#jelly").click(function(){

		$('#jelly').jrumble({
			x: 3,
			y: 8,
			rotation: 0
		});
		var demoTimeout;
		$this = $("#jelly");
		clearTimeout(demoTimeout);
		$this.trigger('startRumble');
		demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 250)

		count+=1;

		if(count == 1){
			$("#jelly-mouth").show();
		}
		// if(count == 4){
		// 	$("#jelly-left-eye").show();
		// }
		// if(count == 6){
		// 	$("#jelly-right-eye").show();
		// }
		if(count == 2){	
			$('#jelly-mouth').jrumble({
				x: 1,
				y: 8,
				rotation: 0
			});
			var demoTimeout;
			$this = $("#jelly-mouth");
			clearTimeout(demoTimeout);
			$this.trigger('startRumble');
			demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 250)
		}

		if(count == 5)count=0;

	})
})

/*picPage页瀑布流*/
$(function(){
	// var $grid = $('.grid').imagesLoaded( function() {

	// 	$grid.masonry({
	// 		itemSelector: '.grid-item',
	// 		columnWidth: '.grid-item',
	// 		percentPosition: true
	// 	});
	// });

var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-item',
	percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});


});