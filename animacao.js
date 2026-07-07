// ================================
// ECOTRACK — animations.js
// ================================

// 1. FADE IN AO ROLAR
const fadeElements = document.querySelectorAll('.card, .contato-box, .stat-box, .solucao-card, .divisao, .img-diagonal');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach(el => {
    el.classList.add('fade-init');
    fadeObserver.observe(el);
});


// 2. HEADER TRANSPARENTE → VERDE AO ROLAR (só na home)
const header = document.querySelector('header');
const banner = document.querySelector('.banner');

if (header && banner) {
    window.addEventListener('scroll', () => {
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        if (window.scrollY >= bannerBottom - 80) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}


// 3. BOTÃO VOLTAR AO TOPO
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (btnTopo) {
        btnTopo.style.display = window.scrollY > 400 ? 'block' : 'none';
    }
});

function voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// 4. DARK MODE
function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.dark-toggle');
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️';
        localStorage.setItem('dark', 'true');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('dark', 'false');
    }
}

// Mantém o dark mode ao trocar de página
if (localStorage.getItem('dark') === 'true') {
    document.body.classList.add('dark');
    const btn = document.querySelector('.dark-toggle');
    if (btn) btn.textContent = '☀️';
}


// 5. BOTÃO COM FEEDBACK VISUAL
document.querySelectorAll('button.action').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('btn-clicked');
        setTimeout(() => btn.classList.remove('btn-clicked'), 300);
    });
});


// 6. SIDEBAR — fechar ao clicar em link
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.style.left = '-280px';
            setTimeout(() => sidebar.style.left = '', 500);
        }
    });
});