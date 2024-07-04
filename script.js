document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.nav-signin').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        element.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
