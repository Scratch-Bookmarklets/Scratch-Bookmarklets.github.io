//Broken - will turn the whole page into the BBCode. Will be fixed before being added

let url = prompt("Url"); 
let url_text = prompt("Text to link"); 
let textarea = document.getElementsByClassName("markup"); 
textarea[0].value = `[url=${url}]${url_text}[/url]`;
