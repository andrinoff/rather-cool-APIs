document.addEventListener('DOMContentLoaded', () => {
  const contentContainer = document.getElementById('readme-content');
  const owner = 'andrinoff';
  const repo = 'rather-cool-APIs';

  // --- Theme Switcher Logic ---
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  const applyTheme = (isDarkMode) => {
    body.classList.toggle("dark-mode", isDarkMode);
    themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";
  };

  const loadTheme = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    applyTheme(isDarkMode);
  };

  themeSwitcher.addEventListener("click", () => {
    const isDarkMode = !body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    applyTheme(isDarkMode);
  });

  // Initial theme load
  loadTheme();

  // Get the API name from the URL path
  const pathParts = window.location.pathname.split('/');
  const apiName = pathParts.find(part => part && part !== 'docs');


  async function fetchAndDisplayReadme() {
    if (!apiName) {
      contentContainer.innerHTML = '<div class="loading"><h2>Could not determine API name from URL.</h2></div>';
      return;
    }

    const readmeUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/api/${apiName}/readme.md`;

    try {
      const response = await fetch(readmeUrl);
      if (!response.ok) {
        throw new Error(`README not found (Status: ${response.status})`);
      }
      const markdown = await response.text();

      contentContainer.innerHTML = marked.parse(markdown);
      const pageTitle = contentContainer.querySelector('h1');
      if (pageTitle) {
        document.title = `${pageTitle.textContent} - Docs`;
      } else {
        document.title = `${apiName.replace(/-/g, ' ')} Docs`;
      }

    } catch (error) {
      console.error('Error fetching README:', error);
      contentContainer.innerHTML = `
                <div class="loading">
                    <h2>Error 404</h2>
                    <p>Could not load documentation for <strong>${apiName}</strong>.</p>
                </div>`;
    }
  }

  fetchAndDisplayReadme();
});
