document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Switcher Logic (remains the same) ---
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;
  const lightHljsTheme = document.getElementById("hljs-light-theme");
  const darkHljsTheme = document.getElementById("hljs-dark-theme");

  const applyTheme = (isDarkMode) => {
    body.classList.toggle("dark-mode", isDarkMode);
    themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";
    darkHljsTheme.disabled = !isDarkMode;
    lightHljsTheme.disabled = isDarkMode;
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

  // --- Updated API Fetching Logic ---
  function formatApiName(folderName) {
    return (
      folderName
        .split("-")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1),
        )
        .join(" ") + " API"
    );
  }

  async function fetchAndDisplayApis() {
    const apiContainer = document.getElementById("api-container");
    const owner = "andrinoff";
    const repo = "rather-cool-apis";
    const path = "api";
    const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const baseURL = "https://api.andrinoff.com/api/";

    try {
      const response = await fetch(githubApiUrl);
      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
      }
      const contents = await response.json();
      const apiDirs = contents.filter(
        (item) => item.type === "dir",
      );

      apiContainer.innerHTML = ""; // Clear loading message

      if (apiDirs.length === 0) {
        apiContainer.innerHTML =
          '<div class="error">No API folders found.</div>';
        return;
      }

      for (const [index, dir] of apiDirs.entries()) {
        const folderName = dir.name;
        const apiName = formatApiName(folderName);
        const endpointURL = `${baseURL}${folderName}`;
        const docsURL = `/docs/${folderName}`;
        const iconURL = `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}/${folderName}/favicon.ico`;

        // Usage examples code
        const pythonCode = `import requests\n\nresponse = requests.get("${endpointURL}")\nprint(response.text)`;
        const javascriptCode = `fetch("${endpointURL}")\n  .then(response => response.text())\n  .then(data => console.log(data));`;
        const goCode = `package main\n\nimport (\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n)\n\nfunc main() {\n\tresp, err := http.Get("${endpointURL}")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}`;

        const apiSection = document.createElement("div");
        apiSection.className = "api-section";
        apiSection.innerHTML = `
            <h2>
                <img src="${iconURL}" alt="API icon" onerror="this.style.display='none'">
                ${apiName}
            </h2>
            <p><strong>Endpoint:</strong> <a href="${endpointURL}" target="_blank" rel="noopener noreferrer">${endpointURL}</a></p>

            <h3>Usage Examples</h3>
            <div class="tabs">
                <button class="tab-button active" data-tab="python-${index}">Python</button>
                <button class="tab-button" data-tab="js-${index}">JavaScript</button>
                <button class="tab-button" data-tab="go-${index}">Go</button>
            </div>
            <div id="python-${index}" class="tab-content active"><pre><code class="language-python">${pythonCode}</code></pre></div>
            <div id="js-${index}" class="tab-content"><pre><code class="language-javascript">${javascriptCode}</code></pre></div>
            <div id="go-${index}" class="tab-content"><pre><code class="language-go">${goCode}</code></pre></div>
            <h1>Live preview:</h1>
            <iframe src="${endpointURL}" class="api-preview" title="${apiName} Preview"></iframe>
            <a href="${docsURL}" class="docs-button">View Full Docs</a>
        `;
        apiContainer.appendChild(apiSection);
      }

      // Apply syntax highlighting to all code blocks
      hljs.highlightAll();

    } catch (error) {
      console.error("Error initializing page:", error);
      apiContainer.innerHTML = `<div class="error">⚠️ Could not load APIs from GitHub. Check the console for details.</div>`;
    }
  }

  // Event delegation for tab switching
  document
    .getElementById("api-container")
    .addEventListener("click", (event) => {
      if (event.target.matches(".tab-button")) {
        const button = event.target;
        const tabId = button.dataset.tab;
        const apiSection = button.closest(".api-section");

        apiSection
          .querySelectorAll(".tab-content")
          .forEach((c) => c.classList.remove("active"));
        apiSection
          .querySelectorAll(".tab-button")
          .forEach((b) => b.classList.remove("active"));

        apiSection
          .querySelector(`#${tabId}`)
          .classList.add("active");
        button.classList.add("active");
      }
    });

  // Initial calls
  loadTheme();
  fetchAndDisplayApis();
});
