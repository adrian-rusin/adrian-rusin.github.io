const projects = [
    {
        img: "images/project-images/exam-routes-driving-test-app/exam_routes_driving_test_practice_app_showcase.png",
        title: "Exam Routes – Driving Test Practice App",
        description: "Exam Routes is a feature-rich driving test preparation app designed to help users practice using real-world driving test routes.<br><br>I joined the project to modernize the codebase, implement a full UI overhaul based on provided Figma designs, fix bugs, and add new features like a quiz system with Firebase integration.<br><br>This project strengthened my experience in working with existing designs, app refactoring, Firebase backend integration, and maintaining large-scale apps.",
        buttonLink: "projects_screens/driving_test_practice_app.html"
    },
    {
        img: "images/project-images/service-booking-app/service_booking_app_showcase.png",
        title: "Service Booking App",
        description: "Time To is a Flutter-based mobile application that enables users to book services through a simple and intuitive interface.<br><br>The app was developed as a mobile version of an existing web platform, requiring robust API integration, bilingual support, and real-time notification handling.<br><br>This project enhanced my experience in building production-grade apps with user-focused features, seamless backend connectivity, and clean UI/UX workflows.",
        buttonLink: "projects_screens/service_booking_app.html"
    },
    {
        img: "images/project-images/tripbuddy/tripbuddy_webview_background_location_tracking_app_showcase.png",
        title: "TripBuddy – WebView Background Location Tracking App",
        description: "TripBuddy is a cross-platform Flutter application designed to run efficiently on Android and iOS. It embeds a WebView to display a live map interface from maproute.com and integrates advanced location tracking using a JavaScript bridge.<br><br>This project focused on enabling real-time location updates even when the app is in the background or the screen is off—while ensuring battery and processor efficiency.<br><br>I also supported the iOS adaptation and assisted with the deployment of the updated TripBuddy app to the App Store.<br><br>",
        buttonLink: "projects_screens/webview_background_location_tracking_app.html"
    },
    // {
    //     img: "images/projects-images/google-maps-api-app/google_maps_api_app.png",
    //     title: "Yet Another App",
    //     description: "A powerful solution for everyday WWWWWWWWW WWWWWWWW WWWWWW aaaaaa aaaaaaaaa aaaaaa aaaa aaaaa aaa aaaaaa aaaa aaaaaaaaaaa aaaaaaawwwww wwwww wwwwwwwww wwwwwww wwwwwWWW WWWWW WWWWWWWWWWW WWWWWW WWWW WWWWWWWWW WWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWWW WWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWWWWWW WWWWWWWWWWWWW WWWW WWWWWWW WWWWWWWW WWW WWWWWWWW WWWWWW aaaaaaaaa aaaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaaaawww wwwwwww wwww wwwwwwwwwwww wwwww WWWWWWWW WWWWWWW WWWWWWWWWW WWWW WWWWWWWW WWWWWWWW WWWWWWWWWWW WWWWW WWWWWWWWWW WWWWWWW WWWWWWWWWWW WWWWWWWWWW WWWWW WWWWWWWWWWWWWWWWW WWWWWWWWWW WWWWWWWWWWWWWW WWWWWWWWW WWWWW WWWWW WWWWWWWWW WWWW WWWWWWWWWWWWWW aaaaaaaaaa aaaaa aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaa aaaaaaa aaaaa aawwwwwwwwww wwwwwwwwwwwwwwww wwwwwWW WWWWWW WWWWWWWWW WWWWWWWW WWWW WWWWWW WWWWWWWWWW WWWWWWW WWWWWWWWW WWWWWWWWWWW WWWWWW WWWWW WWWWWW WWWWWW WWWWWWWWW WWWWWWWW WWWWWWW WWWWWWWWWWWW WWWWWWWWWW WWWWWW WWWWWWW WWWWW WWWWWWWWWW WWWWWWWW WWW WWWWWWWWWWWs.<br><br>Developed using Flutter and integrated with Firebase for real-time data.",
    //     buttonLink: "projects_screens/service_booking_app.html"
    // }
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