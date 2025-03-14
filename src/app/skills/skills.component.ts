import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-24">
      <div class="flex flex-col items-center mb-16">
        <div class="code-line text-secondary-color mb-4 text-xl opacity-70">03 // What I Do</div>
        <h2 class="text-4xl font-bold mb-4 text-highlight-color">Skills /></h2>
        <p class="text-center max-w-2xl text-lg opacity-80 mb-8">
          My expertise is in backend development with a focus on Java, Spring Boot, and database technologies.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Languages & Frameworks -->
        <div class="skill-category">
          <h3 class="skill-category-title">
            <span class="text-secondary-color">const</span> 
            <span class="text-primary-color">languages_frameworks</span> 
            <span>=</span>
          </h3>
          
          <div class="skill-group">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Java</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Spring Boot</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Python</span>
                <span class="skill-percentage">70%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Hibernate & JPA</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Databases & Tools -->
        <div class="skill-category">
          <h3 class="skill-category-title">
            <span class="text-secondary-color">const</span> 
            <span class="text-primary-color">databases_tools</span> 
            <span>=</span>
          </h3>
          
          <div class="skill-group">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">PostgreSQL</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">MySQL</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">RESTful APIs</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Git</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional skills in tags -->
      <div class="mt-20">
        <h3 class="skill-category-title mb-8 text-center">
          <span class="text-secondary-color">const</span> 
          <span class="text-primary-color">other_skills</span> 
          <span>= [</span>
        </h3>
        
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <span class="skill-tag">Spring Security</span>
          <span class="skill-tag">Microservices</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">OOP</span>
          <span class="skill-tag">SOLID Principles</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">IntelliJ IDEA</span>
          <span class="skill-tag">VS Code</span>
          <span class="skill-tag">System Design</span>
          <span class="skill-tag">Software Architecture</span>
        </div>
        
        <div class="text-center">
          <span class="text-secondary-color">]</span>
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
    
    .text-primary-color {
      color: var(--primary-color);
    }
    
    .skill-category {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .skill-category-title {
      font-family: 'Fira Code', monospace;
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }
    
    .skill-group {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .skill-item {
      width: 100%;
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .skill-name {
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
    }
    
    .skill-percentage {
      font-family: 'Fira Code', monospace;
      font-size: 0.8rem;
      color: var(--tertiary-color);
    }
    
    .skill-bar {
      width: 100%;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--highlight-color));
      border-radius: 4px;
      transition: width 1.5s ease-in-out;
    }
    
    .skill-tag {
      display: inline-block;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      font-family: 'Fira Code', monospace;
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      border: 1px solid rgba(var(--primary-color-rgb), 0.3);
      transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
      background-color: rgba(var(--highlight-color-rgb), 0.2);
      color: var(--highlight-color);
      border-color: var(--highlight-color);
      transform: translateY(-2px);
    }
  `]
})
export class SkillsComponent {} 