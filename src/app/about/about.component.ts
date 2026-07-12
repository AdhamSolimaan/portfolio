import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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