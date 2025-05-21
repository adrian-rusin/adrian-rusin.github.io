import os
import sys

def read_text_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

def parse_content(content):
    lines = content.strip().split("\n")
    sections = {}
    current_section = "Overview"
    sections[current_section] = ""    
    for line in lines:
        if line.strip():
            if line.endswith(":"):
                current_section = line[:-1]
                sections[current_section] = ""
            else:
                if current_section == "Title":
                    sections[current_section] += line + "\n"
                elif current_section == "Images Path" or current_section == "Description":
                    sections[current_section] += line
                elif "<br><br>" in line:
                    sections[current_section] += line + "\n"
                else:
                    sections[current_section] += line + "<br><br>\n"
    
    image_path = "../"+sections["Images Path"]
    
    return sections, image_path

def generate_image_filename(image_path, section_name):
    # Convert section name to lowercase and replace spaces with underscores
    return image_path + section_name.lower().replace(" ", "_") + ".png"

def generate_main_image_filename(project_title, image_path):
    # Convert project title to lowercase and replace spaces with underscores, and append showcase
    return image_path + project_title.lower().replace(" ", "_") + "_showcase.png"

def generate_html(sections, output_filename, image_path):
    project_title = sections.get("Title", "Unnamed Project").split(".")[0]
    main_image_filename = generate_main_image_filename(project_title, image_path)
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{project_title} - Adrian Rusin</title>
    <meta name="description" content="{sections.get("Description", "")}"/>
    
    <meta property="og:title" content="{project_title} - Adrian Rusin" />
    <meta property="og:description" content="{sections.get("Description", "")}" />
    <meta property="og:image" content="{main_image_filename}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://adrian-rusin.github.io/projects_screens/{output_filename}" />
    
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/style_mobile.css">
    <link rel="stylesheet" href="../styles/style_project_page.css">
    
    <link rel="icon" href="../images/icons/favicon.ico">
</head>
<body>
    <section class="hero">
        <a href="javascript:history.back()" class="back-button"><img src="../images/icons/arrow_back_white.png"></a>
        <img src="{main_image_filename}" alt="{project_title} Main Image">
        <header>
            <h1 class="font-size-1">{project_title}</h1>
            <p class="font-size-5">{sections.get("Overview", "")}</p>
        </header>
        <img src="../images/decorative-line-white.png" class="decorative-line">
    </section>

    <main class="projects">
        <h2 class="font-size-1">App description</h2>
        <section id="projects-container">
"""
    
    section_count = 0
    for section, content in sections.items():
        if section != "Overview" and section != "Title" and section != "Images Path":
            image_filename = generate_image_filename(image_path, section)
            if section_count % 2 == 0:
                html_content += f"""
            <article class="project-element">
                <img src="{image_filename}" alt="{section} image">
                <span style="width: 50px;"></span>
                <article>
                    <section>
                        <h3 class="font-size-3">{section}</h3>
                        <p class="font-size-5">{content}</p>
                    </section>
                </article>
            </article>"""
            else:
                html_content += f"""
            <article class="project-element">
                <article>
                    <section>
                        <h3 class="font-size-3">{section}</h3>
                        <p class="font-size-5">{content}</p>
                    </section>
                </article>
                <span style="width: 50px;"></span>
                <img src="{image_filename}" alt="{section} image">
            </article>"""
            section_count += 1
    
    html_content += """
        <a href="../all_projects.html" class="font-size-4"><h3>See more projects <img src="images/icons/arrow_back.png" style="width: 20px; transform: rotate(180deg);"></h3></a>
        </section>
    </main>

    <section class="contact">
        <hr>
        <article>
            <section class="contact-mail-section">
                <h2 class="font-size-4">Contact me</h2>
                <p class="font-size-5">E-mail: <a href="mailto:adrianrusin100@gmail.com" target="_blank" class="email-text">adrianrusin100@gmail.com</a></p>
            </section>
            <div></div>
            <nav>
                <a href="mailto:adrianrusin100@gmail.com" target="_blank" class="email-icon contact-nav"></a>
                <a href="https://www.linkedin.com/in/adrian-rusin/" target="_blank" class="linkedin-icon contact-nav"></a>
                <a href="https://www.fiverr.com/sellers/innarq07" target="_blank" class="fiverr-icon contact-nav"></a>
            </nav>
        </article>
        <hr>
    </section>

    <footer>
        <p class="font-size-6">©2025 Designed and developed by <a href="../index.html" class="name-in-footer">Adrian Rusin</a></p>
    </footer>
    
    <script src="../changing_placement_of_images.js"></script>
</body>
</html>"""
    
    with open(output_filename, "w", encoding="utf-8") as file:
        file.write(html_content)
    print(f"Generated {output_filename}")

def main(file_path):
    if file_path.endswith(".txt"):
        content = read_text_file(file_path)
    else:
        print("Unsupported file format.")
        return
    
    sections, image_path = parse_content(content)
    output_filename = os.path.splitext(file_path)[0] + ".html"
    generate_html(sections, output_filename, image_path)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_html.py <file.txt>")
    else:
        main(sys.argv[1])
