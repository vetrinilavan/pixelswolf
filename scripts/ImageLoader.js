function imageLoader() {
    var images = document.getElementById("images");

    for(var i=0; i<=11; i++) {
        file = "./images/reviews/" + String(i) + ".jpeg";

        var elem = document.createElement('img');
        elem.src = file;
        elem.id = "img";
        elem.style.paddingBottom = "3px";
        elem.style.borderRadius = "12px";
        images.appendChild(elem);
    }
}

imageLoader();