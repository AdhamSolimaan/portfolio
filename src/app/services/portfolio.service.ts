import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  features: string[];
  category: 'fullstack' | 'telecom' | 'personal';
  status: 'completed' | 'in-progress' | 'planning';
  duration: string;
  role: string;
  impact?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools' | 'devops' | 'soft';
  level: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private notificationSubject = new BehaviorSubject<{message: string, type: 'success' | 'error' | 'info'} | null>(null);
  public notification$ = this.notificationSubject.asObservable();

  private experiences: Experience[] = [
    {
      title: 'Full Stack Engineer (Java · Angular)',
      company: 'NTG Clarity Company',
      location: 'Giza, Egypt',
      period: '09/2024 – Present',
      current: true,
      bullets: [
        'Build full-stack features with Java/Spring Boot APIs and Angular UIs for telecom clients including Vodafone and STC.',
        'Design secure RESTful APIs and integrate them with Angular frontends across telecom platform modules.',
        'Optimize PostgreSQL access with Spring Data JPA and deliver responsive Angular screens for operational workflows.',
        'Troubleshoot production issues end-to-end (API + UI) to protect availability for Vodafone and STC environments.',
        'Collaborate with architects, leads, and QA on estimation, sprint planning, and code reviews.',
        'Contribute to CI/CD automation covering backend services and Angular application deployments.'
      ]
    },
    {
      title: 'Full Stack Engineer (Java · Angular)',
      company: 'Sky Humans Company',
      location: 'Giza, Egypt',
      period: '06/2023 – 08/2024',
      bullets: [
        'Delivered Java/Spring Boot backends and Angular frontends for clients in Saudi Arabia and the UAE.',
        'Implemented REST APIs and Angular modules supporting web applications for regional products.',
        'Integrated PostgreSQL and MySQL with Spring Data JPA and connected Angular clients via HttpClient.',
        'Applied validation, exception handling, and reactive/template forms for reliable full-stack deliveries.',
        'Worked closely with PMs and stakeholders to ship client requirements on time.',
        'Improved performance through API/query tuning, Angular UX fixes, and clean Git workflows.'
      ]
    }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'STC NETCONT — Network Control',
      company: 'NTG Clarity · STC KSA',
      description:
        'Full-stack network control system for STC: Java/Spring Boot services bar/unbar sites from GIS-fed lists, with Angular screens for operators to monitor and trigger NMS actions.',
      impact: 'Gave telecom ops a unified Angular + Java workflow for automated, auditable network control.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'PostgreSQL', 'GIS / NMS'],
      features: [
        'Angular operator UI for site barring/unbarring workflows',
        'Java REST APIs integrating GIS site lists and multiple NMS systems',
        'Operational logging and audit trails',
        'End-to-end full-stack delivery for telecom-grade environments'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/netcont.jpg'
    },
    {
      id: 2,
      title: 'SM — Service Management',
      company: 'NTG Clarity · Vodafone',
      description:
        'Full-stack Vodafone field service platform: Spring Boot APIs plus Angular web apps managing work orders, service requests, and technician events with real-time status tracking.',
      impact: 'Connected customer systems to field teams through Angular UIs and Java APIs with QR verification and alerts.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Notifications'],
      features: [
        'Angular web modules for work orders and service requests',
        'Java APIs distributing jobs to field technicians',
        'Real-time status tracking across UI and backend',
        'QR verification and automated notifications'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/sm.jpg'
    },
    {
      id: 3,
      title: 'VSM — Vodafone Service Management',
      company: 'NTG Clarity · Vodafone',
      description:
        'Full-stack monitoring product for Vodafone users and internet devices: Angular dashboards consuming Java/Spring Boot REST APIs with optimized PostgreSQL queries.',
      impact: 'Faster device/user insights for ops teams through a cohesive Angular + Java stack.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Spring Data JPA'],
      features: [
        'Angular dashboards for user and CPE monitoring',
        'Java REST APIs for reliable data access',
        'Query optimization for faster UI loads',
        'Production support across frontend and backend'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/vsm.jpg'
    },
    {
      id: 4,
      title: 'Donation Platform',
      company: 'NTG Clarity (Internal)',
      description:
        'Full-stack donation platform (e-commerce style without payments): Angular UI for registration, listings, and cart, backed by Java/Spring Boot APIs and PostgreSQL.',
      impact: 'Shipped a maintainable Angular + Spring Boot internal product following clean full-stack practices.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'REST APIs', 'JPA/Hibernate'],
      features: [
        'Angular flows for registration, catalog, and cart',
        'Java REST APIs with validation',
        'PostgreSQL persistence and query tuning',
        'Reusable full-stack architecture patterns'
      ],
      category: 'fullstack',
      status: 'completed',
      duration: '2024',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/donation.jpg'
    },
    {
      id: 5,
      title: 'To-Do List Application',
      company: 'NTG Clarity (Internal)',
      description:
        'Full-stack task manager: Angular CRUD UI paired with Spring Boot APIs, validation, and dual DB setup (H2 tests / PostgreSQL production).',
      impact: 'Showcases production-ready Angular + Java patterns for forms, APIs, and environment-based persistence.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Spring Data JPA', 'PostgreSQL', 'H2'],
      features: [
        'Angular task board with create/update/delete',
        'Java REST CRUD with validation and errors',
        'H2 testing / PostgreSQL production',
        'Clean full-stack structure'
      ],
      category: 'fullstack',
      status: 'completed',
      duration: '2024',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/todo.jpg'
    },
    {
      id: 6,
      title: 'Task Management System',
      company: 'Sky Humans',
      description:
        'Full-stack task tracking for regional clients: Angular modules for create/update/track flows on top of Java/Spring Boot REST APIs and MySQL.',
      impact: 'Delivered consistent Angular UX and reliable Java APIs for client task workflows.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'MySQL', 'Spring Data JPA'],
      features: [
        'Angular UI for task lifecycle management',
        'Java CRUD APIs with consistent responses',
        'MySQL integration via Spring Data JPA',
        'End-to-end error handling across stack'
      ],
      category: 'fullstack',
      status: 'completed',
      duration: '2023 – 2024',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/tasks.jpg'
    },
    {
      id: 7,
      title: 'Order & Customer Management',
      company: 'Sky Humans',
      description:
        'Full-stack order and customer system: Angular screens for status workflows backed by Java services, business logic, and optimized SQL.',
      impact: 'Helped KSA/UAE clients manage orders end-to-end with Angular + Java delivery.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'PostgreSQL', 'MySQL'],
      features: [
        'Angular views for orders, customers, and status',
        'Java domain services and business rules',
        'Optimized queries for responsive UI',
        'Collaborative testing and issue resolution'
      ],
      category: 'fullstack',
      status: 'completed',
      duration: '2023 – 2024',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/orders.jpg'
    },
    {
      id: 8,
      title: 'Portfolio Website',
      company: 'Personal',
      description:
        'This Angular portfolio — themes, project filters, and CV — representing a Full Stack Engineer specializing in Angular frontends and Java/Spring Boot backends.',
      impact: 'Public showcase of Angular craft aligned with Java full-stack professional branding.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'CSS3', 'RxJS'],
      features: [
        'Angular SPA with three professional themes',
        'Filterable Java + Angular project showcase',
        'Skills map and CV download',
        'Mobile-first responsive layout'
      ],
      category: 'personal',
      status: 'completed',
      duration: '2025 – 2026',
      role: 'Full Stack Engineer',
      imageUrl: '/assets/images/projects/portfolio.jpg',
      demoUrl: '/'
    }
  ];

  constructor() {}

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getProjects(): Observable<Project[]> {
    this.trackEvent('projects_loaded', { count: this.projects.length });
    return of(this.projects);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.filter(p => p.category === category))
    );
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.slice(0, 3))
    );
  }

  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      { name: 'Java', category: 'backend', level: 5, icon: 'fab fa-java' },
      { name: 'Spring Boot', category: 'backend', level: 5, icon: 'fas fa-leaf' },
      { name: 'Spring Data JPA', category: 'backend', level: 5, icon: 'fas fa-database' },
      { name: 'Spring Security', category: 'backend', level: 4, icon: 'fas fa-shield-alt' },
      { name: 'Hibernate', category: 'backend', level: 4, icon: 'fas fa-layer-group' },
      { name: 'RESTful APIs', category: 'backend', level: 5, icon: 'fas fa-exchange-alt' },
      { name: 'Spring Cloud', category: 'backend', level: 3, icon: 'fas fa-cloud' },
      { name: 'Microservices', category: 'backend', level: 3, icon: 'fas fa-cubes' },

      { name: 'Angular', category: 'frontend', level: 5, icon: 'fab fa-angular' },
      { name: 'TypeScript', category: 'frontend', level: 5, icon: 'fab fa-js-square' },
      { name: 'JavaScript', category: 'frontend', level: 4, icon: 'fab fa-js' },
      { name: 'HTML5 / CSS3', category: 'frontend', level: 4, icon: 'fab fa-html5' },
      { name: 'RxJS', category: 'frontend', level: 4, icon: 'fas fa-stream' },
      { name: 'SCSS', category: 'frontend', level: 4, icon: 'fab fa-sass' },
      { name: 'Reactive Forms', category: 'frontend', level: 4, icon: 'fas fa-wpforms' },

      { name: 'PostgreSQL', category: 'database', level: 5, icon: 'fas fa-database' },
      { name: 'MySQL', category: 'database', level: 4, icon: 'fas fa-database' },
      { name: 'Oracle', category: 'database', level: 3, icon: 'fas fa-database' },
      { name: 'SQL', category: 'database', level: 5, icon: 'fas fa-search' },

      { name: 'Git / GitHub / GitLab', category: 'tools', level: 4, icon: 'fab fa-git-alt' },
      { name: 'Postman', category: 'tools', level: 4, icon: 'fas fa-paper-plane' },
      { name: 'Swagger / OpenAPI', category: 'tools', level: 4, icon: 'fas fa-book' },
      { name: 'IntelliJ IDEA', category: 'tools', level: 5, icon: 'fas fa-code' },
      { name: 'Maven', category: 'tools', level: 4, icon: 'fas fa-box' },

      { name: 'Docker', category: 'devops', level: 3, icon: 'fab fa-docker' },
      { name: 'CI/CD (Jenkins / GH Actions)', category: 'devops', level: 3, icon: 'fas fa-rocket' },

      { name: 'Problem Solving', category: 'soft', level: 5, icon: 'fas fa-lightbulb' },
      { name: 'Team Collaboration', category: 'soft', level: 5, icon: 'fas fa-users' },
      { name: 'Communication', category: 'soft', level: 4, icon: 'fas fa-comments' }
    ];

    return of(skills);
  }

  submitContactForm(formData: ContactForm): Observable<boolean> {
    this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.trackEvent('contact_form_submitted', { email: formData.email });
    return of(true);
  }

  downloadResume(): Observable<boolean> {
    this.showNotification('Resume downloaded successfully!', 'success');
    this.trackEvent('resume_downloaded');

    const link = document.createElement('a');
    link.href = '/assets/documents/resume.pdf';
    link.download = 'Adham_Soliman_Resume.pdf';
    link.click();

    return of(true);
  }

  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    this.notificationSubject.next({ message, type });
    setTimeout(() => this.hideNotification(), 5000);
  }

  hideNotification(): void {
    this.notificationSubject.next(null);
  }

  trackEvent(eventNameOrCategory: string, actionOrProperties?: string | any, label?: string): void {
    if (typeof actionOrProperties === 'string' && label !== undefined) {
      console.log(`Analytics Event: ${eventNameOrCategory}/${actionOrProperties}`, { label });
    } else {
      console.log(`Analytics Event: ${eventNameOrCategory}`, actionOrProperties);
    }
  }
}
