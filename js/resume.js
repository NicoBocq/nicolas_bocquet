document.addEventListener('DOMContentLoaded', () => {
    DataLoader.loadProfile({
        name: document.getElementById('resume-name'),
        useShortRole: false
    }, document.getElementById('resume-role'), document.getElementById('resume-email'), document.getElementById('resume-website'));

    const img = document.getElementById('resume-image');
    if (img) {
        img.src = 'img/profile.jpeg';
        img.style.display = 'block';
    }

    DataLoader.loadBio(document.getElementById('about-container'), 'short');

    DataLoader.loadExperience(document.getElementById('experience-list'));

    const skillsContainer = document.getElementById('skills-list');
    DataLoader.loadSkills(skillsContainer, 'resume');
    if (skillsContainer) {
        skillsContainer.style.display = 'block';
    }

    DataLoader.loadTeaching(document.getElementById('teaching-list'));

    DataLoader.loadEducation(document.getElementById('education-list'));
});
