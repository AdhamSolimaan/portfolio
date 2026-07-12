import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService, Project } from '../services/portfolio.service';
import { pageFadeAnimation, listStaggerAnimation } from '../shared/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [pageFadeAnimation, listStaggerAnimation]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  activeFilter = 'All';
  categories = ['All', 'telecom', 'backend', 'fullstack', 'personal'];
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
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

  private loadProjects(): void {
    this.portfolioService.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        this.projects = projects;
        this.filteredProjects = [...this.projects];
      });
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    this.filteredProjects = category === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === category);
    this.portfolioService.trackEvent('Projects', 'Filter', category);
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    this.portfolioService.trackEvent('Projects', 'Open', project.title);
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  trackByProject(_index: number, project: Project): number {
    return project.id;
  }

  labelFor(category: string): string {
    if (category === 'All') return 'All';
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
}
