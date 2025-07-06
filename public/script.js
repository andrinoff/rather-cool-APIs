document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Switcher Logic ---
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  // Function to apply the saved theme on load
  const loadTheme = () => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true";
    body.classList.toggle("dark-mode", isDarkMode);
    themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";
  };

  // Event listener for the theme switcher button
  themeSwitcher.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";
  });

  // --- Original API Fetching Logic ---
  /**
   * Formats a folder name into a display-friendly API name.
   * e.g., "dad-joke" -> "Dad Joke API"
   * @param {string} folderName - The name of the folder.
   * @returns {string} The formatted API name.
   */
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

  /**
   * Fetches a live preview from the API endpoint.
   * @param {string} url - The URL of the API endpoint.
   * @returns {Promise<string>} The text content from the API response.
   */
  async function fetchApiPreview(url) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        return `Preview not available (Status: ${response.status}).`;
      return await response.text();
    } catch (error) {
      console.error(
        `Error fetching preview for ${url}:`,
        error,
      );
      return "Could not fetch preview.";
    }
  }

  /**
   * Main function to fetch repository contents and build the API list.
   */
  async function fetchAndDisplayApis() {
    const apiContainer =
      document.getElementById("api-container");
    const owner = "andrinoff";
    const repo = "rather-cool-apis";
    const path = "api";
    const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const baseURL = "https://api.andrinoff.com/api/";

    try {
      const response = await fetch(githubApiUrl);
      if (!response.ok) {
        throw new Error(
          `GitHub API request failed: ${response.status}`,
        );
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
        const iconURL = `https://raw.githubusercontent.com/${owner}/${repo}/refs/master/${path}/${folderName}/favicon.ico`;

        const pythonCode = `import requests\n\nresponse = requests.get("${endpointURL}")\nprint(response.text)`;
        const javascriptCode = `fetch("${endpointURL}")\n  .then(response => response.text())\n  .then(data => console.log(data));`;
        const goCode = `package main\n\nimport (\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n)\n\nfunc main() {\n\tresp, err := http.Get("${endpointURL}")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}`;

        const apiSection = document.createElement("div");
        apiSection.className = "api-section";
        apiSection.innerHTML = `
                <h2>
                    <img src="${iconURL}" alt="API icon">
                    ${apiName}
                </h2>
                <p><strong>Endpoint:</strong> <a href="${endpointURL}" target="_blank" rel="noopener noreferrer">${endpointURL}</a></p>
                <h3>Usage Examples</h3>
                <div class="tabs">
                    <button class="tab-button active" data-tab="python-${index}">Python</button>
                    <button class="tab-button" data-tab="js-${index}">JavaScript</button>
                    <button class="tab-button" data-tab="go-${index}">Go</button>
                </div>
                <div id="python-${index}" class="tab-content active"><div class="code-block">${pythonCode}</div></div>
                <div id="js-${index}" class="tab-content"><div class="code-block">${javascriptCode}</div></div>
                <div id="go-${index}" class="tab-content"><div class="code-block">${goCode}</div></div>
                <h3>Live Output Preview</h3>
                <div class="output-preview" id="preview-${index}">Fetching preview...</div>
            `;
        apiContainer.appendChild(apiSection);

        // Fetch and display the live preview
        const previewText =
          await fetchApiPreview(endpointURL);
        document.getElementById(
          `preview-${index}`,
        ).textContent = previewText;
      }
    } catch (error) {
      console.error("Error initializing page:", error);
      apiContainer.innerHTML = `<div class="error">⚠️ Could not load APIs from GitHub. Check the console for details.</div>`;
    }
  }

  // New, more robust tab switching using event delegation
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
