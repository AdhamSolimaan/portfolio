import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { LoadingComponent } from './shared/loading/loading.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { ThemeSelectorComponent } from './shared/theme-selector/theme-selector.component';
import { UiService } from './services/ui.service';
import { routeAnimations } from './shared/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    LoadingComponent,
    NotificationComponent,
    ThemeSelectorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Adham Soliman - Portfolio';
  isLoading = false;
  mobileOpen = false;
  notification: {message: string, type: 'success' | 'error' | 'info'} | null = null;

  private destroy$ = new Subject<void>();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.currentTheme$
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
    document.body.classList.toggle('menu-open', this.mobileOpen);
  }

  closeMobile(): void {
    this.mobileOpen = false;
    document.body.classList.remove('menu-open');
  }

  showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    this.notification = { message, type };
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      this.notification = null;
    }, 5000);
  }

  onNotificationClose(): void {
    this.notification = null;
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
