document.addEventListener('DOMContentLoaded', function () {
    if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.profile) {
        const p = PORTFOLIO_DATA.profile;
        document.getElementById('profile-firstname').textContent = p.firstname;
        document.getElementById('profile-lastname').textContent = p.lastname;
        document.getElementById('profile-role').textContent = p.shortRole;

        const emailLink = document.getElementById('emailLink');
        if (emailLink) {
            emailLink.dataset.user = p.email.split('@')[0];
            emailLink.dataset.domain = p.email.split('@')[1];
        }
    }

    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer && typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.bio && PORTFOLIO_DATA.profile) {
        aboutContainer.innerHTML = `
            <p>${PORTFOLIO_DATA.bio.long}</p>
            <p class="font-mono status-block">
                > CURRENT_STATUS: LOOKING_FOR_OPPORTUNITIES<br>
                > LOCATION: ${PORTFOLIO_DATA.profile.location.toUpperCase()}
            </p>
        `;
    }

    const experienceList = document.getElementById('main-experience-list');
    if (experienceList && typeof PORTFOLIO_DATA !== 'undefined') {
        experienceList.innerHTML = '';
        PORTFOLIO_DATA.resume.experience.forEach(job => {
            const li = document.createElement('li');
            li.className = 'project-item spotlight-item';

            let detailsHtml = '';
            if (job.details && job.details.length > 0) {
                detailsHtml = '<ul class="details-list">' +
                    job.details.map(d => `<li class="details-item">${d}</li>`).join('') +
                    '</ul>';
            }

            li.innerHTML = `
                <a href="resume.html" style="display: block; text-decoration: none; color: inherit;">
                    <div class="project-meta font-mono">${job.period}</div>
                    <h4 style="margin-bottom: 0.25rem;">${job.role} <span class="company-tag">${job.company}</span></h4>
                    ${detailsHtml}
                </a>
            `;
            experienceList.appendChild(li);
        });
    }

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && typeof PORTFOLIO_DATA !== 'undefined') {
        skillsContainer.innerHTML = '';

        const categories = [
            { key: 'soft', label: 'SOFT SKILLS' },
            { key: 'tech', label: 'TECH' },
            { key: 'ai', label: 'AI CODING' }
        ];

        categories.forEach(cat => {
            if (PORTFOLIO_DATA.skills[cat.key] && PORTFOLIO_DATA.skills[cat.key].length > 0) {
                const header = document.createElement('h4');
                header.className = 'font-mono skills-category-title';
                header.textContent = cat.label;
                skillsContainer.appendChild(header);

                const ul = document.createElement('ul');
                ul.className = 'stack-list spotlight-group';

                PORTFOLIO_DATA.skills[cat.key].forEach(skill => {
                    const li = document.createElement('li');
                    li.className = 'spotlight-item';
                    li.textContent = skill;
                    ul.appendChild(li);
                });
                skillsContainer.appendChild(ul);
            }
        });
    }

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

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            accordionItems.forEach(i => i.classList.remove('is-open'));

            if (!isOpen) {
                item.classList.add('is-open');
            }
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', function () {
        let theme = 'light';
        if (document.body.getAttribute('data-theme') === 'light') {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
