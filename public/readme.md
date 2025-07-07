# Frontend Documentation (public/)

This directory contains all the files for the static frontend website that serves as the main entry point and documentation hub for the "Rather Cool APIs" project.

---

## 📂 File Structure

The `public` directory is organized into two main parts: the landing page and the dynamic documentation pages.

```
public/
│
├── index.html          # The main landing page that lists all available APIs.
├── script.js           # Main script for the landing page (fetches APIs, handles tabs).
├── style.css           # Main stylesheet for the landing page.
│
└── docs/
    ├── index.html      # HTML template for the dynamic documentation pages.
    ├── script.js       # Script to fetch and render a specific API's readme.md.
    └── style.css       # Stylesheet for the documentation pages.
```

-   **Root (`/`)**: The main page (`index.html`) dynamically fetches the list of APIs from the `/api` directory in the GitHub repository and displays them as interactive cards with usage examples.
-   **Docs (`/docs/`)**: This directory powers the dynamic documentation pages. The `vercel.json` rewrite rule `"/docs/:api*"` directs all requests to `/docs/index.html`. The `script.js` inside then fetches and renders the correct `readme.md` based on the URL.

## 🛠️ Technologies Used

The frontend is built with a focus on simplicity and performance, using vanilla technologies and a few external libraries.

-   **HTML5**: For the structure and content of the web pages.
-   **CSS3**: For all styling, including the light/dark theme and responsive design. We use CSS variables for easy theme management.
-   **JavaScript (ES6+)**: For all client-side logic, including:
    -   Fetching data from the GitHub API.
    -   Dynamically generating HTML content.
    -   Handling user interactions like tab switching and theme changes.
-   **Libraries**:
    -   **[highlight.js](https://highlightjs.org/)**: For syntax highlighting the code examples on the main page.
    -   **[Marked.js](https://marked.js.org/)**: For parsing Markdown from `readme.md` files and rendering it as HTML on the documentation pages.

## 🧑‍💻 How to Contribute

Contributions to the frontend are highly encouraged! If you have ideas for improving the design, fixing a bug, or enhancing functionality, please feel free to contribute.

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** to your local machine.
3.  **Make your changes** to the files within the `public` directory.
    -   For styling changes, edit `style.css` or `docs/style.css`.
    -   For functional changes, edit `script.js` or `docs/script.js`.
4.  **Test your changes locally** by running `vercel dev` from the root of the repository.
5.  **Commit your changes** with a clear and descriptive commit message.
6.  **Open a Pull Request** to the `master` branch of the original repository.

Thank you for helping make this project better!
