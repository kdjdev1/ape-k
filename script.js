// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===== Global Animation Setup =====

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on page load
    animateOnLoad();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup parallax effects
    setupParallax();
    
    // Setup magnetic buttons
    setupMagneticButtons();
});

// ===== Page Load Animations =====
function animateOnLoad() {
    // Animate nav
    gsap.from('nav', {
        duration: 0.6,
        y: -50,
        opacity: 0,
        ease: 'power2.out'
    });

    // Animate hero section
    gsap.from('.hero-text', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('.hero-image', {
        duration: 0.8,
        x: 50,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.4
    });
}

// ===== Scroll Animations =====
function setupScrollAnimations() {
    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });

    // Animate contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        });
    });

    // Animate scroll-reveal elements
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    scrollReveals.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%'
            },
            duration: 0.8,
            x: -50,
            opacity: 0,
            ease: 'power2.out'
        });
    });

    // Animate value propositions
    const valueProps = document.querySelectorAll('.value-prop');
    valueProps.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
}

// ===== Parallax Effects =====
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-image');
    
    parallaxElements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false
            },
            y: -50,
            ease: 'none'
        });
    });

    // Parallax background
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        gsap.to(parallaxBg, {
            scrollTrigger: {
                trigger: parallaxBg,
                scrub: 0.5,
                start: 'top top',
                end: 'bottom top'
            },
            y: 100,
            ease: 'none'
        });
    }
}

// ===== Magnetic Button Effects =====
function setupMagneticButtons() {
    const buttons = document.querySelectorAll('button, a[role="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}

// ===== Add to Cart Animation =====
function addToCartAnimation(event) {
    const button = event.currentTarget;
    const icon = button.innerHTML;
    
    // Create ripple effect
    gsap.to(button, {
        duration: 0.3,
        scale: 0.95,
        ease: 'back.out'
    });

    gsap.to(button, {
        duration: 0.3,
        scale: 1,
        ease: 'back.out',
        delay: 0.15
    });

    // Show feedback
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Added!';
    
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
}

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: target,
                ease: 'power2.inOut'
            });
        }
    });
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2) {
    let current = 0;
    const increment = target / (duration * 60);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 1000 / 60);
}

// ===== Form Input Animations =====
function setupFormAnimations() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        const label = input.previousElementSibling;

        input.addEventListener('focus', function() {
            if (label) {
                gsap.to(label, {
                    duration: 0.3,
                    color: '#FFB800',
                    y: -5,
                    ease: 'power2.out'
                });
            }
        });

        input.addEventListener('blur', function() {
            if (label && !input.value) {
                gsap.to(label, {
                    duration: 0.3,
                    color: '#8B7355',
                    y: 0,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Run form animations when page loads
if (document.getElementById('contactForm')) {
    setupFormAnimations();
}

// ===== Mobile Menu Toggle =====
function setupMobileMenu() {
    const menuButton = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            gsap.to(menu, {
                duration: 0.3,
                x: menu.classList.contains('hidden') ? 0 : 300,
                opacity: menu.classList.contains('hidden') ? 1 : 0,
                ease: 'power2.out'
            });
            menu.classList.toggle('hidden');
        });
    }
}

setupMobileMenu();

// ===== Intersection Observer for Image Loading =====
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                    
                    gsap.from(img, {
                        duration: 0.6,
                        opacity: 0,
                        ease: 'power2.out'
                    });
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

lazyLoadImages();

// ===== Tooltip Setup =====
function setupTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-amber-800 text-white px-3 py-1 rounded text-sm pointer-events-none';
            tooltip.textContent = this.dataset.tooltip;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top + window.scrollY - 35) + 'px';
            tooltip.style.left = (rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            
            gsap.from(tooltip, {
                duration: 0.2,
                opacity: 0,
                y: 10
            });
        });

        element.addEventListener('mouseleave', function() {
            const tooltips = document.querySelectorAll('[class*="bg-amber-800"][class*="text-white"][class*="px-3"]');
            tooltips.forEach(t => {
                if (t.textContent === this.dataset.tooltip) {
                    gsap.to(t, {
                        duration: 0.2,
                        opacity: 0,
                        y: 10,
                        onComplete: () => t.remove()
                    });
                }
            });
        });
    });
}

setupTooltips();

// ===== Accessibility: Keyboard Navigation =====
document.addEventListener('keydown', function(e) {
    // Close modals on Escape
    if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"][open]');
        if (modal) {
            modal.close();
        }
    }

    // Navigate to home on Home key
    if (e.key === 'Home') {
        window.location.href = 'index.html';
    }
});

// ===== Utility Function: Debounce =====
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ===== Window Resize Handler =====
window.addEventListener('resize', debounce(() => {
    ScrollTrigger.refresh();
}, 250));

// ===== Export for external use =====
window.spiceApp = {
    animateCounter,
    addToCartAnimation,
    lazyLoadImages,
    setupFormAnimations
};
