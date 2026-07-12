import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService, Skill } from '../services/portfolio.service';
import { pageFadeAnimation, listStaggerAnimation } from '../shared/animations';

interface GroupedSkills {
  [category: string]: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [pageFadeAnimation, listStaggerAnimation]
})
export class SkillsComponent implements OnInit, OnDestroy {
  groupedSkills: GroupedSkills = {};
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
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

  private loadSkills(): void {
    this.portfolioService.getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe(skills => {
        this.groupedSkills = skills.reduce((acc: GroupedSkills, skill) => {
          const categoryName = this.getCategoryDisplayName(skill.category);
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(skill);
          return acc;
        }, {});
      });
  }

  private getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Databases',
      tools: 'Tools & APIs',
      devops: 'DevOps',
      soft: 'Soft Skills'
    };
    return categoryMap[category] || category;
  }

  getSkillLevelPercentage(level: number): number {
    return level * 20;
  }

  getSkillLevelText(level: number): string {
    const levels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
    return levels[level - 1] || 'Unknown';
  }
}
