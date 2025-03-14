import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-24">
      <div class="flex flex-col items-center mb-16">
        <div class="code-line text-secondary-color mb-4 text-xl opacity-70">01 // My Projects</div>
        <h2 class="text-4xl font-bold mb-4 text-highlight-color">Work /></h2>
        <p class="text-center max-w-2xl text-lg opacity-80">
          Here are some of the projects I've worked on. Each represents my skills in Java backend development,
          system design, and problem-solving.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project 1 -->
        <div class="project-card">
          <div class="project-content">
            <span class="project-number">01</span>
            <h3 class="project-title">Smart Campus Mobile App</h3>
            <p class="project-description">
              A comprehensive mobile application for campus management with features like automated attendance, 
              parking management, and student portal.
            </p>
            <div class="project-tech">
              <span>Java</span>
              <span>Firebase</span>
              <span>Android</span>
            </div>
            <a href="#" class="project-link">View Project <span class="ml-1">→</span></a>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="project-card">
          <div class="project-content">
            <span class="project-number">02</span>
            <h3 class="project-title">Minesweeper Robot</h3>
            <p class="project-description">
              Controlled robot designed to scan specific areas and detect mines with Arduino microcontroller 
              while providing a Graphical User Interface.
            </p>
            <div class="project-tech">
              <span>Arduino</span>
              <span>Sensors</span>
              <span>C++</span>
            </div>
            <a href="#" class="project-link">View Project <span class="ml-1">→</span></a>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="project-card">
          <div class="project-content">
            <span class="project-number">03</span>
            <h3 class="project-title">Spring Boot Donation Website</h3>
            <p class="project-description">
              A platform similar to e-commerce systems for managing donations, featuring user registration, 
              item listing, and cart management.
            </p>
            <div class="project-tech">
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>REST API</span>
            </div>
            <a href="#" class="project-link">View Project <span class="ml-1">→</span></a>
          </div>
        </div>
        
        <!-- Project 4 -->
        <div class="project-card">
          <div class="project-content">
            <span class="project-number">04</span>
            <h3 class="project-title">Spring Boot To-Do List</h3>
            <p class="project-description">
              A To-Do list application with full CRUD operations for task management, utilizing Spring Data JPA 
              and RESTful APIs.
            </p>
            <div class="project-tech">
              <span>Spring Boot</span>
              <span>JPA</span>
              <span>H2/PostgreSQL</span>
            </div>
            <a href="#" class="project-link">View Project <span class="ml-1">→</span></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .code-line {
      font-family: 'Fira Code', monospace;
    }
    
    .text-highlight-color {
      color: var(--highlight-color);
    }
    
    .text-secondary-color {
      color: var(--secondary-color);
    }
    
    .project-card {
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      height: 350px;
      display: flex;
      flex-direction: column;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px -15px rgba(var(--highlight-color-rgb), 0.2);
      border-color: var(--highlight-color);
    }
    
    .project-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .project-number {
      color: var(--highlight-color);
      font-family: 'Fira Code', monospace;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .project-title {
      color: var(--text-color);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    
    .project-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .project-tech span {
      font-family: 'Fira Code', monospace;
      font-size: 0.75rem;
      color: var(--tertiary-color);
      background: rgba(var(--tertiary-color-rgb), 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
    
    .project-link {
      font-family: 'Fira Code', monospace;
      font-size: 0.875rem;
      color: var(--primary-color);
      display: inline-flex;
      align-items: center;
      transition: color 0.3s ease;
    }
    
    .project-link:hover {
      color: var(--highlight-color);
    }
    
    .project-link:hover::after {
      width: 100%;
    }
    
    .project-link::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--highlight-color);
      transition: width 0.3s ease;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  `]
})
export class ProjectsComponent {} 