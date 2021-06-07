/*
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
*/

CA1.headings = {};
CA1.headings.parsabes = {/* I may not do this? */};
CA1.headings.parseObject = function () {};
CA1.headings.pushElement = document.head.appendChild; // who cares

var appleTouchIconLink = document.createElement("link");
appleTouchIconLink.setAttribute("rel", "apple-touch-icon");
appleTouchIconLink.setAttribute("sizes", "180x180");
appleTouchIconLink.setAttribute("href", "/apple-touch-icon.png");
document.head.appendChild(appleTouchIconLink);

var iconLink = document.createElement("link");
iconLink.setAttribute("rel", "icon");
iconLink.setAttribute("type", "image/png");
iconLink.setAttribute("sizes", "16x16");
iconLink.setAttribute("href", "/favicon-16x16.png");
document.head.appendChild(iconLink);

var manifestIcon = document.createElement("link");
manifestIcon.setAttribute("rel", "manifest");
manifestIcon.setAttribute("href", "/site.webmanifest");
document.head.appendChild(manifestIcon);
