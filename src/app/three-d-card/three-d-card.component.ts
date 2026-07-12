import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-d-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="card-3d"
      [style.--bg-image]="'url(' + image + ')'"
      (mousemove)="onMouseMove($event)"
      (mouseleave)="onMouseLeave()"
    >
      <div class="card-content" [style.transform]="transform">
        <div class="card-header">
          <h3 class="card-title">{{ title }}</h3>
          <div class="card-links">
            <a [href]="liveUrl" target="_blank" class="card-link" *ngIf="liveUrl" aria-label="View live project">
              <i class="fas fa-external-link-alt"></i>
            </a>
            <a [href]="githubUrl" target="_blank" class="card-link" *ngIf="githubUrl" aria-label="View source code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <p class="card-description">{{ description }}</p>
        
        <div class="card-tech">
          <span *ngFor="let tech of technologies" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-3d {
      position: relative;
      width: 100%;
      height: 280px;
      border-radius: 15px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: rgba(0, 0, 0, 0.2);
      background-image: var(--bg-image);
      background-size: cover;
      background-position: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    .card-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
      z-index: 1;
    }
    
    .card-3d::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(var(--primary-color-rgb), 0.05);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .card-3d:hover::after {
      opacity: 1;
    }
    
    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      color: #fff;
      z-index: 2;
      transform-style: preserve-3d;
      transition: transform 0.3s ease;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      transform: translateZ(20px);
    }
    
    .card-links {
      display: flex;
      gap: 0.5rem;
    }
    
    .card-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
      transition: background-color 0.3s ease;
      transform: translateZ(20px);
    }
    
    .card-link:hover {
      background-color: var(--primary-color);
    }
    
    .card-description {
      font-size: 0.875rem;
      margin-bottom: 1rem;
      opacity: 0.8;
      transform: translateZ(15px);
    }
    
    .card-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      transform: translateZ(10px);
    }
    
    .tech-tag {
      font-size: 0.7rem;
      padding: 0.25rem 0.5rem;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
    }
  `]
})
export class ThreeDCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() image: string = '';
  @Input() liveUrl: string | undefined;
  @Input() githubUrl: string | undefined;
  
  transform: string = 'rotateX(0deg) rotateY(0deg)';
  
  onMouseMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = (mouseX - cardCenterX) / 15;
    const rotateX = (cardCenterY - mouseY) / 15;
    
    // Apply the rotation with limits
    this.transform = `
      perspective(1000px) 
      rotateY(${Math.min(Math.max(rotateY, -15), 15)}deg) 
      rotateX(${Math.min(Math.max(rotateX, -15), 15)}deg)
    `;
  }
  
  onMouseLeave(): void {
    // Return to original position smoothly
    this.transform = `
      perspective(1000px)
      rotateY(0deg) 
      rotateX(0deg)
    `;
  }
}
