import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export interface Theme {
  name: string;
  displayName: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    highlight: string;
    accent: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private currentThemeSubject = new BehaviorSubject<string>('pro-blue');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  private scrollPositionSubject = new BehaviorSubject<number>(0);
  public scrollPosition$ = this.scrollPositionSubject.asObservable();

  private screenSizeSubject = new BehaviorSubject<{width: number, height: number}>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  public screenSize$ = this.screenSizeSubject.asObservable();

  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  public sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  private themes: Theme[] = [
    {
      name: 'pro-blue',
      displayName: 'Professional Blue',
      colors: {
        primary: '#4F8CFF',
        secondary: '#22D3EE',
        tertiary: '#38BDF8',
        highlight: '#FBBF24',
        accent: '#F87171'
      }
    },
    {
      name: 'black',
      displayName: 'Pure Black',
      colors: {
        primary: '#60A5FA',
        secondary: '#2DD4BF',
        tertiary: '#A3E635',
        highlight: '#F59E0B',
        accent: '#FB7185'
      }
    },
    {
      name: 'white',
      displayName: 'Bright White',
      colors: {
        primary: '#1D4ED8',
        secondary: '#0E7490',
        tertiary: '#047857',
        highlight: '#C2410C',
        accent: '#BE123C'
      }
    }
  ];

  constructor() {
    this.initializeServices();
  }

  private initializeServices(): void {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => {
        this.scrollPositionSubject.next(window.pageYOffset);
      });

    fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => {
        this.screenSizeSubject.next({
          width: window.innerWidth,
          height: window.innerHeight
        });
      });

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.themes.find(t => t.name === savedTheme)) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('pro-blue');
    }
  }

  getAvailableThemes(): Theme[] {
    return this.themes;
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  setTheme(themeName: string): void {
    const theme = this.themes.find(t => t.name === themeName);
    if (!theme) return;

    document.documentElement.setAttribute('data-theme', themeName);

    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${themeName}`);

    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
      const rgb = this.hexToRgb(value);
      if (rgb) {
        root.style.setProperty(`--theme-${key}-rgb`, `${rgb.r}, ${rgb.g}, ${rgb.b}`);
      }
    });

    localStorage.setItem('portfolio-theme', themeName);
    this.currentThemeSubject.next(themeName);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeName } }));
  }

  private hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isMobile(): Observable<boolean> {
    return this.screenSize$.pipe(map(size => size.width < 768));
  }

  isTablet(): Observable<boolean> {
    return this.screenSize$.pipe(map(size => size.width >= 768 && size.width < 1024));
  }

  isDesktop(): Observable<boolean> {
    return this.screenSize$.pipe(map(size => size.width >= 1024));
  }

  toggleSidebar(): void {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }

  openSidebar(): void {
    this.sidebarOpenSubject.next(true);
  }

  closeSidebar(): void {
    this.sidebarOpenSubject.next(false);
  }

  async copyToClipboard(text: string): Promise<boolean> {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }

      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }

  saveToStorage(key: string, value: any): void {
    try {
      localStorage.setItem(`portfolio-${key}`, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }

  loadFromStorage<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(`portfolio-${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return defaultValue;
    }
  }

  removeFromStorage(key: string): void {
    try {
      localStorage.removeItem(`portfolio-${key}`);
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
    }
  }
}
