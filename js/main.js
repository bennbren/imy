window.addEventListener('load', () => {
    const message = document.querySelector('.message');
    let interval = setInterval(() => {
        message.classList.toggle('highlight');
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
});


document.getElementById('openYouTube').addEventListener('click', function() {
    const videoUrl = 'https://youtu.be/eFwQIxlFTXU?si=YrCitFkrGI9GZUt5';
    window.open(videoUrl, '_blank'); // Opens the link in a new tab
});

document.getElementById('openYouTube2').addEventListener('click', function() {
    const videoUrl = 'https://youtube.com/shorts/5JhI02EbQmg?si=YB1tER6Ja4XPjI67';
    window.open(videoUrl, '_blank'); // Opens the link in a new tab
});
