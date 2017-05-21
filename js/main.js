var subpage_style = {
	top: '0px',
	bottom: '51px'
}

mui.plusReady(function() {
	mui.init({
		swipeBack: false
	});

	//选项卡点击事件
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
		var url = this.getAttribute('href');
		if(url == "") {
			return;
		}

		var pagetype = this.getAttribute('pagetype');
		if(pagetype == "main") {
			openwindow(url, subpage_style);
		} else {
			openwindow(url);
		}
	});
	
	$("#startscan").bind("tap",function(){
		openwindow("../public/scanerweima.html")
	});
});

function openwindow(url, styles) {
	mui.openWindow({
		url: url,
		createNew: true,
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true
		},
		styles: styles
	});
}