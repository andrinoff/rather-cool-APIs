# Rather Cool APIs

    
<img src ="public/favicon.ico" height="200px">

![GitHub repo size](https://img.shields.io/github/repo-size/andrinoff/rather-cool-APIs)
![GitHub last commit](https://img.shields.io/github/last-commit/andrinoff/rather-cool-APIs)

[![Vercel](https://img.shields.io/badge/Vercel-▲-black?logo=vercel)](https://api.andrinoff.com)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A curated collection of simple, fun, and open-source serverless APIs built for everyone to use. This project is designed to be a community-driven repository of interesting and useful micro-services.

---

## 🚀 API Documentation & Endpoints

Why maintain a static list here when you can see them all live? For a full, dynamically-updated list of all available APIs, usage examples, and live previews, please visit our official documentation website:

**[api.andrinoff.com](https://api.andrinoff.com)**

The website automatically scans the repository and displays every API available, so you'll always have the most up-to-date information.

## 🧑‍💻 How to Contribute

Got a fun idea for an API? Contributions are highly encouraged!

1.  **Fork** the repository.
2.  Create a new folder inside the `/api` directory. The name of your folder will become the API endpoint (e.g., a folder named `my-awesome-api` will be available at `/api/my-awesome-api`).
3.  Add your serverless function code inside your new folder. You can use Go, Python, or Node.js.
4.  Add a `favicon.ico` file to your folder to give it a unique icon on the website.
5.  Commit your changes and open a **Pull Request**.

> [!WARNING]
> First, see [CONTRIBUTING.md](CONTRIBUTING.md) <br />
> Please do not include `node_modules` or modify the root `.gitignore` file in your pull requests.

## 🛠️ Running Locally

To test your API locally before creating a pull request, you can use the Vercel CLI.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/andrinoff/rather-cool-APIs.git](https://github.com/andrinoff/rather-cool-APIs.git)
    cd rather-cool-APIs
    ```

2.  **Install the Vercel CLI:**
    ```bash
    npm i -g vercel
    ```

3.  **Run the local development server:**
    ```bash
    vercel dev
    ```

The local server will start, and you can access your new API at an address like `http://localhost:3000/api/your-api-name`.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
