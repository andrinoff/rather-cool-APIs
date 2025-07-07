# Makefile for Rather Cool APIs

# Define shell for compatibility
SHELL := /bin/bash

# ==============================================================================
#  TARGETS
# ==============================================================================

.PHONY: help setup test clean

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  help      Show this help message."
	@echo "  setup     Initialize the project: create package.json, install Vercel CLI, and create .gitignore."
	@echo "  test      Run a Vercel build to verify that all APIs and the frontend can be assembled."
	@echo "  clean     Remove build artifacts and installed node modules."

# Target to set up the development environment
setup:
	@echo "--- Setting up project ---"
	@# Initialize a package.json file if it doesn't exist
	@if [ ! -f package.json ]; then \
		echo "-> Initializing npm project..."; \
		npm init -y; \
	else \
		echo "-> package.json already exists, skipping npm init."; \
	fi

	@# Install Vercel CLI
	@echo "-> Installing Vercel CLI..."
	@npm install --global vercel

	@# Create .gitignore file if it doesn't exist
	@if [ ! -f .gitignore ]; then \
		echo "-> Creating .gitignore file..."; \
		echo "# Vercel build output" > .gitignore; \
		echo ".vercel/" >> .gitignore; \
		echo "" >> .gitignore; \
		echo "# Node.js dependencies" >> .gitignore; \
		echo "node_modules/" >> .gitignore; \
		echo "" >> .gitignore; \
		echo "# Log files" >> .gitignore; \
		echo "npm-debug.log*" >> .gitignore; \
		echo "yarn-debug.log*" >> .gitignore; \
		echo "yarn-error.log*" >> .gitignore; \
		echo "" >> .gitignore; \
		echo "# OS-specific files" >> .gitignore; \
		echo ".DS_Store" >> .gitignore; \
		echo "Thumbs.db" >> .gitignore; \
	else \
		echo "-> .gitignore already exists, skipping creation."; \
	fi
	@echo "--- Setup complete ---"

# Target to test the build process
test:
	@echo "--- Running build verification test ---"
	@# The Vercel CLI requires a dummy project config to run a local build
	@mkdir -p .vercel
	@echo '{"projectId": "prj_placeholder", "orgId": "team_placeholder"}' > .vercel/project.json
	@# Run the build command. This will fail if any part of the project is broken.
	@vercel build
	@echo "--- Build verification successful ---"

# Target to clean up the project directory
clean:
	@echo "--- Cleaning up project directory ---"
	@rm -rf .vercel
	@rm -rf node_modules
	@echo "--- Cleanup complete ---"
