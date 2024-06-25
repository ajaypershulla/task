// Add event listener to play button for scale effect
const playButton = document.getElementById('playButton');
playButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
playButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Add event listener to marketing heading for color change effect
const marketingHeading = document.getElementById('marketingHeading');
marketingHeading.addEventListener('click', function() {
    this.style.color = 'blue';
});

// Add event listener to model image for position change effect
const modelImg = document.getElementById('modelImg');
modelImg.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(-20px)';
});
modelImg.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0)';
});
