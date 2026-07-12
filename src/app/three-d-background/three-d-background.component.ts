import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-d-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #rendererContainer class="renderer-container"></div>
  `,
  styles: [`
    .renderer-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }
  `]
})
export class ThreeDBackgroundComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private animationFrameId: number | null = null;
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize scene, camera, etc.
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    this.camera.position.z = 20;
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0); // transparent background
  }
  
  ngAfterViewInit(): void {
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.createParticles();
    this.animate();
    
    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }
  
  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    
    // Clean up ThreeJS resources
    if (this.particles) {
      this.scene.remove(this.particles);
      (this.particles.geometry as THREE.BufferGeometry).dispose();
      (this.particles.material as THREE.Material).dispose();
    }
    
    this.renderer.dispose();
  }
  
  private createParticles(): void {
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorChoices = [
      new THREE.Color(0x5389ff), // blue
      new THREE.Color(0xff53bc), // pink
      new THREE.Color(0x53ff9b), // green
    ];
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
      
      // Color
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }
  
  private animate(): void {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    
    if (this.particles) {
      this.particles.rotation.x += 0.0005;
      this.particles.rotation.y += 0.001;
    }
    
    // Track mouse movement for interactive effect
    this.renderer.render(this.scene, this.camera);
  }
  
  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
