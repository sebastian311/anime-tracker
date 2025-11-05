import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Authentication Service
 *
 * TODO: This is a placeholder service. Complete implementation requires:
 *
 * 1. BACKEND API ENDPOINTS:
 *    - POST /api/auth/register - User registration
 *    - POST /api/auth/login - User login
 *    - POST /api/auth/logout - User logout
 *    - GET /api/auth/me - Get current user info
 *    - POST /api/auth/refresh - Refresh access token
 *    - POST /api/auth/forgot-password - Password reset request
 *    - POST /api/auth/reset-password - Password reset confirmation
 *
 * 2. TOKEN MANAGEMENT:
 *    - Store JWT tokens securely (localStorage or httpOnly cookies)
 *    - Implement token refresh mechanism
 *    - Handle token expiration
 *    - Clear tokens on logout
 *
 * 3. HTTP INTERCEPTOR:
 *    - Add JWT token to all authenticated requests
 *    - Handle 401 unauthorized responses
 *    - Implement token refresh logic
 *
 * 4. ROUTE GUARDS:
 *    - Create AuthGuard for protected routes
 *    - Create GuestGuard for login/register pages (redirect if logged in)
 *    - Implement role-based access control if needed
 *
 * 5. USER STATE MANAGEMENT:
 *    - Track logged-in user information
 *    - Persist user session across page refreshes
 *    - Handle user profile updates
 *
 * 6. SECURITY CONSIDERATIONS:
 *    - Use HTTPS in production
 *    - Implement CSRF protection
 *    - Sanitize user inputs
 *    - Rate limiting on login attempts
 *    - Email verification for new accounts
 *    - Two-factor authentication (optional)
 *
 * 7. INTEGRATION POINTS:
 *    - Update navbar to show user info when logged in
 *    - Update side-menu for authenticated users
 *    - Enable review submission for logged-in users
 *    - Enable favorites/watchlist functionality
 */

export interface User {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  createdAt?: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Current user state - null when not logged in
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  // Authentication state
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor() {
    // TODO: Initialize from stored token/session
    // Check localStorage for existing session on app startup
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();

    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  /**
   * Get current user value
   */
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Check if user is currently authenticated
   */
  public get isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * TODO: Implement user registration
   *
   * Steps:
   * 1. Validate registration data
   * 2. Send POST request to /api/auth/register
   * 3. Handle response (success/error)
   * 4. Optionally auto-login after registration
   * 5. Return Observable with result
   *
   * @param data Registration data
   * @returns Observable with registration result
   */
  register(data: RegisterData): Observable<any> {
    console.log('Register method called - Backend API needed');
    console.log('Registration data:', data);

    // TODO: Implement actual registration logic
    throw new Error('Registration not implemented - Backend API required');
  }

  /**
   * TODO: Implement user login
   *
   * Steps:
   * 1. Validate credentials
   * 2. Send POST request to /api/auth/login
   * 3. Store received JWT token
   * 4. Update currentUser and isAuthenticated state
   * 5. Return Observable with result
   *
   * @param credentials Login credentials
   * @returns Observable with login result
   */
  login(credentials: LoginCredentials): Observable<any> {
    console.log('Login method called - Backend API needed');
    console.log('Login credentials:', credentials);

    // TODO: Implement actual login logic
    throw new Error('Login not implemented - Backend API required');
  }

  /**
   * TODO: Implement user logout
   *
   * Steps:
   * 1. Clear stored JWT token
   * 2. Clear currentUser state
   * 3. Update isAuthenticated to false
   * 4. Optionally notify backend (POST /api/auth/logout)
   * 5. Redirect to home or login page
   */
  logout(): void {
    console.log('Logout method called - Implementation needed');

    // TODO: Implement actual logout logic
    // Clear tokens
    // this.currentUserSubject.next(null);
    // this.isAuthenticatedSubject.next(false);
    // localStorage.removeItem('token');
    // Navigate to home/login
  }

  /**
   * TODO: Implement get current user info
   *
   * Steps:
   * 1. Check if token exists
   * 2. Send GET request to /api/auth/me
   * 3. Update currentUser state
   * 4. Return user info
   *
   * @returns Observable with user info
   */
  getCurrentUser(): Observable<User> {
    console.log('Get current user method called - Backend API needed');

    // TODO: Implement actual get user logic
    throw new Error('Get user not implemented - Backend API required');
  }

  /**
   * TODO: Implement token refresh
   *
   * Steps:
   * 1. Check if refresh token exists
   * 2. Send POST request to /api/auth/refresh
   * 3. Update stored access token
   * 4. Return new token
   *
   * @returns Observable with new token
   */
  refreshToken(): Observable<any> {
    console.log('Refresh token method called - Backend API needed');

    // TODO: Implement actual token refresh logic
    throw new Error('Token refresh not implemented - Backend API required');
  }

  /**
   * TODO: Implement password reset request
   *
   * @param email User email
   * @returns Observable with result
   */
  forgotPassword(email: string): Observable<any> {
    console.log('Forgot password method called - Backend API needed');

    // TODO: Implement forgot password logic
    throw new Error('Forgot password not implemented - Backend API required');
  }

  /**
   * TODO: Implement password reset
   *
   * @param token Reset token
   * @param newPassword New password
   * @returns Observable with result
   */
  resetPassword(token: string, newPassword: string): Observable<any> {
    console.log('Reset password method called - Backend API needed');

    // TODO: Implement reset password logic
    throw new Error('Reset password not implemented - Backend API required');
  }
}
