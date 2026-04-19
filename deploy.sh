#!/bin/bash

# Automate commit, push, and deploy

echo "Adding all changes..."
git add .

echo "Enter commit message:"
read -r commit_message

echo "Committing changes..."
git commit -m "$commit_message"

echo "Pushing to main branch..."
git push origin main

echo "Building and deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Check: https://summerjyl.github.io/Portfolio/"