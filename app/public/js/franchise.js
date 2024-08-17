// franchise.js
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        // Hide all benefit contents
        document.querySelectorAll('.benefit-content').forEach(content => content.classList.remove('active'));

        // Show the selected benefit content
        const benefitId = icon.getAttribute('data-benefit');
        document.getElementById(benefitId).classList.add('active');
    });
});
