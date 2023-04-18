
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var pic = document.createElement("pic")
var pic2 = document.createElement("pic2")
var pic3 = document.createElement("pic3")
var pic4 = document.createElement("pic4")
var pic5 = document.createElement("pic5")
pic.src = "jp-sakuraRiver.jpg"
pic2.src = "jp-crossWalk.jpg"
pic3.src = "japan-shop.jpg"
pic4.src = "jp-banbooForest.jpg"
pic5.src = "jp-mountain.jpg"
var img1 = document.getElementById("mg1");
var img2 = document.getElementById("mg2");
var img3 = document.getElementById("mg3");
var img4 = document.getElementById("mg4");
var img5 = document.getElementById("mg5");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic.src;
}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic2.src;
}
img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic3.src;
}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic4.src;
}
img5.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic5.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
