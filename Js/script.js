// script.js
function addImage() {
    const input = document.getElementById('imageInput');
    const gallery = document.getElementById('gallery');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.width = 100;  // küçük görsel boyutu
            img.onclick = function() {
                window.open(e.target.result, '_blank');  // Yeni sekmede büyük görüntüleme
            }
            gallery.appendChild(img);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
