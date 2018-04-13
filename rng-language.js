var langIndex;
var links = []


fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=parse&page=List_of_programming_languages&prop=links")
  .then(function(resp) {
    return resp.json()
  }).then(function(data) {
      links = data.parse.links
  })

var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  langIndex = Math.floor(Math.random() * links.length)
  console.log(links[langIndex])
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);
};

document.querySelectorAll('button')[0].addEventListener('click',loading);
