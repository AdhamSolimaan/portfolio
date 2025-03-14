import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto py-16">
      <div class="bg-black bg-opacity-50 p-8 rounded-lg text-text-color">
        <pre class="text-sm md:text-base font-mono leading-relaxed">
<span class="text-secondary-color">class</span> <span class="text-primary-color">AdhamSoliman</span> {{'{'}}&#125;

  <span class="text-tertiary-color">// Experienced Java Backend Developer with a passion for clean code</span>

  <span class="text-secondary-color">constructor</span>() {{'{'}}&#125;
    <span class="text-highlight-color">this</span>.<span class="text-primary-color">name</span> = '<span class="text-tertiary-color">Adham Soliman Abbas Soliman</span>'
    <span class="text-highlight-color">this</span>.<span class="text-primary-color">email</span> = '<span class="text-tertiary-color">adhamsoliman12199&#64;gmail.com</span>'
    <span class="text-highlight-color">this</span>.<span class="text-primary-color">location</span> = '<span class="text-tertiary-color">6th of October, Egypt</span>'
    <span class="text-highlight-color">this</span>.<span class="text-primary-color">phone</span> = '<span class="text-tertiary-color">+201003197262</span>'
    <span class="text-highlight-color">this</span>.<span class="text-primary-color">militaryService</span> = '<span class="text-tertiary-color">Completed (December 2022)</span>'
  {{'}'}}&#125;

  <span class="text-secondary-color">profile</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> '<span class="text-tertiary-color">Experienced Java Backend Developer skilled in Spring Boot and databases, focused on building efficient and secure systems with clean, maintainable code. Adept at optimizing application performance and ensuring high scalability.</span>'
  {{'}'}}&#125;

  <span class="text-secondary-color">education</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> [
      {{'{'}}&#125;
        '<span class="text-primary-color">degree</span>': '<span class="text-tertiary-color">B.Sc. in Communication and Electronics Engineering</span>',
        '<span class="text-primary-color">institution</span>': '<span class="text-tertiary-color">Faculty of Engineering, Suez Canal University</span>',
        '<span class="text-primary-color">period</span>': '<span class="text-tertiary-color">09/2016 – 07/2021</span>',
        '<span class="text-primary-color">grade</span>': '<span class="text-tertiary-color">CGPA 2.79 / Very Good</span>'
      {{'}'}},
      {{'{'}}&#125;
        '<span class="text-primary-color">degree</span>': '<span class="text-tertiary-color">High School Diploma, Egyptian GCSE</span>',
        '<span class="text-primary-color">institution</span>': '<span class="text-tertiary-color">Amoun Private School</span>',
        '<span class="text-primary-color">period</span>': '<span class="text-tertiary-color">09/2013 – 07/2016</span>',
        '<span class="text-primary-color">grade</span>': '<span class="text-tertiary-color">96.52%</span>'
      {{'}'}}&#125;
    ]
  {{'}'}}&#125;

  <span class="text-secondary-color">experience</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> [
      {{'{'}}&#125;
        '<span class="text-primary-color">position</span>': '<span class="text-tertiary-color">Java Developer</span>',
        '<span class="text-primary-color">company</span>': '<span class="text-tertiary-color">Ntg Clarity</span>',
        '<span class="text-primary-color">period</span>': '<span class="text-tertiary-color">09/2024 – present</span>',
        '<span class="text-primary-color">location</span>': '<span class="text-tertiary-color">Giza, Egypt</span>'
      {{'}'}},
      {{'{'}}&#125;
        '<span class="text-primary-color">position</span>': '<span class="text-tertiary-color">Software Engineer</span>',
        '<span class="text-primary-color">company</span>': '<span class="text-tertiary-color">Sky Humans Company</span>',
        '<span class="text-primary-color">period</span>': '<span class="text-tertiary-color">01/2024 – 08/2024</span>',
        '<span class="text-primary-color">location</span>': '<span class="text-tertiary-color">Giza, Egypt</span>'
      {{'}'}},
      {{'{'}}&#125;
        '<span class="text-primary-color">position</span>': '<span class="text-tertiary-color">Wireless Communication Engineering Trainee</span>',
        '<span class="text-primary-color">company</span>': '<span class="text-tertiary-color">Information Technology Institute (ITI)</span>',
        '<span class="text-primary-color">period</span>': '<span class="text-tertiary-color">08/2019 – 08/2019</span>',
        '<span class="text-primary-color">location</span>': '<span class="text-tertiary-color">Ismailia, Egypt</span>'
      {{'}'}}&#125;
    ]
  {{'}'}}&#125;

  <span class="text-secondary-color">skills</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> [
      '<span class="text-tertiary-color">Java</span>',
      '<span class="text-tertiary-color">Python</span>',
      '<span class="text-tertiary-color">Spring Boot</span>',
      '<span class="text-tertiary-color">Hibernate</span>',
      '<span class="text-tertiary-color">Spring Security</span>',
      '<span class="text-tertiary-color">JPA</span>',
      '<span class="text-tertiary-color">PostgreSQL</span>',
      '<span class="text-tertiary-color">MySQL</span>',
      '<span class="text-tertiary-color">RESTful APIs</span>',
      '<span class="text-tertiary-color">SOAP</span>'
    ]
  {{'}'}}&#125;

  <span class="text-secondary-color">projects</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> [
      '<span class="text-tertiary-color">Smart Campus Mobile App</span>',
      '<span class="text-tertiary-color">Minesweeper Robot</span>',
      '<span class="text-tertiary-color">Spring Boot Donation Website</span>',
      '<span class="text-tertiary-color">Spring Boot To-Do List Application</span>'
    ]
  {{'}'}}&#125;

  <span class="text-secondary-color">languages</span>() {{'{'}}&#125;
    <span class="text-highlight-color">return</span> {{'{'}}&#125;
      '<span class="text-primary-color">Arabic</span>': '<span class="text-tertiary-color">Native</span>',
      '<span class="text-primary-color">English</span>': '<span class="text-tertiary-color">Very Good</span>'
    {{'}'}}&#125;
  {{'}'}}&#125;
{{'}'}}&#125;
        </pre>
      </div>
    </div>
  `,
  styles: [`
    .text-primary-color {
      color: var(--primary-color);
    }

    .text-secondary-color {
      color: var(--secondary-color);
    }

    .text-tertiary-color {
      color: var(--tertiary-color);
    }

    .text-highlight-color {
      color: var(--highlight-color);
    }

    pre {
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  `]
})
export class CvComponent {}
