import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="fixed top-0 left-0 w-full z-50 bg-opacity-90 bg-black py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-primary">
          <span class="text-highlight">L0AD1NG</span>
        </div>
        <ul class="flex space-x-6">
          <li>
            <a routerLink="/home" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              Start />
            </a>
          </li>
          <li>
            <a routerLink="/projects" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              Work />
            </a>
          </li>
          <li>
            <a routerLink="/skills" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              Lab />
            </a>
          </li>
          <li>
            <a routerLink="/about" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              About />
            </a>
          </li>
          <li>
            <a routerLink="/contact" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              Contact />
            </a>
          </li>
          <li>
            <a routerLink="/cv" class="text-text-color hover:text-highlight-color transition-colors duration-300">
              CV />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="pt-20">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    nav ul li a {
      font-family: 'Fira Code', monospace;
      font-weight: 500;
    }
    nav ul li a:hover {
      color: var(--highlight-color);
    }
  `]
})
export class AppComponent {
  title = 'portfolio';
}
