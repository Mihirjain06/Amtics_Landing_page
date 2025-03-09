// JavaScript to include the header and footer
document.addEventListener("DOMContentLoaded", function() {
    // Load the header
    fetch('html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Load the footer
    fetch('html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});

