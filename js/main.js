var subStyles = {
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

function openwindow(url, styles) {
	var webviewid = GetWebviewId(url);
	mui.openWindow({
		url: url,
		id: webviewid,
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

function GetWebviewId(url) {
	var startIndex = url.indexOf("/");
	var webviewId = url.substring(startIndex + 1);
	return webviewId;
}