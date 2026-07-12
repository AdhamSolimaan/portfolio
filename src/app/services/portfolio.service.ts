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
  category: 'fullstack' | 'telecom' | 'personal' | 'freelance';
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
      title: 'Full Stack Engineer (Java - Angular)',
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
      title: 'Full Stack Engineer (Java - Angular)',
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
      title: 'Adham Soliman - Personal Portfolio',
      company: 'Freelance - Personal Brand',
      description:
        'My own Angular portfolio website for Adham Soliman - themes, project filters, skills, contact, and CV - showcasing Full Stack work with Angular frontends and Java/Spring Boot backends.',
      impact: 'Personal brand site recruiters and clients can scan for Angular + Java experience.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'RxJS', 'Responsive Design'],
      features: [
        'Multi-theme Angular SPA with project filters',
        'Experience timeline, skills map, and CV download',
        'Contact form and mobile-first layout',
        'Featured telecom and freelance project showcase'
      ],
      category: 'personal',
      status: 'completed',
      duration: '2025 – 2026',
      role: 'Full Stack Engineer',
      imageUrl: 'assets/images/projects/adham-soliman-portfolio.jpg',
      demoUrl: '/'
    },
    {
      id: 2,
      title: 'Wink Entertainment - Company Portfolio',
      company: 'Freelance - Wink Entertainment L.L.C.',
      description:
        'Company portfolio website for Wink Entertainment - event agency site covering services, partners, event galleries, and portfolio download for conferences, exhibitions, and entertainment shows in Saudi Arabia.',
      impact: 'Gave the company a polished Angular web presence to present services and past events to clients.',
      technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Bootstrap', 'SCSS', 'Responsive Design'],
      features: [
        'Company home with services and partner carousel',
        'Event galleries for Riyadh Season and major productions',
        'About, contact, and downloadable company portfolio PDF',
        'Responsive UI for desktop and mobile'
      ],
      category: 'freelance',
      status: 'completed',
      duration: '2025',
      role: 'Frontend Developer',
      imageUrl: 'assets/images/projects/wink-entertainment.png',
      demoUrl: 'https://winkems.vercel.app/'
    },
    {
      id: 3,
      title: 'Dr. Ahmed Raafat - Nutrition Website',
      company: 'Freelance - Clinical Nutrition',
      description:
        'Nutrition doctor website for Dr. Ahmed Raafat - clinical nutritionist site with services, stats, testimonials, blog, and contact for personalized nutrition plans, weight management, and sports nutrition.',
      impact: 'Helped the clinic present services and convert visitors into consultation inquiries.',
      technologies: ['Angular', 'TypeScript', 'EmailJS', 'CSS3', 'Responsive Design'],
      features: [
        'Hero and services for clinical, weight, and sports nutrition',
        'Client stats, testimonials, and blog sections',
        'Contact form with EmailJS integration',
        'Mobile-friendly marketing layout'
      ],
      category: 'freelance',
      status: 'completed',
      duration: '2025',
      role: 'Frontend Developer',
      imageUrl: 'assets/images/projects/nutrition-doctor.jpg',
      demoUrl: 'https://nutrition-website-self.vercel.app/'
    },
    {
      id: 4,
      title: 'Ahmed Kassem - Personal Profile',
      company: 'Freelance - Personal Profile',
      description:
        'Personal profile portfolio for Ahmed Kassem - Executive Events, Conferences & Exhibitions Director - with career story, metrics, skills, real event projects, testimonials, and contact.',
      impact: 'Professional personal brand site highlighting 10+ years of entertainment and mega-event leadership.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Responsive Design'],
      features: [
        'Profile hero with typing roles and achievement metrics',
        'Experience, skills, and authentic project portfolio',
        'Testimonials and project-inquiry contact form',
        'CV download and photo integration'
      ],
      category: 'freelance',
      status: 'completed',
      duration: '2025',
      role: 'Frontend Developer',
      imageUrl: 'assets/images/projects/ahmed-kassem-profile.jpg',
      demoUrl: 'https://ahmedkassem.vercel.app/'
    },
    {
      id: 5,
      title: 'STC NETCONT - Network Control',
      company: 'NTG Clarity - STC KSA',
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
      role: 'Full Stack Engineer'
    },
    {
      id: 6,
      title: 'SM - Service Management',
      company: 'NTG Clarity - Vodafone',
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
      role: 'Full Stack Engineer'
    },
    {
      id: 7,
      title: 'VSM - Vodafone Service Management',
      company: 'NTG Clarity - Vodafone',
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
      role: 'Full Stack Engineer'
    },
    {
      id: 8,
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
      role: 'Full Stack Engineer'
    },
    {
      id: 9,
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
      role: 'Full Stack Engineer'
    },
    {
      id: 10,
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
      role: 'Full Stack Engineer'
    },
    {
      id: 11,
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
      role: 'Full Stack Engineer'
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
      map(projects => {
        const liveFreelance = projects.filter(p => p.category === 'freelance' && p.demoUrl);
        return liveFreelance.length >= 3 ? liveFreelance.slice(0, 3) : projects.slice(0, 3);
      })
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
