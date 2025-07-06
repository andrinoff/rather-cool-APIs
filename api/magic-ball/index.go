// EDIT ONLY answers VARIABLE!
package handler

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

// Handler is the main function for the Vercel serverless function.
// It returns a random Magic 8-Ball answer.
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers to allow requests from any origin.
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Handle preflight CORS requests.
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// A slice containing all possible Magic 8-Ball answers.
	answers := []string{
		// Affirmative Answers
		"It is certain.",
		"It is decidedly so.",
		"Without a doubt.",
		"Yes – definitely.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely.",
		"Outlook good.",
		"Yes.",
		"Signs point to yes.",

		// Non-Committal Answers
		"Reply hazy, try again.",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",

		// Negative Answers
		"Don't count on it.",
		"My reply is no.",
		"My sources say no.",
		"Outlook not so good.",
		"Very doubtful.",
	}

	// Seed the random number generator to ensure a different answer each time.
	rand.Seed(time.Now().UnixNano())

	// Select a random answer from the slice.
	randomAnswer := answers[rand.Intn(len(answers))]

	// Set the content type header and write the random answer to the response.
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	fmt.Fprint(w, randomAnswer)
}
