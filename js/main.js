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
    const videoUrl = 'https://youtu.be/JC5eEdH4HoA?si=sVVa5IWvwmL1_AKz';
    window.open(videoUrl, '_blank'); // Opens the link in a new tab
});
