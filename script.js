//your JS code here. If required.
let displayText = "You are using "+navigator.appName+"version "+navigator.appVersion
console.log(displayText)
const body = document.getElementsByTagName("body")[0];
const div = document.createElement("div")
div.innerText=displayText;
div.id="browser-info";
body.appendChild(div);