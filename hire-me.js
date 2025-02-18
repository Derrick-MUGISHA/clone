document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            name: 'Frontend projects',
            description: 'School projects and code comp mostly free code comp and w3schools.',
            link: './live.html', // Ensure this path is correct relative to hire-me.html
        },
        {
            name: 'Backend projects',
            description: 'A fully responsive e-commerce web application with payment integration.',
            link: '#'
        },
        {
            name: 'Personal projects',
            description: 'A blogging platform built with a custom CMS and user authentication.',
            link: '#'
        },
        {
            name: 'open-source projects',
            description: 'A weather forecasting app fetching real-time data using APIs.',
            link: '#'
        }
    ];
    
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsGrid) {
        // Dynamically generate project cards with links
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}"class="project-link">View Project</a>
            `;

            projectsGrid.appendChild(projectCard);
        });
    } else {
        console.error('Element with ID "projects-grid" not found.');
    }
});



