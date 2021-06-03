function windowOnload () {
    var searchButtonLink = document.getElementById("search-button-link");
    var searchBox = document.getElementById("search-box");
    var searchButton = document.getElementById("search-button");
    
    searchButtonLink.removeAttribute("href");
    searchBox.style.display = "block";
    
    function attemptSearch (event) {
        if (searchBox.value.length > 0) {
            var query = encodeURIComponent(searchBox.value);
            
            // do something here lol
        }
    }
    
    searchButton.addEventListener("click", attemptSearch);
    searchBox.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            attemptSearch();
        }
    });
}

window.onload = windowOnload;