// ==========================
// 1. Navegação suave (scroll)
// ==========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ==========================
// 2. Botões CTA (Home)
// ==========================
const botoesCTA = document.querySelectorAll('.cta button');

botoesCTA.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.textContent.includes('Saiba Mais')) {
            alert('Descubra como o agronegócio está transformando o futuro sustentável!');
        } else if (botao.textContent.includes('Participe')) {
            alert('Junte-se ao movimento de inovação no agronegócio!');
        }
    });
});


// ==========================
// 3. Animação ao rolar (IntersectionObserver)
// ==========================

// 3.1 Criando o observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


// 3.2 Aplicando nas seções
document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});


// ==========================
// 4. Validação do formulário de contato
// ==========================
const form = document.querySelector('#contato form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!email.includes('@')) {
        alert('Digite um email válido.');
        return;
    }

    alert(`Obrigado pelo contato, ${nome}! Em breve retornaremos.`);
    form.reset();
});


// ==========================
// 5. Newsletter
// ==========================
const newsletterBtn = document.querySelector('.newsletter button');
const newsletterInput = document.querySelector('#newsletter');

newsletterBtn.addEventListener('click', () => {
    const email = newsletterInput.value.trim();

    if (email === '' || !email.includes('@')) {
        alert('Digite um email válido para assinar.');
        return;
    }

    alert('Inscrição realizada com sucesso!');
    newsletterInput.value = '';
});
