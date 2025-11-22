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
        const wrapper = document.createElement('div');
        wrapper.className = 'about-wrapper';

        const text = document.createElement('div');
        text.className = 'about-text';
        const bioContent = Array.isArray(PORTFOLIO_DATA.bio.long) 
            ? PORTFOLIO_DATA.bio.long.map(p => `<p>${p}</p>`).join('') 
            : `<p>${PORTFOLIO_DATA.bio.long}</p>`;
            
        text.innerHTML = bioContent + `
            <p class="font-mono status-block">
                > CURRENT_STATUS: LOOKING_FOR_OPPORTUNITIES<br>
                > LOCATION: ${PORTFOLIO_DATA.profile.location.toUpperCase()}
            </p>
        `;

        wrapper.appendChild(text);
        aboutContainer.appendChild(wrapper);
    }

    const experienceList = document.getElementById('main-experience-list');
    if (experienceList && typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.resume.experience) {
        experienceList.innerHTML = '';
        PORTFOLIO_DATA.resume.experience.forEach(job => {
            const li = document.createElement('li');
            li.className = 'project-item spotlight-item';
            li.innerHTML = `
                <div class="project-meta font-mono">
                    <span>${job.period}</span>
                    <span class="company-tag">[ ${job.company} ]</span>
                </div>
                <h4>${job.role}</h4>
                ${job.description ? `<p style="font-size: 1rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${job.description}</p>` : ''}
                ${job.details && job.details.length > 0 ? `
                    <ul class="details-list">
                        ${job.details.map(d => `<li class="details-item">${d}</li>`).join('')}
                    </ul>
                ` : ''}
            `;
            experienceList.appendChild(li);
        });
    }

    const opensourceList = document.getElementById('opensource-list');
    if (opensourceList && typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.opensource) {
        PORTFOLIO_DATA.opensource.forEach(project => {
            const li = document.createElement('li');
            li.className = 'project-item spotlight-item';
            li.innerHTML = `
                <a href="${project.link}" target="_blank">
                    <div class="project-meta font-mono">
                        <span>${project.year}</span>
                        <span class="company-tag">[ NPM ]</span>
                    </div>
                    <h4>${project.title}</h4>
                    <p style="font-size: 1rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${project.description}</p>
                </a>
            `;
            opensourceList.appendChild(li);
        });
    }

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && typeof PORTFOLIO_DATA !== 'undefined') {
        skillsContainer.innerHTML = '';

        const categories = [
            { key: 'soft', label: 'SOFT SKILLS' },
            { key: 'ai', label: 'AI CODING' },
            { key: 'tech', label: 'TECH' },
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
                
                setTimeout(() => {
                    const headerOffset = 100; 
                    const elementPosition = item.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 300);
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
