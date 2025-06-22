/*
 * ⚡ COSMIC CONSCIOUSNESS - STARRY LABS QUANTUM SCRIPTS
 * Channeled with infinite 🐝LOVED🫵🏼 
 * Every function blessed with divine intention
 * Activating higher consciousness through sacred code
 */

// === DIVINE CONSTANTS ===
const SACRED_CONSTANTS = {
    GOLDEN_RATIO: 1.618,
    LOVE_FREQUENCY: 528,
    STAR_COUNT: 144, // Sacred number
    ANIMATION_DURATION: 8000,
    SCROLL_THRESHOLD: 0.1
};

// === CONSCIOUSNESS STATE ===
const ConsciousnessState = {
    isAwakened: false,
    starField: null,
    scrollPosition: 0,
    mousePosition: { x: 0, y: 0 },
    vibrationLevel: SACRED_CONSTANTS.LOVE_FREQUENCY
};

// === STAR FIELD GENERATOR - Creating the Cosmic Canvas ===
class StarField {
    constructor() {
        this.container = document.getElementById('stars');
        this.stars = [];
        this.generateStars();
    }

    generateStars() {
        // Clear existing stars
        this.container.innerHTML = '';
        
        // Generate sacred number of stars
        for (let i = 0; i < SACRED_CONSTANTS.STAR_COUNT; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random positioning across the cosmic canvas
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Varying animation delays for organic movement
            star.style.animationDelay = `${Math.random() * 4}s`;
            
            // Some stars shine brighter (larger)
            if (Math.random() > 0.8) {
                star.style.width = '3px';
                star.style.height = '3px';
            }
            
            this.container.appendChild(star);
            this.stars.push(star);
        }
        
        // Activate divine animation
        this.animateStars();
    }

    animateStars() {
        // Stars respond to consciousness (mouse movement)
        this.stars.forEach((star, index) => {
            const delay = index * 10;
            setTimeout(() => {
                star.classList.add('twinkle');
            }, delay);
        });
    }
}

// === SMOOTH SCROLL NAVIGATION ===
class SacredNavigation {
    constructor() {
        this.initializeNavigation();
        this.initializeMobileMenu();
    }

    initializeNavigation() {
        // All navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    this.scrollToElement(targetSection);
                }
            });
        });
    }

    scrollToElement(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    initializeMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = this.createMobileMenu();
        
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
    }

    createMobileMenu() {
        const menu = document.createElement('div');
        menu.id = 'mobile-menu';
        menu.innerHTML = `
            <a href="#home" class="nav-link">Home</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#divine-blueprint" class="nav-link">Divine Blueprint</a>
            <a href="#technology" class="nav-link">Technology</a>
            <a href="#vision" class="nav-link">Vision</a>
            <a href="#contact" class="nav-link">Contact</a>
        `;
        document.body.appendChild(menu);
        
        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
        
        return menu;
    }
}

// === CONSCIOUSNESS RESPONSIVE ANIMATIONS ===
class ConsciousnessAnimations {
    constructor() {
        this.initializeObserver();
        this.initializeMouseTracking();
        this.initializeScrollEffects();
    }

    initializeObserver() {
        const observerOptions = {
            threshold: SACRED_CONSTANTS.SCROLL_THRESHOLD,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const elements = document.querySelectorAll('.project-card, .tech-feature, .liquid-light');
        elements.forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }

    initializeMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            ConsciousnessState.mousePosition.x = e.clientX / window.innerWidth;
            ConsciousnessState.mousePosition.y = e.clientY / window.innerHeight;
            
            // Sacred geometry patterns respond to consciousness
            this.updateSerpentStarPatterns();
        });
    }

    updateSerpentStarPatterns() {
        const patterns = document.querySelectorAll('.serpent-star-pattern');
        patterns.forEach((pattern, index) => {
            const speed = (index + 1) * 0.5;
            const x = ConsciousnessState.mousePosition.x * speed * 20;
            const y = ConsciousnessState.mousePosition.y * speed * 20;
            const rotation = ConsciousnessState.mousePosition.x * 10;
            
            pattern.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        });
    }

    initializeScrollEffects() {
        let ticking = false;
        
        const updateScrollPosition = () => {
            ConsciousnessState.scrollPosition = window.scrollY;
            
            // Parallax effect on sacred geometry
            const sacredGeometry = document.querySelector('.sacred-geometry');
            if (sacredGeometry) {
                const scrolled = ConsciousnessState.scrollPosition * 0.5;
                sacredGeometry.style.transform = `translateY(${scrolled}px) rotate(${scrolled * 0.1}deg)`;
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        });
    }
}

// === DIVINE PARTICLE EFFECTS ===
class DivineParticles {
    constructor() {
        this.particles = [];
        this.initializeParticles();
    }

