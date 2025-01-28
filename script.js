// Countdown Timer
function updateTimer() {
    const endDate = new Date('2024-07-31');
    const now = new Date();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    // Update hours, mins, secs similarly
}

setInterval(updateTimer, 1000);

// Ticket Selection
document.querySelectorAll('.ticket-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove previous selections
        document.querySelectorAll('.ticket-option').forEach(opt => 
            opt.classList.remove('selected'));
        
        // Add selection
        this.classList.add('selected');
        
        // Update total price
        const price = parseFloat(this.textContent.match(/\$\d+\.\d{2}/)[0].slice(1));
        document.querySelector('.total-price').textContent = `TOTAL PRICE: $${price.toFixed(2)}`;
    });
});

// Quiz Validation
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        if (this.classList.contains('correct')) {
            alert('Correct answer!');
        } else {
            alert('Incorrect! You will still be charged.');
        }
    });
});