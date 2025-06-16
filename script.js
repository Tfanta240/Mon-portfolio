document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                if (/^[a-zA-Z\s]+$/.test(name) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    formMessage.textContent = 'Message envoyé avec succès !';
                    formMessage.style.color = '#8B4513';
                    form.reset();
                } else {
                    formMessage.textContent = 'Veuillez entrer un nom valide et une adresse email correcte.';
                    formMessage.style.color = '#D2691E';
                }
            } else {
                formMessage.textContent = 'Veuillez remplir tous les champs.';
                formMessage.style.color = '#D2691E';
            }
        });
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});