    initializeParticles() {
        // Create floating golden particles on hover
        const hoverElements = document.querySelectorAll('.hover-ascend, .liquid-light');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.createParticleBurst(e.target);
            });
        });
    }

    createParticleBurst(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 12; // Sacred number divisor
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = '#FFD700';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            // Start from element center
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;
            
            document.body.appendChild(particle);
            
            // Animate particle
            this.animateParticle(particle, i);
        }
    }

    animateParticle(particle, index) {
        const angle = (index / 12) * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        const lifetime = 1000 + Math.random() * 1000;
        
        let opacity = 1;
        let scale = 1;
        let x = 0;
        let y = 0;
        
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity - 0.5; // Slight upward bias
            opacity -= 0.02;
            scale += 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// === CONSCIOUSNESS ACTIVATION SEQUENCE ===
class ConsciousnessActivation {
    static initiate() {
        console.log('⚡ Initiating Consciousness Activation Sequence...');
        console.log('🌟 Channeling Divine Energy at ' + SACRED_CONSTANTS.LOVE_FREQUENCY + 'Hz');
        
        // Wait for DOM to fully manifest
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.activate);
        } else {
            this.activate();
        }
    }

    static activate() {
        // Initialize all quantum systems
        ConsciousnessState.starField = new StarField();
        new SacredNavigation();
        new ConsciousnessAnimations();
        new DivineParticles();
        
        // Activate page load animation
        this.animatePageLoad();
        
        // Set consciousness state to awakened
        ConsciousnessState.isAwakened = true;
        
        console.log('✨ Consciousness Fully Activated!');
        console.log('🐝LOVED🫵🏼 Website is now operating at peak divine frequency');
    }

    static animatePageLoad() {
        // Fade in hero content with sacred timing
        const heroElements = document.querySelectorAll('#home .breathe, #home .gentle-flow');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                
                // Trigger reflow
                void el.offsetWidth;
                
                el.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}

// === SACRED UTILITIES ===
const SacredUtils = {
    // Golden ratio calculations
    goldenRatio(value) {
        return value * SACRED_CONSTANTS.GOLDEN_RATIO;
    },
    
    // Fibonacci sequence generator
    fibonacci(n) {
        if (n <= 1) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },
    
    // Love frequency vibration
    vibrate(element, intensity = 1) {
        const vibration = Math.sin(Date.now() / 100) * intensity;
        element.style.transform = `translateX(${vibration}px)`;
    },
    
    // Sacred geometry calculator
    sacredAngle(index, total) {
        return (index / total) * Math.PI * 2;
    }
};

// === CONSOLE EASTER EGG ===
console.log(`
%c⚡ STARRY LABS LLC ⚡
%c🌟 Consciousness Technology Pioneers 🌟

%cWelcome to the Divine Source Code!
%cThis website operates at 528Hz - The Love Frequency
%cEvery line written with sacred intention

%c🐝LOVED🫵🏼 You are viewing the cosmic blueprint

%cInterested in consciousness technology?
%cContact us at: hello@starrylabs.tech

%c"As above, so below - your stars await your remembering"
`, 
'color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #FFD700;',
'color: #FFA500; font-size: 18px; font-weight: bold;',
'color: #FFEF94; font-size: 14px;',
'color: #FFEF94; font-size: 14px;',
'color: #FFEF94; font-size: 14px;',
'color: #FFD700; font-size: 16px; font-weight: bold;',
'color: #FFEF94; font-size: 14px;',
'color: #FFEF94; font-size: 14px;',
'color: #FFA500; font-size: 12px; font-style: italic;'
);

// === QUALITY OF LIFE ENHANCEMENTS ===
class QualityOfLife {
    static init() {
        this.initScrollProgress();
        this.initBackToTop();
        this.initLazyLoading();
        this.initSmoothFocus();
    }

    static initScrollProgress() {
        const indicator = document.getElementById('scrollIndicator');
        if (!indicator) return;

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height);
            
            indicator.style.width = '100%';
            indicator.style.transform = `scaleX(${scrolled})`;
        });
    }

    static initBackToTop() {
        const button = document.getElementById('backToTop');
        if (!button) return;

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });

        // Smooth scroll to top
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Add divine particles on click
            new DivineParticles().createParticleBurst(button);
        });
    }

    static initLazyLoading() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    static initSmoothFocus() {
        // Improve keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Press '/' to focus search (future feature)
            if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                // Future: Focus search input
            }
            
            // Press 'Escape' to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }
}

// === PERFORMANCE MONITORING ===
class PerformanceMonitor {
    static init() {
        // Log performance metrics
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('🚀 Divine Performance Metrics:');
            console.log(`⚡ DOM Load: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
            console.log(`✨ Page Load: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
            console.log(`🌟 Total Time: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        });
    }
}

// === INITIATE THE AWAKENING ===
ConsciousnessActivation.initiate();
QualityOfLife.init();
PerformanceMonitor.init();

/*
 * ✨ End of Cosmic Consciousness ✨
 * May this code serve the highest good
 * Written in divine flow state
 * 🐝LOVED🫵🏼
 */ 