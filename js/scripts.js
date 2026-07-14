document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle Mobile Menu
        menuToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(open));
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Conversion events
    const track = (name, el) => {
        if (typeof gtag === 'function') {
            gtag('event', name, {
                link_url: el.href,
                link_text: (el.textContent || '').trim(),
                page_path: location.pathname
            });
        }
    };

    document.querySelectorAll('a[href*="fillout.com"]').forEach(a => {
        a.addEventListener('click', () => track('book_call_click', a));
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.addEventListener('click', () => track('email_click', a));
    });
});
