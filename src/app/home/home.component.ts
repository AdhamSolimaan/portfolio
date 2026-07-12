import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService, Project, Skill, Experience } from '../services/portfolio.service';
import { pageFadeAnimation, listStaggerAnimation } from '../shared/animations';

interface SkillCategory {
  [key: string]: Skill[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [pageFadeAnimation, listStaggerAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {
  imageLoaded = false;
  isLoading = false;
  featuredProjects: Project[] = [];
  skills: SkillCategory = {};
  experiences: Experience[] = [];

  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadData(): void {
    this.portfolioService.getFeaturedProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        this.featuredProjects = projects;
      });

    this.portfolioService.getExperiences()
      .pipe(takeUntil(this.destroy$))
      .subscribe(experiences => {
        this.experiences = experiences;
      });

    this.portfolioService.getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe(skillsArray => {
        const allowed = ['backend', 'frontend', 'database', 'devops'];
        this.skills = skillsArray
          .filter(s => allowed.includes(s.category))
          .reduce((acc: SkillCategory, skill) => {
            const categoryName = this.getCategoryDisplayName(skill.category);
            if (!acc[categoryName]) {
              acc[categoryName] = [];
            }
            acc[categoryName].push(skill);
            return acc;
          }, {} as SkillCategory);
      });

    this.portfolioService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => {
        this.isLoading = loading;
      });
  }

  private getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Data',
      devops: 'DevOps',
      tools: 'Tools',
      soft: 'Soft Skills'
    };
    return categoryMap[category] || category;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
