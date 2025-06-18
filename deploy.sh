#!/bin/bash

# Automate commit, push, and deploy

echo "Adding all changes..."
git add .

echo "Committing changes..."
read -m "Deploy updated build"
git commit -m "Deploy updated build"

echo "Pushing to main branch..."
git push origin main

echo "Running deployment script..."
npm run deploy

echo "Deployment complete! Check your GitHub Pages site."
