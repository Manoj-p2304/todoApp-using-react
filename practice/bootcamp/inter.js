const joke = document.querySelector("#joke")
let uri = "https://icanhazdadjoke.com/";
let xhr = new XMLHttpRequest();

xhr.addEventListener("load", function (){
    joke.innerHTML = `<h1>${this.responseText}</h1>`  ; 
})

xhr.open('GET', uri)
xhr.setRequestHeader('Accept', 'text/plain')
xhr.send();


