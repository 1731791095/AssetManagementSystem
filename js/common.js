var getNow = function() {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth() + 1; //一月是0，一定要注意
				var yyyy = today.getFullYear();
				var hour = today.getHours();
				var minutes = today.getMinutes();
				var seconds = today.getSeconds();
				if(dd < 10) {
					dd = '0' + dd
				}
				if(mm < 10) {
					mm = '0' + mm
				}
				var today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ': ' + minutes;
				return today;
			}