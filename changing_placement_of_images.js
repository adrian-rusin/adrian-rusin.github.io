document.addEventListener("DOMContentLoaded", function () {
    function adjustProjectElements() {
        const elements = document.querySelectorAll(".project-element");

        elements.forEach((element, index) => {
            const img = element.querySelector("img");
            const textArticle = element.querySelector("article");
            const spacer = element.querySelector("span");

            if (!img || !textArticle) return;

            // Store initial order if not already stored
            if (!img.dataset.originalPosition) {
                img.dataset.originalPosition = index % 2 === 0 ? "left" : "right";
            }

            if (window.innerWidth <= 880) {
                // On small screen: all images on the left (before text)
                if (img.nextElementSibling !== textArticle) {
                    element.insertBefore(img, textArticle);
                }
                if (spacer) spacer.style.display = "none";
            } else {
                // On larger screen: restore original alternating layout
                if (img.dataset.originalPosition === "left") {
                    // image - spacer - text
                    if (spacer && spacer.nextElementSibling !== textArticle) {
                        element.insertBefore(img, spacer);
                    }
                    if (spacer) spacer.style.display = "inline-block";
                } else if (img.dataset.originalPosition === "right") {
                    // text - spacer - image
                    if (textArticle.nextElementSibling !== spacer) {
                        element.insertBefore(spacer, textArticle.nextSibling);
                    }
                    element.appendChild(img);
                    if (spacer) spacer.style.display = "inline-block";
                }
            }
        });
    }

    // Run on page load and resize
    adjustProjectElements();
    window.addEventListener("resize", adjustProjectElements);
});