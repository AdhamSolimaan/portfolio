import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  standalone: true,
  template: `
    <div class="relative min-h-screen">
      <!-- Particle background effect -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="particles"></div>
      </div>
      
      <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="flex flex-col md:flex-row min-h-[80vh] items-center justify-center gap-12">
          <!-- Profile image with animated border -->
          <div class="profile-container order-2 md:order-1">
            <div class="profile-border"></div>
            <div class="profile-image">
              <img 
                src="assets/images/profile.jpg" 
                alt="Adham Soliman" 
                class="rounded-full object-cover w-full h-full"
                (error)="handleImageError($event)" 
                onerror="this.onerror=null; this.src='./assets/images/profile.jpg';"
              />
            </div>
            <div class="profile-glow"></div>
            <div *ngIf="imageError" class="image-error">Image failed to load</div>
          </div>

          <!-- Text content -->
          <div class="flex flex-col order-1 md:order-2 max-w-2xl">
  
            
            <h1 class="text-5xl sm:text-6xl md:text-7xl mb-6 font-bold typewriter">
              Hi, <span class="text-highlight-color">I'm Adham Soliman</span>
            </h1>
            
            <h2 class="text-3xl sm:text-4xl md:text-5xl mb-8 flex flex-wrap">
              <span class="mr-3">I build</span>
              <span class="text-tertiary-color typewriter-multi">
                efficient systems.
              </span>
            </h2>
            
            <p class="text-xl mb-8 opacity-80 max-w-2xl leading-relaxed">
              Java Backend Developer specializing in creating efficient, secure systems with Spring Boot and databases. 
              Passionate about clean code and optimizing application performance.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a routerLink="/projects" class="btn-primary">
                View My Work <span class="ml-2">→</span>
              </a>
              
              <a routerLink="/cv" class="btn-secondary">
                My Resume <span class="ml-2">≡</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-16 flex items-center">
          <div class="h-px bg-gradient-to-r from-transparent via-primary-color to-transparent flex-grow"></div>
          <span class="px-4 text-sm opacity-70">SCROLL DOWN</span>
          <div class="h-px bg-gradient-to-r from-transparent via-primary-color to-transparent flex-grow"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(var(--primary-color-rgb), 0.03) 0%, transparent 70%);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }
    
    .particles::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(var(--highlight-color-rgb), 0.05) 0%, transparent 8%),
        radial-gradient(circle at 80% 40%, rgba(var(--tertiary-color-rgb), 0.05) 0%, transparent 8%),
        radial-gradient(circle at 40% 70%, rgba(var(--secondary-color-rgb), 0.05) 0%, transparent 8%),
        radial-gradient(circle at 70% 90%, rgba(var(--primary-color-rgb), 0.05) 0%, transparent 8%);
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Profile image styling */
    .profile-container {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }

    .profile-image {
      position: relative;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 2;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.8);
      border: 4px solid var(--highlight-color);
      transition: all 0.3s ease;
    }
    
    .profile-image:hover {
      transform: scale(1.03);
      border-color: var(--tertiary-color);
    }

    .profile-border {
      position: absolute;
      top: -15px;
      left: -15px;
      width: 310px;
      height: 310px;
      border-radius: 50%;
      border: 2px solid var(--tertiary-color);
      z-index: 1;
      animation: rotate 10s linear infinite;
    }
    
    .profile-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(var(--highlight-color-rgb), 0.2) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      animation: pulse 4s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.95); }
      50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
      100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.95); }
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .typewriter {
      border-right: 4px solid var(--highlight-color);
      white-space: nowrap;
      overflow: hidden;
      animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
    }
    
    .typewriter-multi {
      border-right: 4px solid var(--tertiary-color);
      overflow: hidden;
      white-space: nowrap;
      animation: typing 3.5s steps(30, end) 1s forwards, blink-caret 0.75s step-end infinite;
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: var(--highlight-color) }
    }
    
    .code-line {
      font-family: 'Fira Code', monospace;
    }
    
    .btn-primary {
      background-color: var(--highlight-color);
      color: var(--background-color);
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
    }
    
    .btn-primary:hover {
      background-color: transparent;
      box-shadow: 0 0 0 2px var(--highlight-color);
      color: var(--highlight-color);
      transform: translateY(-2px);
    }
    
    .btn-secondary {
      background-color: transparent;
      color: var(--text-color);
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 0 0 2px var(--text-color);
      display: inline-flex;
      align-items: center;
    }
    
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color);
      transform: translateY(-2px);
    }
    
    .text-highlight-color {
      color: var(--highlight-color);
    }
    
    .text-tertiary-color {
      color: var(--tertiary-color);
    }
    
    .text-secondary-color {
      color: var(--secondary-color);
    }
  `]
})
export class HomeComponent implements OnInit {
  imageError = false;

  ngOnInit() {
    // Add CSS variables for RGB values needed for background effects
    const root = document.documentElement;
    root.style.setProperty('--primary-color-rgb', '139, 233, 253');
    root.style.setProperty('--highlight-color-rgb', '255, 121, 198');
    root.style.setProperty('--secondary-color-rgb', '189, 147, 249');
    root.style.setProperty('--tertiary-color-rgb', '80, 250, 123');
    
    // Log to help debug image loading
    console.log('Home component initialized, looking for image at: assets/images/profile.jpg');
  }
  
  handleImageError(event: any) {
    console.error('Image failed to load:', event);
    this.imageError = true;
    
    // Try multiple paths as fallbacks
    const imgElement = event.target;
    if (imgElement.src.indexOf('assets/images/profile.jpg') !== -1) {
      console.log('Trying alternative path...');
      imgElement.src = './assets/images/profile.jpg';
    } else if (imgElement.src.indexOf('./assets/images/profile.jpg') !== -1) {
      console.log('Trying absolute path...');
      // Get the base URL of the application
      const baseUrl = window.location.origin;
      imgElement.src = `${baseUrl}/portfolio/assets/images/profile.jpg`;
    }
  }
} 