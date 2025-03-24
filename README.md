# PrintMaster - Food Packaging Printing Website

A simple Next.js website for a printing business focusing on food packaging products. This website allows customers to browse products, add them to their cart, and customize their orders.

## Features

- Responsive design with Tailwind CSS
- Product catalog with categories and filtering options
- Product detail pages with customization options
- Shopping cart functionality
- Clean, modern UI

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Context for state management

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploying to Railway

### Prerequisites

1. A Railway account
2. The Railway CLI installed (optional but recommended)

### Steps to Deploy

#### Option 1: Using the Railway CLI

1. Install the Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Link your project to Railway:
   ```bash
   railway init
   ```

4. Deploy your project:
   ```bash
   railway up
   ```

#### Option 2: Using the Railway Dashboard

1. Go to [Railway.app](https://railway.app) and log in
2. Create a new project
3. Select "Deploy from GitHub repo"
4. Connect your GitHub account and select your repository
5. Configure the deployment settings:
   - Framework preset: Next.js
   - Start command: `npm run start`
   - No environment variables are required for this simplified version

6. Deploy the project

## License

This project is licensed under the MIT License.
