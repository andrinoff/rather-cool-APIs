# Contributing to Rather Cool APIs

First off, thank you for considering contributing! This project is built by the community, and we welcome any and all contributions. Your help is what makes this project great.

This document provides a set of guidelines for contributing to the "Rather Cool APIs" project.

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

---

## How to Contribute

We love new ideas for APIs! Whether it's something fun, useful, or just plain quirky, we'd love to see it.

Or, you can contribute by improving the documentation, fixing bugs, or enhancing the existing APIs by adding new responses (usually in `.txt` files).

### Getting Started

1.  **Fork the repository** on GitHub.
2.  **Create a new folder** inside the `/api` directory. The name of your folder will become the API endpoint. For example, a folder named `my-awesome-api` will be available at `/api/my-awesome-api`.
3.  **Add your serverless function code** inside your new folder. You can use Go, Python, or Node.js. Ensure your function is self-contained within its directory.
4.  **(Optional but Recommended)** Add a `favicon.ico` file to your folder. This will give your API a unique icon on the project website.
5.  **Commit your changes** with a clear and descriptive commit message.
6.  **Open a Pull Request** to the `master` branch of the original repository.

> [!WARNING]
> Please do not include `node_modules`, compiled binaries, or modify the root `.gitignore` file in your pull requests. Keep your changes focused on your new API.

### Running Your API Locally

Before submitting a pull request, you should test your API locally to make sure it works as expected. The project uses the Vercel CLI to simulate the production environment.

1.  **Clone your forked repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/rather-cool-APIs.git](https://github.com/YOUR_USERNAME/rather-cool-APIs.git)
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

### Pull Request Guidelines

When you open a pull request, please ensure your description is clear and includes:

* A brief explanation of what your API does.
* An example of the output.
* Any other notes or context that might be helpful for the review process.

Thank you for your contribution!



# Contributors:

@andrinoff
