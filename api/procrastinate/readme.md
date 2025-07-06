# Procrastinate API

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/badge/Go-1.18+-blue.svg)](https://go.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-▲-black?logo=vercel)](https://vercel.com)

A simple, fun API that gives you a random excuse to procrastinate. Because sometimes you just need a reason to put things off until tomorrow.

---

## 🤔 What is it?

This is a lightweight, serverless API built with Go and designed for deployment on Vercel. It reads from a list of classic procrastination excuses and returns a random one every time you call it.

## 🚀 Usage

To get your random excuse, simply send a `GET` request to the API endpoint.

**Endpoint:** `/api/procrastinate`

### Example Request

You can use `curl` or any HTTP client to make a request.

```bash
curl https://api.andrinoff.com/api/procrastinate
```

### Example Response

The API will return a random reason as a plain text response.

```
You work better under pressure anyway.
```

Or maybe...

```
You should probably clean your entire house before you start.
```

## 🧑‍💻 How to Contribute

Got more great excuses? Contributions are welcome!

1. **Fork** the repository.
2. Add your new reason(s) to the `procrastinate/reasons.txt` file. Each reason should be on a new line.
3. Commit your changes and open a **Pull Request**.

> [!WARNING]
> Do NOT open PR's with node_modules or .gitignore added.

## 🛠️ Running Locally

To run this project locally, you can use the Vercel CLI, which will replicate the serverless environment.

1. **Clone the repository:**

    ```bash
    git clone https://github.com/andrinoff/rather-cool-APIs.git
    cd rather-cool-APIs/api/procrastinate
    ```

2. **Install Vercel CLI:**

    ```bash
    npm i -g vercel
    ```

3. **Run the development server:**

    ```bash
    vercel dev
    ```

The local server will start, and you can access the API at an address like `http://localhost:3000/api/reason`.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
