document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Suave para navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Interatividade dos botões "Saiba Mais" e "Participe"
    const ctaButtons = document.querySelectorAll('.cta button');
    ctaButtons[0].addEventListener('click', () => {
        document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
    });

    ctaButtons[1].addEventListener('click', () => {
        alert('Que ótimo interesse! Em breve teremos mais informações sobre como participar.');
    });

    // 3. Validação simples de formulário de contato
    const contatoForm = document.querySelector('#contato form');
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.querySelector('#nome').value;
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        contatoForm.reset();
    });

    // 4. Validação da Newsletter
    const newsButton = document.querySelector('.newsletter button');
    newsButton.addEventListener('click', () => {
        const email = document.querySelector('#newsletter').value;
        if(email.includes('@')) {
            alert('Cadastro na newsletter realizado com sucesso!');
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });

    // 5. Efeito simples de "Fade In" nos cards ao rolar a página
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'all 0.6s ease-out';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});
