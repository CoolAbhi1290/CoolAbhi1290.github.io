function windowOnload() {
    var searchButtonLink = document.getElementById("search-button-link");
    var searchBox = document.getElementById("search-box");
    var searchButton = document.getElementById("search-button");

    searchButtonLink.removeAttribute("href");
    searchBox.style.display = "block";

    function attemptSearch(event) {
        if (searchBox.value.length > 0) {
            var query = encodeURIComponent(searchBox.value);
            if (searchBox.offsetWidth > 10) {
                alert(query);
            }
        }
    }

    searchButton.addEventListener("click", attemptSearch);
    searchBox.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            attemptSearch();
        }
    });

    if (window.parent) {
        var selectedMainUrlClass = "main-link-selected";
        var paths = window.parent.location.pathname.split("/");
        var mainLinks = document.getElementsByClassName("clickable-main-link");
        var i = 0;
        while (i != mainLinks.length) {
            var targetUrl = mainLinks[i].attributes.getNamedItem("href").value.split("/");
            if (targetUrl[1] == paths[1]) {
                mainLinks[i].classList.add(selectedMainUrlClass);
                break;
            }

            i++;
        }
    }
}

window.onload = windowOnload;
