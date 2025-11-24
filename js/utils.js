const DataLoader = {
    loadProfile(profileElement, roleElement, emailElement) {
        if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.profile) {
            const p = PORTFOLIO_DATA.profile;

            if (profileElement.firstname) {
                profileElement.firstname.textContent = p.firstname;
            }
            if (profileElement.lastname) {
                profileElement.lastname.textContent = p.lastname;
            }
            if (profileElement.name) {
                profileElement.name.textContent = `${p.firstname} ${p.lastname}`;
            }

            if (roleElement) {
                roleElement.textContent = profileElement.useShortRole ? p.shortRole : p.role;
            }

            if (emailElement) {
                const email = p.email;
                if (!emailElement.textContent || emailElement.textContent.trim() === '') {
                    emailElement.textContent = email;
                }
                emailElement.href = `mailto:${email}`;
                emailElement.dataset.user = email.split('@')[0];
                emailElement.dataset.domain = email.split('@')[1];
            }

            return p;
        }
        return null;
    },

    loadExperience(container) {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.resume.experience) {
            return;
        }

        container.innerHTML = '';
        PORTFOLIO_DATA.resume.experience.forEach(job => {
            const item = document.createElement('div');
            item.className = 'experience-item';

            let detailsHtml = '';
            if (job.description) {
                detailsHtml += `<p><em>${job.description}</em></p>`;
            }
            if (job.details && job.details.length > 0) {
                detailsHtml += `<ul>${job.details.map(d => `<li>${d}</li>`).join('')}</ul>`;
            }

            item.innerHTML = `
                <h3>${job.role}</h3>
                <span class="meta">${job.company} | ${job.period} | ${job.location}</span>
                ${detailsHtml}
            `;
            container.appendChild(item);
        });
    },

    loadExperienceForMain(container) {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.resume.experience) {
            return;
        }

        container.innerHTML = '';
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
            container.appendChild(li);
        });
    },

    loadSkills(container, format = 'resume') {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.skills) {
            return;
        }

        container.innerHTML = '';

        if (format === 'resume') {
            const categories = [
                { key: 'soft', label: 'Soft Skills' },
                { key: 'ai', label: 'AI Coding' },
                { key: 'tech', label: 'Tech' },
            ];

            categories.forEach(cat => {
                if (PORTFOLIO_DATA.skills[cat.key]) {
                    const div = document.createElement('div');
                    div.className = 'skill-category';

                    const label = document.createElement('strong');
                    label.className = 'skill-label';
                    label.textContent = cat.label;
                    div.appendChild(label);

                    const content = document.createElement('div');
                    content.className = 'skill-content';
                    content.textContent = PORTFOLIO_DATA.skills[cat.key].join(' · ');
                    div.appendChild(content);

                    container.appendChild(div);
                }
            });
        } else {
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
                    container.appendChild(header);

                    const ul = document.createElement('ul');
                    ul.className = 'stack-list spotlight-group';

                    PORTFOLIO_DATA.skills[cat.key].forEach(skill => {
                        const li = document.createElement('li');
                        li.className = 'spotlight-item';
                        li.textContent = skill;
                        ul.appendChild(li);
                    });
                    container.appendChild(ul);
                }
            });
        }
    },

    loadTeaching(container) {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.resume.teaching) {
            return;
        }

        container.innerHTML = '';
        PORTFOLIO_DATA.resume.teaching.forEach(job => {
            const div = document.createElement('div');
            div.className = 'experience-item';
            div.innerHTML = `
                <h3>${job.role}</h3>
                <span class="meta">${job.school} | ${job.period}</span>
            `;
            container.appendChild(div);
        });
    },

    loadEducation(container) {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.resume.education) {
            return;
        }

        container.innerHTML = '';
        PORTFOLIO_DATA.resume.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'experience-item';
            div.innerHTML = `
                <h3>${edu.degree}</h3>
                <span class="meta">${edu.school} | ${edu.period}</span>
            `;
            container.appendChild(div);
        });
    },

    loadBio(container, format = 'short') {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.bio) {
            return;
        }

        if (format === 'short') {
            container.innerHTML = `<p>${PORTFOLIO_DATA.bio.short}</p>`;
        } else {
            const wrapper = document.createElement('div');
            wrapper.className = 'about-wrapper';

            const text = document.createElement('div');
            text.className = 'about-text';
            const bioContent = Array.isArray(PORTFOLIO_DATA.bio.long)
                ? PORTFOLIO_DATA.bio.long.map(p => `<p>${p}</p>`).join('')
                : `<p>${PORTFOLIO_DATA.bio.long}</p>`;

            text.innerHTML = `${bioContent}
                <p class="font-mono status-block">
                    > CURRENT_STATUS: LOOKING_FOR_OPPORTUNITIES<br>
                    > LOCATION: ${PORTFOLIO_DATA.profile.location.toUpperCase()}
                </p>
            `;

            wrapper.appendChild(text);
            container.appendChild(wrapper);
        }
    },

    loadOpenSource(container) {
        if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.opensource) {
            return;
        }

        container.innerHTML = '';
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
            container.appendChild(li);
        });
    }
};
