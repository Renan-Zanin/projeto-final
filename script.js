document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", highlightSection);

    function highlightSection() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove("active-link");
                });

                const matchingLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (matchingLink) {
                    matchingLink.classList.add("active-link");
                }
            }
        });
    }

    highlightSection();
});

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".animated-item");

    window.addEventListener("scroll", showProjects);

    function showProjects() {
        projects.forEach(project => {
            const projectPosition = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projectPosition < windowHeight * 0.75) {
                project.classList.add("show-item");
            }
        });
    }

    showProjects();
});
