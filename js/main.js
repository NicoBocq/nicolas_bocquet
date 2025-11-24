document.addEventListener('DOMContentLoaded', () => {
    DataLoader.loadProfile({
        firstname: document.getElementById('profile-firstname'),
        lastname: document.getElementById('profile-lastname'),
        useShortRole: true
    }, document.getElementById('profile-role'), document.getElementById('emailLink'));

    DataLoader.loadBio(document.getElementById('about-container'), 'long');

    DataLoader.loadExperienceForMain(document.getElementById('main-experience-list'));

    DataLoader.loadOpenSource(document.getElementById('opensource-list'));

    DataLoader.loadSkills(document.getElementById('skills-container'), 'main');

    const emailLink = document.getElementById('emailLink');

    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            e.preventDefault();

            const user = this.getAttribute('data-user');
            const domain = this.getAttribute('data-domain');
            const email = `${user}@${domain}`;

            navigator.clipboard.writeText(email).then(() => {
                const originalText = this.textContent;
                this.textContent = 'COPIED!';

                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                window.location.href = `mailto:${email}`;
            });
        });
    }

    const accordionItems = document.querySelectorAll('.accordion-item');

    const toggleAccordion = (item, shouldOpen) => {
        const trigger = item.querySelector('.accordion-trigger');

        if (shouldOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');

            setTimeout(() => {
                const isMobile = window.innerWidth <= 768;
                const headerOffset = isMobile ? 20 : 100;
                const elementPosition = item.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 550);
        } else {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
        }
    };

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            accordionItems.forEach(i => { toggleAccordion(i, false); });

            if (!isOpen) {
                toggleAccordion(item, true);
            }
        });

        trigger.addEventListener('keydown', (e) => {
            const currentIndex = Array.from(accordionItems).indexOf(item);

            switch(e.key) {
                case 'ArrowDown': {
                    e.preventDefault();
                    const nextItem = accordionItems[currentIndex + 1] || accordionItems[0];
                    nextItem.querySelector('.accordion-trigger').focus();
                    break;
                }

                case 'ArrowUp': {
                    e.preventDefault();
                    const prevItem = accordionItems[currentIndex - 1] || accordionItems[accordionItems.length - 1];
                    prevItem.querySelector('.accordion-trigger').focus();
                    break;
                }

                case 'Home':
                    e.preventDefault();
                    accordionItems[0].querySelector('.accordion-trigger').focus();
                    break;

                case 'End':
                    e.preventDefault();
                    accordionItems[accordionItems.length - 1].querySelector('.accordion-trigger').focus();
                    break;
            }
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme');

    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        localStorage.setItem('theme', theme);
    };

    if (currentTheme === 'dark') {
        setTheme('dark');
    } else if (currentTheme === 'light') {
        setTheme('light');
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        const theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        setTheme(theme);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });
});
