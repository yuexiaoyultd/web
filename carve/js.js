document.getElementById('carveButton').addEventListener('click', function() {
    var pathData = document.getElementById('pathInput').value;
    var size = document.getElementById('sizeInput').value;
    var time = document.getElementById('timeInput').value;
    var carveUrl = 'carve.html?path=' + encodeURIComponent(pathData) + '&size=' + size + '&time=' + time;
    window.location.href = carveUrl;
});