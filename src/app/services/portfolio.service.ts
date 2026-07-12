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
  category: 'backend' | 'fullstack' | 'telecom' | 'personal';
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
  level: number; // 1-5
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
      title: 'Java Backend Developer',
      company: 'NTG Clarity Company',
      location: 'Giza, Egypt',
      period: '09/2024 – Present',
      current: true,
      bullets: [
        'Develop and maintain Spring Boot backend services for enterprise telecom clients including Vodafone and STC.',
        'Implement secure RESTful APIs enabling communication across telecom platform components.',
        'Optimize SQL queries and work with PostgreSQL via Spring Data JPA for large-scale telecom data.',
        'Troubleshoot production issues to protect high availability for Vodafone and STC environments.',
        'Collaborate with architects, team leads, and QA on estimation, sprint planning, and code reviews.',
        'Contribute to CI/CD pipeline setup and automation for build, test, and deployment workflows.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Sky Humans Company',
      location: 'Giza, Egypt',
      period: '06/2023 – 08/2024',
      bullets: [
        'Built Java/Spring Boot backend services for clients in Saudi Arabia and the UAE.',
        'Designed and implemented RESTful APIs supporting web and mobile applications.',
        'Integrated PostgreSQL and MySQL databases using Spring Data JPA.',
        'Applied business logic, validation, and exception handling for reliable deliveries.',
        'Collaborated with frontend developers and project managers to ship client requirements on time.',
        'Improved performance through bug fixing, query optimization, and clean Git-based workflows.'
      ]
    }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'STC NETCONT — Network Control',
      company: 'NTG Clarity · STC KSA',
      description:
        'Built backend control services for STC that bar/unbar network sites from GIS-fed site lists and orchestrate actions across multiple Network Management Systems (NMS).',
      impact: 'Enabled automated, auditable network control for telecom operations across integrated NMS platforms.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'GIS Integration', 'NMS', 'PostgreSQL'],
      features: [
        'Bar/unbar site lists received from GIS',
        'Multi-NMS integration for network control',
        'Operational workflows with logging and audit trails',
        'Stable APIs for telecom-grade environments'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Java Backend Developer',
      imageUrl: '/assets/images/projects/netcont.jpg'
    },
    {
      id: 2,
      title: 'SM — Service Management',
      company: 'NTG Clarity · Vodafone',
      description:
        'Full-stack service management platform for Vodafone field operations: work orders, service requests, and technical events across web and mobile with real-time status tracking.',
      impact: 'Streamlined technician dispatch with QR verification and automated notifications from customer systems to the field.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Mobile Integration', 'Notifications'],
      features: [
        'Work order and service request management',
        'Field technician mobile distribution',
        'Real-time status tracking',
        'QR code verification and automated alerts'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Full-Stack / Backend Developer',
      imageUrl: '/assets/images/projects/sm.jpg'
    },
    {
      id: 3,
      title: 'VSM — Vodafone Service Management',
      company: 'NTG Clarity · Vodafone',
      description:
        'Developed and maintained backend services for monitoring users and Vodafone-provided internet devices, with REST APIs and optimized database access for reliable ops workflows.',
      impact: 'Improved retrieval speed and system stability for device/user monitoring used by operations teams.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Spring Data JPA'],
      features: [
        'User and CPE/internet device monitoring',
        'REST APIs for frontend consumers',
        'Query optimization for faster data access',
        'Production support and troubleshooting'
      ],
      category: 'telecom',
      status: 'completed',
      duration: '2024 – Present',
      role: 'Java Backend Developer',
      imageUrl: '/assets/images/projects/vsm.jpg'
    },
    {
      id: 4,
      title: 'Donation Platform',
      company: 'NTG Clarity (Internal)',
      description:
        'Full-stack internal donation platform modeled after e-commerce flows (without payments): registration, listings, cart, and catalog management on Spring Boot + PostgreSQL.',
      impact: 'Delivered a maintainable, scalable internal product using Spring Boot best practices.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'JPA/Hibernate', 'Angular'],
      features: [
        'User registration and profiles',
        'Item listing and categorization',
        'Cart management workflows',
        'Validated REST APIs and DB optimization'
      ],
      category: 'fullstack',
      status: 'completed',
      duration: '2024',
      role: 'Full-Stack Developer',
      imageUrl: '/assets/images/projects/donation.jpg'
    },
    {
      id: 5,
      title: 'To-Do List Application',
      company: 'NTG Clarity (Internal)',
      description:
        'Task management API with full CRUD, validation, and dual DB setup (H2 for tests, PostgreSQL for production) following clean architecture principles.',
      impact: 'Demonstrates production-ready Spring Boot patterns: validation, error handling, and environment-based persistence.',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2', 'PostgreSQL', 'REST APIs'],
      features: [
        'Full CRUD task operations',
        'Validation and consistent API errors',
        'H2 testing / PostgreSQL production',
        'Clean, maintainable structure'
      ],
      category: 'backend',
      status: 'completed',
      duration: '2024',
      role: 'Backend Developer',
      imageUrl: '/assets/images/projects/todo.jpg'
    },
    {
      id: 6,
      title: 'Task Management System',
      company: 'Sky Humans',
      description:
        'REST APIs for task creation, updates, and tracking with consistent responses, CRUD flows, and database integration for client applications.',
      impact: 'Reliable task tracking APIs delivered for regional client projects.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Spring Data JPA'],
      features: [
        'Task create/update/track APIs',
        'CRUD with DB integration',
        'Consistent error and response handling'
      ],
      category: 'backend',
      status: 'completed',
      duration: '2023 – 2024',
      role: 'Java Backend Developer',
      imageUrl: '/assets/images/projects/tasks.jpg'
    },
    {
      id: 7,
      title: 'Order & Customer Management',
      company: 'Sky Humans',
      description:
        'Backend services for orders, customers, and status workflows with business logic, query optimization, and collaborative testing/issue resolution.',
      impact: 'Supported on-time delivery of order/customer backends for KSA/UAE clients.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL'],
      features: [
        'Order and customer domain services',
        'Status workflow business logic',
        'Optimized queries and issue resolution'
      ],
      category: 'backend',
      status: 'completed',
      duration: '2023 – 2024',
      role: 'Java Backend Developer',
      imageUrl: '/assets/images/projects/orders.jpg'
    },
    {
      id: 8,
      title: 'Portfolio Website',
      company: 'Personal',
      description:
        'Angular portfolio with three professional themes, smooth motion, filterable projects, and CV-aligned content showcasing full-stack Java expertise.',
      impact: 'Living product that demonstrates frontend craft alongside backend experience.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'RxJS', 'Responsive Design'],
      features: [
        'Pro Blue / Black / White themes',
        'Filterable project showcase',
        'Skills visualization and CV download',
        'Mobile-first responsive layout'
      ],
      category: 'personal',
      status: 'completed',
      duration: '2025 – 2026',
      role: 'Full-Stack Developer',
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
      map(projects => projects.filter(p => p.category === 'telecom' || p.id <= 3).slice(0, 3))
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

      { name: 'Angular', category: 'frontend', level: 4, icon: 'fab fa-angular' },
      { name: 'TypeScript', category: 'frontend', level: 4, icon: 'fab fa-js-square' },
      { name: 'JavaScript', category: 'frontend', level: 4, icon: 'fab fa-js' },
      { name: 'HTML5 / CSS3', category: 'frontend', level: 4, icon: 'fab fa-html5' },
      { name: 'SCSS', category: 'frontend', level: 3, icon: 'fab fa-sass' },

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
