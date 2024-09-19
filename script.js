document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const greetingCard = document.querySelector('.greeting-card');

    envelope.addEventListener('click', function() {
        envelope.classList.toggle('open');
        setTimeout(() => {
            greetingCard.classList.add('show');
        }, 500);
    });

    greetingCard.addEventListener('click', function(e) {
        if (e.target === greetingCard) {
            greetingCard.classList.remove('show');
            envelope.classList.remove('open');
        }
    });
});