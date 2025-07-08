# Bad Advice API

A delightfully pessimistic API that serves up wonderfully bad, cynical, and sarcastic advice. Perfect for when you need a dose of reality or a good reason to do nothing.

---

## 🤔 What is it?

This is a lightweight, serverless API built with **Go** and designed for deployment on Vercel. It reads from a list of over 1700 wonderfully negative "advices" and returns a random one every time you call it.

## 🚀 Usage

To get your random piece of bad advice, simply send a `GET` request to the API endpoint.

**Endpoint:** `/api/bad-advice`

### Example Request

You can use `curl` or any HTTP client to make a request.

```bash
curl https://api.andrinoff.com/api/bad-advice
```

### Example Response

The API will return a random piece of advice as a plain text response.

```
That light at the end of the tunnel is an oncoming train.
```

Or maybe...

```
If at first you don't succeed, destroy all evidence that you tried.
```

## 🧑‍💻 How to Contribute

Got more terribly unhelpful advice? Contributions are welcome!

1.  **Fork** the repository.
2.  Add your new advice to the `negativeAdvices` slice in the `api/bad-advice/index.go` file.
3.  Commit your changes and open a **Pull Request**.

## 🛠️ Running Locally

To run this project locally, you can use the Vercel CLI, which will replicate the serverless environment.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/andrinoff/rather-cool-APIs.git
    cd your-repo-name
    ```

You may skip the last 2 steps by running `make setup`

2.  **Install Vercel CLI:**

    ```bash
    npm i -g vercel
    ```

3.  **Run the development server:**

    ```bash
    vercel dev
    ```

The local server will start, and you can access the API at an address like `http://localhost:3000/api/bad-advice`.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
