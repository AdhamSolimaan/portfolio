import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subject, takeUntil } from 'rxjs';
import { UiService, Theme } from '../../services/ui.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class ThemeSelectorComponent implements OnInit, OnDestroy {
  isOpen = false;
  currentTheme = '';
  availableThemes: Theme[] = [];
  
  private destroy$ = new Subject<void>();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.availableThemes = this.uiService.getAvailableThemes();
    
    this.uiService.currentTheme$
      .pipe(takeUntil(this.destroy$))
      .subscribe(theme => {
        this.currentTheme = theme;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleThemeSelector(): void {
    this.isOpen = !this.isOpen;
  }

  selectTheme(themeName: string): void {
    this.uiService.setTheme(themeName);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const themeSelector = target.closest('.theme-selector');
    
    if (!themeSelector && this.isOpen) {
      this.isOpen = false;
    }
  }
} 