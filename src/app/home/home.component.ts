import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  [key: string]: Skill[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideRight', [
      transition(':enter', [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('scale', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isScrolled = false;
  imageLoaded = false;
  activeSection = '';

  featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Smart Campus Mobile App',
      description: 'A comprehensive mobile application for campus management with features like automated attendance, parking management, and student portal.',
      technologies: ['Java', 'Firebase', 'Android'],
      imageUrl: 'assets/images/project1.jpg',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.smartcampus',
      githubUrl: 'https://github.com/username/smart-campus'
    },
    {
      id: 2,
      title: 'Minesweeper Robot',
      description: 'Controlled robot designed to scan specific areas and detect mines with Arduino microcontroller while providing a Graphical User Interface.',
      technologies: ['Arduino', 'Sensors', 'C++'],
      imageUrl: 'assets/images/project2.jpg',
      githubUrl: 'https://github.com/username/minesweeper-robot'
    },
    {
      id: 3,
      title: 'Spring Boot Donation Website',
      description: 'A platform similar to e-commerce systems for managing donations, featuring user registration, item listing, and cart management.',
      technologies: ['Spring Boot', 'PostgreSQL', 'REST API'],
      imageUrl: 'assets/images/project3.jpg',
      liveUrl: 'https://donation-platform.com',
      githubUrl: 'https://github.com/username/donation-platform'
    }
  ];

  skills: SkillCategory = {
    'Backend Development': [
      { name: 'Java', level: 90, category: 'Backend Development' },
      { name: 'Spring Boot', level: 85, category: 'Backend Development' },
      { name: 'Hibernate', level: 80, category: 'Backend Development' },
      { name: 'REST APIs', level: 85, category: 'Backend Development' }
    ],
    'Database': [
      { name: 'PostgreSQL', level: 85, category: 'Database' },
      { name: 'MySQL', level: 80, category: 'Database' },
      { name: 'MongoDB', level: 75, category: 'Database' }
    ],
    'Tools & Others': [
      { name: 'Git', level: 85, category: 'Tools & Others' },
      { name: 'Docker', level: 75, category: 'Tools & Others' },
      { name: 'AWS', level: 70, category: 'Tools & Others' },
      { name: 'Linux', level: 80, category: 'Tools & Others' }
    ]
  };

  constructor() {}

  ngOnInit() {
    this.setupIntersectionObserver();
    this.checkScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  getSkillLevel(skill: Skill): string {
    return `${skill.level}%`;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 