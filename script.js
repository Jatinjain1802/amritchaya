/**
 * AMRIT CHAYA - Master Interaction Script
 * Architecture: UI/UX Lead - Arpit & Antigravity
 * Features: Loading logic, Scroll reveals, Glassmorphism header, and Ken Burns hero.
 */

window.addEventListener('load', () => {
    // 1. Loading Screen Disposal
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
        // Enable hero animation after load
        document.querySelector('.hero').classList.add('active');
    }, 1500); // Slight delay for the "Premium Feel"
});

document.addEventListener('DOMContentLoaded', () => {

    // 2. Mobile Menu Toggle Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    const toggleMenu = () => {
        mobileToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 3. Sticky Header Logic (Glassmorphism transition)
    const header = document.getElementById('main-header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. High-Fidelity Reveal Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Keep for re-animation if desired
            }
        });
    }, revealOptions);

    document.querySelectorAll('[data-reveal]').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Smooth Anchor Links with Premium Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 10);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Parallax Scroll Effect for Overlap Images
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.overlap-media img').forEach(img => {
            const speed = 0.05;
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
});

/**
 * 🎓 JAVASCRIPT & UI LEARNING:
 * 
 * 1. 'window.onload' vs 'DOMContentLoaded': 
 *    - DOMContentLoaded fires when the HTML is ready.
 *    - window.onload waits for images, fonts, and sub-resources. 
 *    - For a LOADING SCREEN, we use 'load' to ensure the user sees a finished page.
 * 
 * 2. 'Passive Listeners': 
 *    - { passive: true } tells the browser that the scroll event won't call `preventDefault()`.
 *    - This significantly improves scroll performance on mobile and high-end screens.
 * 
 * 3. 'Micro-Interactions':
 *    - Notice the `setTimeout` on the loader. Sometimes, a site loads TOO fast, 
 *      and the user misses the beautiful loading animation. 
 *    - A 1-1.5s delay makes the site feel "heavy" and "premium" (like a luxury car door).
 */
