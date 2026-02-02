// ============================================
// PORTFOLIO RT3 - JavaScript
// ============================================

// ==================== NAVIGATION ====================

// Détection du scroll pour effet navbar
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter classe "scrolled" si on a scrollé
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Mise à jour du lien actif en fonction du scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==================== MODALES PROJETS ====================

// Ouvrir une modale
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
    }
}

// Fermer une modale
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Rétablir le scroll
    }
}

// Fermer la modale en cliquant en dehors
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Fermer la modale avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// ==================== ANIMATIONS AU SCROLL ====================

// Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe .fade-in-scroll
document.querySelectorAll('.fade-in-scroll').forEach(element => {
    observer.observe(element);
});

// ==================== SMOOTH SCROLL ====================

// Smooth scroll pour les liens d'ancre
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ANIMATION DES BARRES DE COMPÉTENCES ====================

// Animer les barres de compétences quand elles deviennent visibles
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            
            // Petite temporisation pour l'effet
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==================== FONCTIONS UTILITAIRES ====================

// Fonction pour détecter si on est sur mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Détection du redimensionnement de fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Fermer le menu mobile si on passe en mode desktop
        if (!isMobile()) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }, 250);
});

// ==================== INITIALISATION ====================

// Fonction d'initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour le lien actif initial
    updateActiveLink();
    
    // Ajouter une classe pour indiquer que le JS est chargé
    document.body.classList.add('js-loaded');
    
    // Log pour confirmer le chargement
    console.log('Portfolio RT3 chargé avec succès! 🚀');
});

// ==================== EASTER EGG (Optionnel) ====================

// Petit easter egg : Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('').includes(konamiPattern.join(''))) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Animation fun quand le Konami Code est entré
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
    
    console.log('🎮 Konami Code activé! Vous êtes un vrai geek! 🎉');
}

// ==================== PERFORMANCE ====================

// Lazy loading des images (si vous en ajoutez plus tard)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback pour les navigateurs qui ne supportent pas le lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== ACCESSIBILITÉ ====================

// Gestion du focus pour l'accessibilité
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
// ==================== LOGIQUE BOUTON CV ====================
const cvBtn = document.getElementById('downloadCV');

if (cvBtn) {
    cvBtn.addEventListener('click', function() {
        // On ajoute l'effet visuel
        this.classList.add('pulse-active');
        
        // On affiche un log stylé en console pour les curieux
        console.log("🚀 Requête de téléchargement CV : Statut 200 OK");
        
        // On retire la classe après l'animation
        setTimeout(() => {
            this.classList.remove('pulse-active');
        }, 800);
    });
}
// ==================== ANALYTICS (Optionnel) ====================

// Si vous souhaitez ajouter Google Analytics ou autre
// function trackEvent(category, action, label) {
//     if (typeof gtag !== 'undefined') {
//         gtag('event', action, {
//             'event_category': category,
//             'event_label': label
//         });
//     }
// }

// Exemples d'utilisation :
// trackEvent('Navigation', 'Click', 'Projets');
// trackEvent('Modal', 'Open', 'Projet 1');
