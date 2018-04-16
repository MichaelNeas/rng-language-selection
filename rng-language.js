var langIndex;
var links = []
var lang;

fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=parse&page=List_of_programming_languages&prop=links")
  .then(function(resp) {
    return resp.json()
  }).then(function(data) {
      links = data.parse.links
  })

var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  langIndex = Math.floor(Math.random() * links.length);
  lang = links[langIndex]['*'];
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
    document.getElementById('langy').innerHTML = `<a target="_blank" href=”http://www.google.com/search?q=${lang}”>${lang}</a>`;
  },1000);
};

document.querySelectorAll('button')[0].addEventListener('click',loading);
