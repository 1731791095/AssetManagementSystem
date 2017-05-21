var subpage_style = {
	top: '0px',
	bottom: '51px'
}

mui.plusReady(function() {
	mui.init({
		swipeBack: false
	});

	$("#startscan").bind("tap", function() {
		openwindow("../public/scanerweima.html")
	});
});

function openwindow(url, pageid, styles) {
	mui.openWindow({
		url: url,
		id: pageid,
		createNew: false,
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: true
		},
		styles: styles
	});
}