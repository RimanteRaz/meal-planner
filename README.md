# Meal planner

Meal planner app I'm building with Laravel, Inertia.js and React.

## Prerequisites

- PHP 8.4+
- Composer
- Node.js 18+ and npm

## Installation

1. **Install dependencies**:

```bash
composer install
npm install
```

2. **Set up environment file**:

```bash
cp .env.example .env
```

3. **Generate application key**:

```bash
php artisan key:generate
```

4. **Run migrations** to set up the database:

```bash
php artisan migrate
```

## How to run the project

### Development

Start the development server with file watching for both PHP and JavaScript:

```bash
composer run dev
```

Or run these commands separately in different terminal windows:

- **PHP**: `php artisan serve`
- **Frontend build**: `npm run dev`

### Production Build

Build assets for production:

```bash
npm run build
```

### Testing

Run the test suite:

```bash
php artisan test --compact
```

## Project Structure

- **Backend**: Laravel API controllers in `app/Http/Controllers/`
- **Frontend**: React components and pages in `resources/js/`
- **Database**: Migrations in `database/migrations/` and models in `app/Models/`
- **Tests**: Feature and unit tests in `tests/`

## Accessing the Application

Once running via Laravel Herd, the application will be available at:

```
https://meal-planner.test
```
