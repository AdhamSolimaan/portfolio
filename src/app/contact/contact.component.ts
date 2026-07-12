import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService, ContactForm } from '../services/portfolio.service';
import { UiService } from '../services/ui.service';
import { pageFadeAnimation } from '../shared/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [pageFadeAnimation]
})
export class ContactComponent implements OnDestroy {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private portfolioService: PortfolioService,
    private uiService: UiService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (!this.isFormValid() || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.portfolioService.submitContactForm(this.contactForm)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: success => {
          this.isLoading = false;
          if (success) {
            this.resetForm();
            this.portfolioService.trackEvent('Contact', 'Submit', 'Success');
          }
        },
        error: () => {
          this.isLoading = false;
          this.portfolioService.showNotification('Failed to send message. Please try again.', 'error');
        }
      });
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  async copyEmail(): Promise<void> {
    const email = 'adhamsoliman12199@gmail.com';
    const success = await this.uiService.copyToClipboard(email);
    
    if (success) {
      this.portfolioService.showNotification('Email copied to clipboard!', 'success');
    } else {
      this.portfolioService.showNotification('Failed to copy email', 'error');
    }
    
    this.portfolioService.trackEvent('Contact', 'Copy Email', email);
  }

  async copyPhone(): Promise<void> {
    const phone = '+201003197262';
    const success = await this.uiService.copyToClipboard(phone);
    
    if (success) {
      this.portfolioService.showNotification('Phone number copied to clipboard!', 'success');
    } else {
      this.portfolioService.showNotification('Failed to copy phone number', 'error');
    }
    
    this.portfolioService.trackEvent('Contact', 'Copy Phone', phone);
  }
} 