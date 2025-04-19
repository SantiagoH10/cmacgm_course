document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`CTA Button clicked: ${e.target.textContent}`);
        });
    });
});
