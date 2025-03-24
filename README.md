# PrintMaster - Food Packaging Printing Website

A modern e-commerce web application for custom food packaging printing services, built with Next.js, PostgreSQL, and Tailwind CSS.

## Features

- Browse and filter food packaging products (Pizza Boxes, Burger Boxes, Paper Bags, Premium Napkins)
- Product detail pages with customization options
- Shopping cart functionality
- Checkout process
- Mobile-responsive design

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Deployment:** GitHub, Railway

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/printing-website.git
cd printing-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/printing_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

4. Initialize the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Database Setup on Railway

1. Create a new PostgreSQL database on Railway
2. Set the `DATABASE_URL` environment variable in your Railway project to the connection string provided by Railway

### Deploying to Railway

1. Push your code to GitHub
2. Connect your GitHub repository to Railway
3. Configure environment variables
4. Deploy the application

## Project Structure

- `/src/app`: Next.js app directory structure
- `/src/components`: Reusable React components
- `/src/lib`: Utilities and shared code
- `/prisma`: Prisma schema and migrations
- `/public`: Static assets

## License

MIT

## Contact

Your Name - your.email@example.com
