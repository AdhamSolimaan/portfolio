import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container mx-auto px-4 py-24">
      <div class="flex flex-col items-center mb-16">
        <div class="code-line text-secondary-color mb-4 text-xl opacity-70">04 // Get In Touch</div>
        <h2 class="text-4xl font-bold mb-4 text-highlight-color">Contact /></h2>
        <p class="text-center max-w-2xl text-lg opacity-80 mb-8">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Contact Info -->
        <div class="bg-black bg-opacity-30 p-8 rounded-lg relative overflow-hidden">
          <div class="contact-glow"></div>
          <h3 class="text-2xl font-bold mb-6 text-tertiary-color">Let's Connect</h3>

          <div class="space-y-8">
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title">Email</h4>
                <a href="mailto:adhamsoliman12199@gmail.com" class="contact-text">adhamsoliman12199&#64;gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title">Phone</h4>
                <a href="tel:+201003197262" class="contact-text">+201003197262</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title">Location</h4>
                <p class="contact-text">6th of October, Egypt</p>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <h4 class="text-xl font-bold mb-4 text-primary-color">Social Media</h4>
            <div class="flex items-center space-x-4">
              <a href="https://linkedin.com/in/adham-soliman9" class="social-icon" target="_blank" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/" class="social-icon" target="_blank" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:adhamsoliman12199@gmail.com" class="social-icon" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Message Form Placeholder -->
        <div class="bg-black bg-opacity-30 p-8 rounded-lg h-full">
          <h3 class="text-2xl font-bold mb-6 text-tertiary-color">Send Me a Message</h3>

          <div class="code-text text-sm md:text-base leading-relaxed">
            <div class="mb-4">
              <span class="text-secondary-color">const</span> <span class="text-primary-color">sendMessage</span> = <span class="text-secondary-color">async</span> () => {{'{'}
            </div>

            <div class="ml-4 mb-8">
              <span class="text-highlight-color">await</span> <span class="text-tertiary-color">fetch</span>(<span class="text-primary-color">'https://api.example.com/contact'</span>, {{'{'}
              <div class="ml-4">
                <span class="text-primary-color">method</span>: <span class="text-tertiary-color">'POST'</span>,<br>
                <span class="text-primary-color">body</span>: <span class="text-tertiary-color">JSON.stringify</span>({{'{'}
                <div class="ml-4">
                  <span class="text-primary-color">name</span>: <span class="text-tertiary-color">yourName</span>,<br>
                  <span class="text-primary-color">email</span>: <span class="text-tertiary-color">yourEmail</span>,<br>
                  <span class="text-primary-color">message</span>: <span class="text-tertiary-color">yourMessage</span>
                </div>
                {{'}'}}),
              </div>
              {{'}'}});
            </div>

            <div class="mb-4">
              <span class="text-primary-color">console</span>.<span class="text-tertiary-color">log</span>(<span class="text-tertiary-color">'Message sent successfully!'</span>);
            </div>

            <div class="mb-4">
              {{'}'}}
            </div>
          </div>

          <div class="mt-8 flex justify-center">
            <a href="mailto:adhamsoliman12199@gmail.com" class="btn-primary">
              Email Me Directly <span class="ml-2">→</span>
            </a>
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

    .text-primary-color {
      color: var(--primary-color);
    }

    .text-tertiary-color {
      color: var(--tertiary-color);
    }

    .code-text {
      font-family: 'Fira Code', monospace;
    }

    .contact-glow {
      position: absolute;
      top: -50px;
      right: -50px;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, rgba(var(--highlight-color-rgb), 0.4) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      position: relative;
      z-index: 1;
    }

    .contact-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(var(--tertiary-color-rgb), 0.1);
      border-radius: 50%;
      color: var(--tertiary-color);
    }

    .contact-info {
      flex-grow: 1;
    }

    .contact-title {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--text-color);
    }

    .contact-text {
      font-size: 1rem;
      color: var(--primary-color);
      transition: color 0.3s ease;
    }

    a.contact-text:hover {
      color: var(--highlight-color);
    }

    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: var(--text-color);
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background-color: var(--highlight-color);
      color: var(--background-color);
      transform: translateY(-3px);
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
  `]
})
export class ContactComponent {}
