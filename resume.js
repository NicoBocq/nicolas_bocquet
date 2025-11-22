document.addEventListener('DOMContentLoaded', () => {
    const { resume, bio, profile } = PORTFOLIO_DATA;

    if (profile) {
        document.getElementById('resume-name').textContent = `${profile.firstname} ${profile.lastname}`;
        document.getElementById('resume-role').textContent = profile.role;
        document.getElementById('resume-location').textContent = profile.location;

        const websiteLink = document.getElementById('resume-website');
        websiteLink.textContent = profile.domain;
        websiteLink.href = `https://${profile.domain}`;

        const emailLink = document.getElementById('resume-email');
        emailLink.textContent = profile.email;
        emailLink.href = `mailto:${profile.email}`;
    }

    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer && bio) {
        aboutContainer.innerHTML = `<p>${bio.short}</p>`;
    }

    const experienceContainer = document.getElementById('experience-list');
    resume.experience.forEach(job => {
        const div = document.createElement('div');
        div.className = 'experience-item';

        let detailsHtml = '';
        if (job.description) {
            detailsHtml += `<p><em>${job.description}</em></p>`;
        }
        if (job.details && job.details.length > 0) {
            detailsHtml += '<ul>' + job.details.map(d => `<li>${d}</li>`).join('') + '</ul>';
        }

        div.innerHTML = `
            <h3>${job.role}</h3>
            <span class="meta">${job.company} | ${job.period} | ${job.location}</span>
            ${detailsHtml}
        `;
        experienceContainer.appendChild(div);
    });

    const skillsContainer = document.getElementById('skills-list');
    if (PORTFOLIO_DATA.skills) {
        const categories = [
            { key: 'soft', label: 'Soft Skills' },
            { key: 'tech', label: 'Tech' },
            { key: 'ai', label: 'AI Coding' }
        ];

        skillsContainer.innerHTML = '';
        skillsContainer.style.display = 'block';

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

                skillsContainer.appendChild(div);
            }
        });
    }

    const teachingContainer = document.getElementById('teaching-list');
    if (resume.teaching) {
        resume.teaching.forEach(job => {
            const div = document.createElement('div');
            div.className = 'experience-item';
            div.innerHTML = `
                <h3>${job.role}</h3>
                <span class="meta">${job.school} | ${job.period}</span>
            `;
            teachingContainer.appendChild(div);
        });
    }

    const educationContainer = document.getElementById('education-list');
    resume.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'experience-item';
        div.innerHTML = `
            <h3>${edu.degree}</h3>
            <span class="meta">${edu.school} | ${edu.period}</span>
        `;
        educationContainer.appendChild(div);
    });
});
