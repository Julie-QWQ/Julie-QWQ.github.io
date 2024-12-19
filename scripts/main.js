const img = document.querySelector('img');

document.querySelector('button').addEventListener('click', function () {
    if (img.getAttribute('src') === 'images/icon.ico') {
        img.setAttribute('src', 'images/WindowIcon.png')
    }
    else {
        img.setAttribute('src', 'images/icon.ico');
    }
});