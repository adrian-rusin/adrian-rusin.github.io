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
                if current_section == "Title" or current_section == "Images Path":
                    sections[current_section] += line + "\n"
                elif "<br><br>" in line:
                    sections[current_section] += line + "\n"
                else:
                    sections[current_section] += line + "<br><br>\n"
    
    image_path = sections["Images Path"]
    
    return sections, image_path

def generate_image_filename(image_path, section_name):
    # Convert section name to lowercase and replace spaces with underscores
    return os.path.join(image_path, section_name.lower().replace(" ", "_") + ".png")

def generate_main_image_filename(project_title, image_path):
    # Convert project title to lowercase and replace spaces with underscores, and append showcase
    return os.path.join(image_path, project_title.lower().replace(" ", "_") + "_showcase.png")

def generate_html(sections, output_filename, image_path):
    project_title = sections.get("Title", "Unnamed Project").split(".")[0]
    main_image_filename = generate_main_image_filename(project_title, image_path)
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{project_title}</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/style_mobile.css">
    <link rel="stylesheet" href="../styles/style_project_page.css">
</head>
<body>
    <section class="hero">
        <a href="javascript:history.back()" class="back-button"><img src="images/icons/arrow_back_white.png"></a>
        <img src="{main_image_filename}" alt="Project Main Image">
        <header>
            <h1 class="font-size-1">{project_title}</h1>
            <p class="font-size-5">{sections.get("Overview", "")}</p>
        </header>
        <img src="images/decorative-line-white.png" class="decorative-line">
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
        </section>
    </main>

    <footer>
        <p class="font-size-5">©2025 Designed and developed by You</p>
    </footer>
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
