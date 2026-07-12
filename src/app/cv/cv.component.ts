import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, OnDestroy {
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => {
        this.isLoading = loading;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDownloadResume(): void {
    this.portfolioService.downloadResume()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  onPrintResume(): void {
    this.portfolioService.trackEvent('CV', 'Print', 'Resume');
    window.print();
  }
} 