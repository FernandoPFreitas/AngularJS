function includeJS(scriptPath){
	var body  = document.getElementsByTagName('head')[0];
	js = document.createElement('script');
	js.type = "text/javascript"
	js.src = scriptPath;
	js.onload = function () {
		//onload do script
	};
	body.appendChild(js);
}

function includeCSS(scriptPath){
	var body  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = scriptPath;
	body.appendChild(link);
}
  
includeJS("http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js");
includeJS("http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js");
includeJS("http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js");
includeJS("http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js");

//Angular Material Library
includeCSS("http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css");
includeJS("http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js");


