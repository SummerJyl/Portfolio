The Lesson: Relative paths (./) break on subfolder-hosted sites like GitHub Pages.

Problem: Images 404 because the browser looks at the root instead of the project folder.

Solution: Prefix assets with the repository name or use absolute paths from the public root.

Snippet: imgSrc: '/Portfolio/screenshots/project.png'