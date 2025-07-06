package handler

import (
	"embed"
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"time"
)

var reasonsFS embed.FS

func Handler(w http.ResponseWriter, r *http.Request) {
	// --- CORS Headers ---
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}
	// --- End CORS Headers ---

	// rand.Seed is deprecated. Use the new method in Go 1.20+ for better practice.
	// For older versions, your original code is fine.
	// rgen := rand.New(rand.NewSource(time.Now().UnixNano())) // More modern approach
	rand.Seed(time.Now().UnixNano()) // Sticking to original for compatibility

	// Read the reasons from the embedded file.
	reasons, err := readReasons("reasons.txt")
	if err != nil {
		http.Error(w, "Could not read reasons file", http.StatusInternalServerError)
		return
	}

	if len(reasons) == 0 {
		http.Error(w, "No reasons found", http.StatusInternalServerError)
		return
	}

	// Select a random reason.
	// randomReason := reasons[rgen.Intn(len(reasons))] // Modern approach
	randomReason := reasons[rand.Intn(len(reasons))]

	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	fmt.Fprintln(w, randomReason)
}

// readReasons now reads from the embedded file system.
func readReasons(filePath string) ([]string, error) {
	// Read the file from the embedded FS.
	fileBytes, err := reasonsFS.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	// Split the file content by newlines and return as a slice of strings.
	// This also handles potential empty lines better.
	return strings.Split(string(fileBytes), "\n"), nil
}
