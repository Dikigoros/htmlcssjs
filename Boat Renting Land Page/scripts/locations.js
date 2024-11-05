// Placeholder for interactive elements in Featured Locations section
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
        alert('More details about ' + location.querySelector('p').textContent);
    });
});
