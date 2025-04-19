const projects = [
    {
        img: "images/projects-images/google-maps-api-app/google_maps_api_app.png",
        title: "Google Map API App",
        description: "Food Nearby is a Flutter-based mobile application that helps users discover nearby restaurants using the Google Maps and Places APIs.<br><br>The app retrieves a list of restaurants directly from Google Places, displaying them on an interactive map.<br><br>This project served as a hands-on opportunity to refine my skills in Flutter development, state management, and location-based services.",
        buttonLink: "projects_screens/google_maps_api_project.html"
    },
    {
        img: "images/projects-images/chat-app/chat_app.png",
        title: "Chat App",
        description: "Quick Message is a Flutter-based real-time chat application designed to provide instant messaging, voice and video calls, and user profile management.<br><br>Built using Firebase for backend support, it offers secure authentication, real-time messaging, and friend search functionality.<br><br>This project was a key learning experience for integrating Firebase services and handling real-time data efficiently in Flutter.",
        buttonLink: "projects_screens/chat_app_project.html"
    },
    {
        img: "images/projects-images/google-maps-api-app/google_maps_api_app.png",
        title: "Yet Another App",
        description: "A powerful solution for everyday WWWWWWWWW WWWWWWWW WWWWWW aaaaaa aaaaaaaaa aaaaaa aaaa aaaaa aaa aaaaaa aaaa aaaaaaaaaaa aaaaaaawwwww wwwww wwwwwwwww wwwwwww wwwwwWWW WWWWW WWWWWWWWWWW WWWWWW WWWW WWWWWWWWW WWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWWW WWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWWWWW WWWW WWWWWWW WWWWWWWW WWW WWWWWWWW WWWWWW aaaaaaaaa aaaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaaaawww wwwwwww wwww wwwwwwwwwwww wwwww WWWWWWWW WWWWWWW WWWWWWWWWW WWWW WWWWWWWW WWWWWWWW WWWWWWWWWWW WWWWW WWWWWWWWWW WWWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWW WWWWWWWWWWWWWW WWWWWWWWW WWWWW WWWWW WWWWWWWWW WWWW WWWWWWWWWWWWWW aaaaaaaaaa aaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaa aawwwwwwwwww wwwwwwwwwwwwwwww wwwwwWW WWWWWW WWWWWWWWW WWWWWWWW WWWW WWWWWW WWWWWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWW WWWWWW WWWWW WWWWWW WWWWWW WWWWWWWWW WWWWWWWW WWWWWWW WWWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWW WWWWW WWWWWWWWWW WWWWWWWW WWW WWWWWWWWWWWs.<br><br>Developed using Flutter and integrated with Firebase for real-time data.",
        buttonLink: "projects_screens/time_to_project.html"
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