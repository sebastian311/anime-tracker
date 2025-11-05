# AnimeTracker

A modern, responsive web application for tracking and discovering anime series. Built with Angular 16 and Material Design.

## 🚀 Features

### Implemented Features
- **Responsive Design**: Mobile-first approach with dedicated desktop views
- **Landing Page**: Attractive landing page with hero section and feature highlights
- **Browse Anime**: Browse anime collections in horizontal carousels
- **Search Functionality**: Real-time search with autocomplete and debouncing
- **Anime Details**: Comprehensive detail pages with ratings, rankings, and information
- **Reviews System**: View and read user reviews for each anime
- **User Registration**: Form validation with email verification and password requirements
- **Device Detection**: Automatic layout adjustment based on device type

### UI Components
- ✅ Responsive Navbar (Mobile & Desktop)
- ✅ Side Navigation Menu
- ✅ Carousel Component
- ✅ Card Component
- ✅ Landing Page
- ✅ Home Page
- ✅ Anime Detail Page
- ✅ Reviews Page
- ✅ Registration Page

## 🛠️ Technology Stack

- **Framework**: Angular 16.2.0
- **Language**: TypeScript 5.1.3
- **UI Library**: Angular Material 16.2.4
- **Icons**: Boxicons 2.1.4
- **Device Detection**: ngx-device-detector 6.0.2
- **Reactive Programming**: RxJS 7.8.0
- **Styling**: SCSS with custom variables

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI (v16.2.0)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anime-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

## 📁 Project Structure

```
src/app/
├── smart-components/          # Page-level components
│   ├── home/                 # Main home page
│   ├── landing-page/         # Desktop landing page
│   ├── register/             # User registration
│   ├── anime-detail/         # Anime detail page
│   └── anime-reviews/        # Anime reviews page
│
├── shared-library/           # Shared components and services
│   ├── components/
│   │   ├── card/            # Reusable card component
│   │   ├── carousel/        # Carousel component
│   │   ├── image-section/   # Hero image section
│   │   └── navbar/          # Navigation components
│   │       └── side-menu/   # Side navigation menu
│   │
│   ├── services/
│   │   ├── anime-tracker.service.ts    # Main data service
│   │   ├── auth.service.ts             # Authentication service (placeholder)
│   │   └── fake-backend.interceptor.ts # Mock API interceptor
│   │
│   ├── models/
│   │   └── anime.interface.ts          # Data models
│   │
│   └── mock/
│       └── mocked-data.ts               # Mock data for development
│
└── app-routing.module.ts     # Application routes
```

## 🎨 Key Features Details

### Search & Filter
- Debounced search input (300ms)
- Real-time autocomplete suggestions
- Filter anime by title
- RxJS operators: `debounceTime`, `distinctUntilChanged`, `switchMap`

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for desktop views
- Device detection for optimal UX
- Touch-friendly UI elements

### Form Validation
- Email format validation
- Async email uniqueness check
- Password strength requirements (8+ chars, uppercase, number)
- Conditional field validation
- Real-time error messages

## 🔮 TODO: Features Requiring Backend Implementation

The following features are designed but require backend API implementation:

### 1. Authentication System
**Location**: `src/app/shared-library/services/auth.service.ts`

Required endpoints:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset

### 2. Anime Data Management
**Location**: `src/app/shared-library/services/anime-tracker.service.ts`

Required endpoints:
- `GET /api/anime-list` - Get all anime (with pagination)
- `GET /api/anime/:id` - Get specific anime details
- `GET /api/anime/trending` - Get trending anime
- `GET /api/anime/top-rated` - Get top-rated anime
- `GET /api/anime/search?q=query` - Search anime

### 3. Reviews System
**Location**: `src/app/smart-components/anime-reviews/`

Required endpoints:
- `GET /api/anime/:id/reviews` - Get reviews for anime
- `POST /api/anime/:id/reviews` - Submit a review (authenticated)
- `PUT /api/reviews/:id/helpful` - Mark review as helpful

### 4. User Favorites & Watchlist
**Location**: Multiple components

Required endpoints:
- `GET /api/user/favorites` - Get user's favorites
- `POST /api/user/favorites/:animeId` - Add to favorites
- `DELETE /api/user/favorites/:animeId` - Remove from favorites
- `GET /api/user/watchlist` - Get user's watchlist
- `POST /api/user/watchlist/:animeId` - Add to watchlist
- `PUT /api/user/watchlist/:animeId` - Update progress

### 5. Video Streaming
**Location**: `src/app/smart-components/anime-detail/`

Requirements:
- Video streaming service integration
- Episode management
- Watch progress tracking
- Quality selection
- Subtitle support

## 🚦 Current State

### Mock Data
The application currently uses a **fake backend interceptor** (`fake-backend.interceptor.ts`) that intercepts HTTP requests and returns mock data. This is for development purposes only.

**To integrate with real backend:**
1. Remove or disable `FakeBackendInterceptor` in `app.module.ts`
2. Update `environment.apiUrl` with your backend URL
3. Implement proper error handling
4. Add authentication token interceptor

### Authentication
The `AuthService` is a placeholder with comprehensive TODO comments. All authentication-dependent features (login, logout, favorites, reviews submission) are currently disabled or show placeholder messages.

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run e2e
```

Build for production:
```bash
npm run build
```

## 📝 Development Notes

### SCSS Variables
Color scheme and common styles are defined in `src/stylesVariables.scss`:
- Primary color: `#EA857D` (orange/coral)
- Dark theme with black backgrounds
- Consistent spacing and transitions

### RxJS Patterns
The application uses several RxJS patterns:
- `debounceTime` for search input optimization
- `distinctUntilChanged` to prevent duplicate requests
- `switchMap` for cancelling previous requests
- `throttleTime` for scroll events
- `BehaviorSubject` for state management

### Code Comments
All major components include:
- Comprehensive JSDoc comments
- TODO comments for future implementation
- Inline comments for complex logic
- Architecture decision documentation

## 🤝 Contributing

When implementing backend features:
1. Check TODO comments in relevant service files
2. Follow the documented API contract
3. Update mock data if needed for testing
4. Add proper error handling
5. Update this README with implementation status

## 📄 License

[Add your license here]

## 👥 Authors

[Add author information]

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Material Design for UI components
- Boxicons for icon library
