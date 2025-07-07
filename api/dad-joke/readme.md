# Dad Joke API

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![Vercel](https://img.shields.io/badge/Vercel-▲-black?logo=vercel)](https://vercel.com)

A simple, fun API that delivers a random dad joke. Perfect for when you need a good chuckle or a terrible pun.

---

## 🤔 What is it?

This is a lightweight, serverless API built with Python and designed for deployment on Vercel. It reads from a list of classic dad jokes and returns a random one every time you call it.

## 🚀 Usage

To get your random dad joke, simply send a `GET` request to the API endpoint.

**Endpoint:** `/api/dad-joke`

### Example Request

You can use `curl` or any HTTP client to make a request.

```bash
curl https://api.andrinoff.com/api/dad-joke
```

### Example Response

The API will return a random joke as a plain text response.

```
Why don't scientists trust atoms? Because they make up everything!
```

Or maybe...

```
I'm reading a book on anti-gravity. It's impossible to put down!
```

## 🧑‍💻 How to Contribute

Got more groan-worthy dad jokes? Contributions are welcome!

1.  **Fork** the repository.
2.  Add your new joke(s) to the `dad-joke/jokes.txt` file. Each joke should be on a new line.
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

The local server will start, and you can access the API at an address like `http://localhost:3000/api/dad-joke`.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/andrinoff/rather-cool-APIs/blob/master/LICENSE) file for details.
