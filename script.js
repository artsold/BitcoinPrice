
 	var currency = "EUR";
	var btn = document.querySelector("#button");
	var price = document.querySelector("#price");

	window.addEventListener("load", function() {
		myFunction();
	});

	btn.addEventListener("click", function(){
		myFunction();
	});

	function myFunction() {
		var XHR = new XMLHttpRequest();
		XHR.onreadystatechange = function() {
			if(XHR.readyState == 4 && XHR.status == 200) {
				var data = JSON.parse(XHR.responseText);
				price.innerHTML = data.bpi[currency].rate + ' ' + currency;
				console.log(data.bpi[currency].rate);
			}
		};
		var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
		XHR.open("GET", url);
		XHR.send();
	}
