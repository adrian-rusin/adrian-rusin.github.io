const projects = [
    {
        img: "images/projects-images/google-maps-api/tets-app-showcase.png",
        title: "Google Map API app",
        description: "An application that allows you to search restaurants in the surrounding area.<br><br>I implemented Google Maps API and Google Places API to allow users to search for places and find restaurants by category.",
        buttonLink: "project.html"
    },
    {
        img: "images/projects-images/google-maps-api/tets-app-showcase.png",
        title: "Another Cool App",
        description: "This is an awesome app that does amazing things!<br><br>Built with Flutter, it delivers a smooth and fast user experience.",
        buttonLink: "project2.html"
    },
    {
        img: "images/projects-images/google-maps-api/tets-app-showcase.png",
        title: "Yet Another App",
        description: "A powerful solution for everyday WWWWWWWWW WWWWWWWW WWWWWW aaaaaa aaaaaaaaa aaaaaa aaaa aaaaa aaa aaaaaa aaaa aaaaaaaaaaa aaaaaaawwwww wwwww wwwwwwwww wwwwwww wwwwwWWW WWWWW WWWWWWWWWWW WWWWWW WWWW WWWWWWWWW WWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWWW WWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWWWWW WWWW WWWWWWW WWWWWWWW WWW WWWWWWWW WWWWWW aaaaaaaaa aaaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaaaawww wwwwwww wwww wwwwwwwwwwww wwwww WWWWWWWW WWWWWWW WWWWWWWWWW WWWW WWWWWWWW WWWWWWWW WWWWWWWWWWW WWWWW WWWWWWWWWW WWWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWW WWWWWWWWWWWWWW WWWWWWWWW WWWWW WWWWW WWWWWWWWW WWWW WWWWWWWWWWWWWW aaaaaaaaaa aaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaa aawwwwwwwwww wwwwwwwwwwwwwwww wwwwwWW WWWWWW WWWWWWWWW WWWWWWWW WWWW WWWWWW WWWWWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWW WWWWWW WWWWW WWWWWW WWWWWW WWWWWWWWW WWWWWWWW WWWWWWW WWWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWW WWWWW WWWWWWWWWW WWWWWWWW WWW WWWWWWWWWWWs.<br><br>Developed using Flutter and integrated with Firebase for real-time data.",
        buttonLink: "project3.html"
    }
];

const projectsContainer = document.getElementById('projects-container');

let allProjectsHtml = ""

projects.forEach(project => {
    allProjectsHtml += `
        <article class="project-element">
            <img src="${project.img}" alt="${project.title}">
            <span style="width: 50px;"></span>
            <article>
                <section>
                    <h3 class="font-size-3">${project.title}</h3>
                    <p class="font-size-5">${project.description}</p>
                </section>
                <button class="font-size-5" id="${project.buttonLink}">Read more</button>
            </article>
        </article>
    `;
    if (project!=projects[projects.length-1]) {allProjectsHtml+=`<hr class="project-hr"></hr>`;}
});

projectsContainer.innerHTML = allProjectsHtml + projectsContainer.innerHTML;

projects.forEach ((project) => {
    document.getElementById(project.buttonLink).addEventListener("click", () => {window.location.href = project.buttonLink;});
})

function adjustMinHeight() {
    const projectsHtml = document.querySelectorAll('.project');
    projectsHtml.forEach ((project) => {
        const textHeight = project.scrollHeight.toFixed;
        project.style.minHeight = `${textHeight}px`;
    });
}

window.addEventListener('load', adjustMinHeight);
window.addEventListener('resize', adjustMinHeight);