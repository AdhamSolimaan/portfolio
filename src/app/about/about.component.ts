import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-24">
      <div class="flex flex-col items-center mb-12">
        <div class="code-line text-secondary-color mb-4 text-xl opacity-70"></div>
        <h2 class="text-4xl font-bold mb-4 text-highlight-color">About Me</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <!-- Profile Image Section -->
        <div class="md:col-span-4 flex justify-center">
          <div class="profile-container">
            <div class="profile-image-about">
              <img
                src="assets/images/profile.jpg"
                alt="Adham Soliman"
                class="rounded-lg object-cover w-full h-full"
                (error)="handleImageError($event)"
                onerror="this.onerror=null; this.src='./assets/images/profile.jpg';"
              />
            </div>
            <div class="profile-overlay"></div>
            <div *ngIf="imageError" class="image-error">Image failed to load</div>
          </div>
        </div>

        <!-- About Content Section -->
        <div class="md:col-span-8 bg-black bg-opacity-30 p-8 rounded-lg">
          <div class="code-text text-sm md:text-base leading-relaxed">
            <div class="mb-4">
              <span class="text-secondary-color">const</span> <span class="text-primary-color">aboutMe</span> = {{'{'}
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">name</span>: <span class="text-tertiary-color">'Adham Soliman'</span>,
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">title</span>: <span class="text-tertiary-color">'Java Backend Engineer'</span>,
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">background</span>: <span class="text-tertiary-color">'Experienced Java developer with a passion for building robust backend systems. I graduated with a B.Sc. in Communication and Electronics Engineering from Suez Canal University and have since been dedicated to creating efficient, secure, and scalable software solutions.'</span>,
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">passions</span>: [
              <div class="ml-4">
                <span class="text-tertiary-color">'Building efficient systems'</span>,<br>
                <span class="text-tertiary-color">'Writing clean code'</span>,<br>
                <span class="text-tertiary-color">'Solving complex problems'</span>,<br>
                <span class="text-tertiary-color">'Continuous learning'</span>
              </div>
              ],
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">technologies</span>: {{'{'}
              <div class="ml-4">
                <span class="text-primary-color">languages</span>: [<span class="text-tertiary-color">'Java'</span>, <span class="text-tertiary-color">'Python'</span>],<br>
                <span class="text-primary-color">frameworks</span>: [<span class="text-tertiary-color">'Spring Boot'</span>, <span class="text-tertiary-color">'Hibernate'</span>, <span class="text-tertiary-color">'JPA'</span>],<br>
                <span class="text-primary-color">databases</span>: [<span class="text-tertiary-color">'PostgreSQL'</span>, <span class="text-tertiary-color">'MySQL'</span>]
              </div>
              {{'}'}}
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">interests</span>: [<span class="text-tertiary-color">'Technology'</span>, <span class="text-tertiary-color">'Software Architecture'</span>, <span class="text-tertiary-color">'System Design'</span>],
            </div>

            <div class="ml-4 mb-4">
              <span class="text-primary-color">bio</span>: <span class="text-tertiary-color">'Experienced Java Backend Developer focused on building efficient and secure systems with clean, maintainable code. Passionate about optimizing application performance and ensuring high scalability.'</span>
            </div>

            <div>
              {{'}'}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-primary-color {
      color: var(--primary-color);
    }

    .text-secondary-color {
      color: var(--secondary-color);
    }

    .text-tertiary-color {
      color: var(--tertiary-color);
    }

    .text-highlight-color {
      color: var(--highlight-color);
    }

    .code-text {
      font-family: 'Fira Code', monospace;
    }

    .code-line {
      font-family: 'Fira Code', monospace;
    }

    .profile-container {
      position: relative;
      width: 100%;
      max-width: 350px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
    }

    .profile-image-about {
      width: 100%;
      aspect-ratio: 1 / 1;
      position: relative;
      z-index: 1;
      border: 3px solid var(--highlight-color);
      border-radius: 8px;
    }

    .profile-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background: linear-gradient(to top, var(--highlight-color), transparent);
      opacity: 0.3;
      z-index: 2;
    }
  `]
})
export class AboutComponent {
  imageError = false;

  handleImageError(event: any) {
    console.error('About component: Image failed to load:', event);
    this.imageError = true;

    // Try multiple paths as fallbacks
    const imgElement = event.target;
    if (imgElement.src.indexOf('assets/images/profile.jpg') !== -1) {
      console.log('About - Trying alternative path...');
      imgElement.src = './assets/images/profile.jpg';
    } else if (imgElement.src.indexOf('./assets/images/profile.jpg') !== -1) {
      console.log('About - Trying absolute path...');
      // Get the base URL of the application
      const baseUrl = window.location.origin;
      imgElement.src = `${baseUrl}/portfolio/assets/images/profile.jpg`;
    }
  }
}
