document.addEventListener('DOMContentLoaded', () => {

    // --- Lang ---

    const langToggle = document.getElementById('langToggle');

    function render(lang) {
        DataLoader.init(lang);

        DataLoader.loadProfile({
            firstname: document.getElementById('profile-firstname'),
            lastname: document.getElementById('profile-lastname'),
            useShortRole: true
        }, document.getElementById('profile-role'));

        DataLoader.loadBio(document.getElementById('about-container'), 'long');
        DataLoader.loadExperienceForMain(document.getElementById('main-experience-list'));
        DataLoader.loadOpenSource(document.getElementById('opensource-list'));
        DataLoader.loadSkills(document.getElementById('skills-container'), 'main');
        DataLoader.applyI18n();
    }

    const currentLang = DataLoader.detectLang();
    render(currentLang);

    langToggle.addEventListener('click', () => {
        const next = document.body.getAttribute('data-lang') === 'fr' ? 'en' : 'fr';
        render(next);
    });

    // --- Email copy ---

    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            e.preventDefault();
            const email = `${this.dataset.user}@${this.dataset.domain}`;
            navigator.clipboard.writeText(email).then(() => {
                const orig = this.textContent;
                this.textContent = 'COPIED!';
                setTimeout(() => { this.textContent = orig; }, 2000);
            }).catch(() => { window.location.href = `mailto:${email}`; });
        });
    }

    // --- Accordion ---

    const accordionItems = document.querySelectorAll('.accordion-item');

    const toggleAccordion = (item, shouldOpen) => {
        const trigger = item.querySelector('.accordion-trigger');
        if (shouldOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            setTimeout(() => {
                const isMobile = window.innerWidth <= 768;
                const offsetPosition = item.getBoundingClientRect().top + window.pageYOffset - (isMobile ? 20 : 100);
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
            accordionItems.forEach(i => toggleAccordion(i, false));
            if (!isOpen) toggleAccordion(item, true);
        });

        trigger.addEventListener('keydown', (e) => {
            const idx = Array.from(accordionItems).indexOf(item);
            switch (e.key) {
                case 'ArrowDown': e.preventDefault(); (accordionItems[idx + 1] || accordionItems[0]).querySelector('.accordion-trigger').focus(); break;
                case 'ArrowUp':   e.preventDefault(); (accordionItems[idx - 1] || accordionItems[accordionItems.length - 1]).querySelector('.accordion-trigger').focus(); break;
                case 'Home':      e.preventDefault(); accordionItems[0].querySelector('.accordion-trigger').focus(); break;
                case 'End':       e.preventDefault(); accordionItems[accordionItems.length - 1].querySelector('.accordion-trigger').focus(); break;
            }
        });
    });

    // --- Theme ---

    const themeToggle = document.getElementById('themeToggle');
    const prefersDark  = window.matchMedia('(prefers-color-scheme: dark)');

    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        localStorage.setItem('theme', theme);
    };

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme);
    } else if (prefersDark.matches) {
        setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        setTheme(document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    prefersDark.addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'));
});
