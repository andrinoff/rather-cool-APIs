# Magic 8-Ball API

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/badge/Go-1.18+-blue.svg)](https://go.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-▲-black?logo=vercel)](https://vercel.com)

A simple, fun API that provides a random Magic 8-Ball answer to your most pressing questions.

---

## 🤔 What is it?

This is a lightweight, serverless API built with Go and designed for deployment on Vercel. It returns a random, classic Magic 8-Ball response every time you call it.

## 🚀 Usage

To get your random answer, simply send a `GET` request to the API endpoint.

**Endpoint:** `/api/magic-ball`

### Example Request

You can use `curl` or any HTTP client to make a request.

```bash
curl [https://api.andrinoff.com/api/magic-ball](https://api.andrinoff.com/api/magic-ball)
```

### Example Response

The API will return a random answer as a plain text response.

```
It is certain.
```

Or maybe...

```
Don't count on it.
```

## 🧑‍💻 How to Contribute

Have ideas for more answers? Contributions are welcome!

1.  **Fork** the repository.
2.  Add your new answer(s) to the `answers` slice within the `magic-ball/index.go` file.
3.  Commit your changes and open a **Pull Request**.

> [!WARNING]
> Do NOT open PR's with node_modules or .gitignore added.

## 🛠️ Running Locally

To run this project locally, you can use the Vercel CLI, which will replicate the serverless environment.

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/andrinoff/rather-cool-APIs.git](https://github.com/andrinoff/rather-cool-APIs.git)
    cd rather-cool-APIs
    ```

2.  **Install Vercel CLI:**

    ```bash
    npm i -g vercel
    ```

3.  **Run the development server:**

    ```bash
    vercel dev
    ```

The local server will start, and you can access the API at an address like `http://localhost:3000/api/magic-ball`.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/andrinoff/rather-cool-APIs/blob/master/LICENSE) file for details.
