#!/bin/bash

# Print instructions
echo "========================================"
echo "PrintMaster Deployment Script for Railway"
echo "========================================"
echo ""
echo "This script will help you deploy your PrintMaster website to Railway."
echo "Make sure you have already installed the Railway CLI and logged in."
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Railway CLI is not installed. Would you like to install it? (y/n)"
    read install_railway
    
    if [ "$install_railway" = "y" ] || [ "$install_railway" = "Y" ]; then
        npm install -g @railway/cli
    else
        echo "Please install Railway CLI manually and try again."
        echo "You can install it with: npm install -g @railway/cli"
        exit 1
    fi
fi

# Check if user is logged in to Railway
echo "Checking Railway login status..."
railway whoami > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "You are not logged in to Railway. Please log in now."
    railway login
fi

# Build the project
echo "Building the project..."
npm run build

# Deploy to Railway
echo "Deploying to Railway..."
echo "If this is your first time deploying, you'll need to link to a project."
echo "You can either create a new project or link to an existing one."
echo ""

# Check if linked to a project
railway list > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Initializing Railway project..."
    railway init
fi

# Deploy
echo "Deploying the application..."
railway up

echo ""
echo "========================================"
echo "Deployment completed!"
echo "Check your Railway dashboard for the deployment status and URL."
echo "========================================" 