// Component Loader
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
            // Re-initialize event listeners for the loaded component if needed
            if (id === 'header') initHeader();
        }
    } catch (err) {
        console.error(`Error loading ${file}:`, err);
    }
}

function initHeader() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });

    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Priority 1: Header (Needed for navigation and initial layout)
    loadComponent('header', 'header.html');

    // Priority 2: Footer (Not critical for initial view)
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            loadComponent('footer', 'footer.html');
        });
    } else {
        setTimeout(() => {
            loadComponent('footer', 'footer.html');
        }, 1000);
    }
});

// Preloader Handler
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        }, 1000); // 1s delay for a premium feel
    }
});

// Original logic below (Refactored)

// Reveal on Scroll
function initReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}
initReveal();

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const categorySections = document.querySelectorAll('.category-section');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            // Filter individual cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            // Toggle visibility of category sections
            setTimeout(() => {
                categorySections.forEach(section => {
                    const cardsInRange = section.querySelectorAll('.project-card');
                    let hasVisible = false;
                    cardsInRange.forEach(card => {
                        if (card.style.display !== 'none') hasVisible = true;
                    });

                    if (hasVisible) {
                        section.style.display = 'block';
                        section.style.opacity = '1';
                    } else {
                        section.style.display = 'none';
                        section.style.opacity = '0';
                    }
                });
            }, 350);
        });
    });
}

// Contact Form Handler (FormSubmit + AJAX + Modal)
const contactForm = document.getElementById('contact-form');
const thankYouModal = document.getElementById('thank-you-modal');
const closeModalBtn = document.getElementById('close-modal');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        try {
            const formData = new FormData(contactForm);

            // Submission to Netlify (Requires URLSearchParams and form-name)
            const netlifySubmit = fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });

            // Submission to FormSubmit
            const formSubmitSubmit = fetch(contactForm.getAttribute("action"), {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // Wait for both to be initiated (at least one success for UI feedback)
            const results = await Promise.all([netlifySubmit, formSubmitSubmit]);

            if (results[0].ok || results[1].ok) {
                // Show Success Modal
                thankYouModal.classList.add('active');
                contactForm.reset();
            } else {
                throw new Error('Both submissions failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please try again or contact me directly via email.');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        thankYouModal.classList.remove('active');
    });
}
