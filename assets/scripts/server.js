var CA1 = {};

CA1.enum = {};
CA1.enum.scriptsPath = "/assets/scripts/";

CA1.scripts = {};
CA1.scripts.preFetch = [
    
];
CA1.scripts.aftFetch = [
    
];
CA1.scripts.doaminFetch = function (scriptName) {
    var element = document.createElement("script");
    element.setAttribute("src", CA1.enum.scriptsPath + scriptName + ".min.js");
    document.head.appendChild(element);
}
CA1.scripts.fetchPreFetch = function () {
    for (var index in CA1.scripts.preFetch) {
        CA1.scripts.doaminFetch(CA1.scripts.preFetch[index]);
    }
}
CA1.scripts.fetchAftFetch = function () {
    for (var index in CA1.scripts.aftFetch) {
        CA1.scripts.doaminFetch(CA1.scripts.aftFetch[index]);
    }
}
CA1.scripts.windowOnload = function () {
    CA1.scripts.fetchAftFetch();
}

CA1.scripts.fetchPreFetch();
window.onload = CA1.scripts.windowOnload;