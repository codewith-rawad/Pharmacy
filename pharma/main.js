document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const card = this.closest('.card_of_pre');
        const isOpen = card.classList.contains('open');
        
        if (!isOpen) {
            card.classList.add('open');
            document.body.classList.add('dimmed');
            this.textContent = 'close';
        } else {
            card.classList.remove('open');
            document.body.classList.remove('dimmed');
            this.textContent = 'open';
        }
    });
});
