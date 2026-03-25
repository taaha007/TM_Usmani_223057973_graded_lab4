var favoriteCount = 0;
var totalImages = 6;
window.onload = function() {
    updateCounter();
    var picsDiv = document.getElementById('pics');
    picsDiv.addEventListener('click', function(event) {

    
        if (event.target.tagName !== 'IMG') {
            return;}
        var img = event.target;
        if (img.classList.contains('selected')) {
            return; }
        moveToFavourites(img);});
    var favouritesDiv = document.getElementById('favourites');
    favouritesDiv.addEventListener('click', function(event) {
        if (event.target.tagName !== 'IMG') {
            return;}
        var img = event.target;
        revertImage(img);});
};
function moveToFavourites(img) {
    favoriteCount = favoriteCount + 1;
    var favouritesDiv = document.getElementById('favourites');
    favouritesDiv.appendChild(img);
    img.classList.add('selected');
    img.style.border = '3px solid green';
    var actionsList = document.getElementById('actions');
    var li = document.createElement('li');
    li.textContent = 'Moved ' + img.src + ' to favorites';
    actionsList.appendChild(li)
    var confirmMsg = document.getElementById('confirm-msg');
    if (favoriteCount === totalImages) {
        confirmMsg.textContent = 'All images have been selected!';
    } else {
        confirmMsg.textContent = 'Image ' + img.dataset.index + ' selected as favorite number ' + favoriteCount;
    }
    updateCounter();
}
function revertImage(img) {
    favoriteCount = favoriteCount - 1;
    img.classList.remove('selected');
    img.style.border = '';
    var picsDiv = document.getElementById('pics');
    var imgsInPics = picsDiv.querySelectorAll('img');
    var imgIndex = parseInt(img.dataset.index);
    var inserted = false;

    for (var i = 0; i < imgsInPics.length; i = i + 1) {
        var currentIndex = parseInt(imgsInPics[i].dataset.index);
        if (currentIndex > imgIndex) {
            picsDiv.insertBefore(img, imgsInPics[i]);
            inserted = true;
            break;}
    }
    if (inserted === false) {
        picsDiv.appendChild(img);
    }
    var actionsList = document.getElementById('actions');
    var li = document.createElement('li');
    li.textContent = 'Reverted ' + img.src + ' back to the main list';
    actionsList.appendChild(li);

    updateCounter();

}
function updateCounter() {

    var remaining = totalImages - favoriteCount;
    var counterP = document.getElementById('counter');
    counterP.textContent = 'Remaining images to select: ' + remaining;

}