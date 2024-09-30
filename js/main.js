// Add all your JS here
window.addEventListener('load', () => {
    const message = document.querySelector('.message');
    let interval = setInterval(() => {
        message.classList.toggle('highlight');
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
});
