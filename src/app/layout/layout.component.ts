import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-content">
        <a routerLink="/home" class="nav-logo">Portfolio</a>
        <div class="nav-links" [class.active]="isMobileMenuOpen">
          <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/skills" routerLinkActive="active">Skills</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>
        <button class="mobile-menu-btn" [class.active]="isMobileMenuOpen" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Adham Soliman</h3>
          <p>Java Backend Developer</p>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: adham&#64;example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div class="footer-section">
          <h4>Social</h4>
          <div class="social-links">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Adham Soliman. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      z-index: 1000;
      transition: all 0.3s ease;
      height: 80px;
    }

    .navbar.scrolled {
      background: rgba(0, 0, 0, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--highlight-color);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--highlight-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--highlight-color);
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1001;
    }

    .mobile-menu-btn span {
      display: block;
      width: 25px;
      height: 2px;
      background: var(--text-color);
      transition: all 0.3s ease;
    }

    .main-content {
      flex: 1;
      padding-top: 80px;
      min-height: calc(100vh - 80px);
    }

    .footer {
      background: rgba(0, 0, 0, 0.9);
      padding: 4rem 2rem 2rem;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h3 {
      color: var(--highlight-color);
      margin-bottom: 1rem;
    }

    .footer-section h4 {
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    .footer-section p {
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 0.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
    }

    .social-links a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--highlight-color);
      transition: width 0.3s ease;
    }

    .social-links a:hover::after {
      width: 100%;
    }

    .social-links a:hover {
      color: var(--highlight-color);
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 2rem auto 0;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      color: var(--text-color);
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 2rem;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
      }

      .nav-links.active {
        display: flex;
      }

      .mobile-menu-btn {
        display: flex;
      }

      .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }

      .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
      }

      .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }

      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class LayoutComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
} 