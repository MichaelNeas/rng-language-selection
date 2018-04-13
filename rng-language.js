fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=parse&page=List_of_programming_languages&prop=links").then(function(resp) {
    console.log(resp);
    return resp.json()
}).then(function(data) {
    console.log(data);
})
