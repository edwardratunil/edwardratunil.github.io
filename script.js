/**
 * EDWARD RATUNIL PORTFOLIO - CORE INTERACTION MODULE
 * Manages role perspective switching, project filters, theme toggles,
 * mobile navigation, and modal views.
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileNav();
    initPerspectiveSwitcher();
    initProjectFilters();
    initScrollSpy();
    initResumeExporter();
});

// Theme Management (Dark / Light Mode)
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('edward_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('edward_theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    if (theme === 'light') {
        themeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        themeBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
        themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        themeBtn.setAttribute('title', 'Switch to Light Mode');
    }
}

// Mobile Navigation
function initMobileNav() {
    const mobileBtn = document.getElementById('mobileToggleBtn');
    const mobileMenu = document.getElementById('mobileNavMenu');
    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.className = mobileMenu.classList.contains('active') ? 'bi bi-x-lg' : 'bi bi-list';
        }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) icon.className = 'bi bi-list';
        });
    });
}

// Dual Role Perspective Switcher (All Capabilities vs Developer/IoT vs IT Support)
function initPerspectiveSwitcher() {
    const btns = document.querySelectorAll('.perspective-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const skillCards = document.querySelectorAll('.skill-category-card');
    const heroTitle = document.getElementById('heroRoleTitle');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.dataset.perspective;

            // Update Hero Headline Dynamic Emphasis
            if (heroTitle) {
                if (mode === 'dev') {
                    heroTitle.innerHTML = 'Full Stack & <span class="blue-gradient-text">IoT Developer</span>';
                } else if (mode === 'it') {
                    heroTitle.innerHTML = 'IT Support & <span class="blue-gradient-text">Network Technician</span>';
                } else {
                    heroTitle.innerHTML = 'Full Stack Developer & <span class="blue-gradient-text">IT Support Specialist</span>';
                }
            }

            // Filter Skills Matrix
            skillCards.forEach(card => {
                const category = card.dataset.category;
                if (mode === 'all') {
                    card.style.display = 'block';
                } else if (mode === 'dev') {
                    card.style.display = (category === 'dev' || category === 'iot' || category === 'systems') ? 'block' : 'none';
                } else if (mode === 'it') {
                    card.style.display = (category === 'it' || category === 'networking' || category === 'systems') ? 'block' : 'none';
                }
            });

            // Filter Projects
            projectCards.forEach(card => {
                const projCategory = card.dataset.category;
                if (mode === 'all') {
                    card.style.display = 'flex';
                } else if (mode === 'dev') {
                    card.style.display = (projCategory === 'web' || projCategory === 'iot' || projCategory === 'desktop') ? 'flex' : 'none';
                } else if (mode === 'it') {
                    card.style.display = (projCategory === 'desktop' || projCategory === 'iot' || card.dataset.itRelevant === 'true') ? 'flex' : 'none';
                }
            });
        });
    });
}

// Project Tag Filters
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter || card.dataset.tag === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Navbar ScrollSpy
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Resume Exporter / Print Trigger
function initResumeExporter() {
    document.querySelectorAll('.js-download-cv').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Trigger standard browser print optimized view or direct download prompt
            window.print();
        });
    });
}
