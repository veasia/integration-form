var endpoint = 'https://api.veinteractive.com/IntegrationsApiSandbox/Install';
var key = 'Request your own key at developers.veinteractive.com';	

function submit() {
	var payload = {
		Domain: document.getElementById('domain'),
		Email:document.getElementById('email'),
	 	Country:document.getElementById('country'),
	 	Currency:document.getElementById('currency'),
	 	Language:document.getElementById('language'),
	 	Phone:document.getElementById('phone'),
		ECommerce:document.getElementById('agency'),
		ECommercePlatform:document.getElementById('eccomerce'),
		Version:document.getElementById('version'),
		Merchant:document.getElementById('merchant'),
	};

   	var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(payload);

	if(xhr.statusCode != 200) {
		window.location = "./error.html";
	} else {
		//Save request output to fill the success fields
		window.location = "./complete.html";
	}
}