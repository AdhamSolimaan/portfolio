import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-d-model',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="model-container">
      <div #rendererContainer class="renderer"></div>
    </div>
  `,
  styles: [`
    .model-container {
      width: 100%;
      height: 300px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .renderer {
      width: 100%;
      height: 100%;
    }
  `]
})
export class ThreeDModelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  @Input() skills: string[] = [
    'Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'MySQL',
    'REST APIs', 'Spring Security', 'Angular', 'TypeScript', 'Git'
  ];
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private skillCubes: THREE.Mesh[] = [];
  private mouse = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();
  private animationFrameId: number | null = null;
  
  constructor() {}
  
  ngOnInit(): void {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      60, 
      this.getAspectRatio(), 
      0.1, 
      1000
    );
    this.camera.position.z = 15;
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0.1); // slight background
  }
  
  ngAfterViewInit(): void {
    this.setupRenderer();
    this.createLights();
    this.createSkillCubes();
    this.animate();
    
    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    // Handle mouse movement for interactivity
    const container = this.rendererContainer.nativeElement;
    container.addEventListener('mousemove', this.onMouseMove.bind(this));
    container.addEventListener('touchmove', this.onTouchMove.bind(this));
  }
  
  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    // Remove event listeners
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    const container = this.rendererContainer.nativeElement;
    container.removeEventListener('mousemove', this.onMouseMove.bind(this));
    container.removeEventListener('touchmove', this.onTouchMove.bind(this));
    
    // Clean up resources
    this.skillCubes.forEach(cube => {
      this.scene.remove(cube);
      (cube.geometry as THREE.BufferGeometry).dispose();
      (cube.material as THREE.Material).dispose();
    });
    
    this.renderer.dispose();
  }
  
  private setupRenderer(): void {
    const container = this.rendererContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);
  }
  
  private createLights(): void {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
  }
  
  private createSkillCubes(): void {
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x5389ff, flatShading: true }), // blue
      new THREE.MeshPhongMaterial({ color: 0xff53bc, flatShading: true }), // pink
      new THREE.MeshPhongMaterial({ color: 0x53ff9b, flatShading: true }), // green
      new THREE.MeshPhongMaterial({ color: 0xffaa53, flatShading: true }), // orange
      new THREE.MeshPhongMaterial({ color: 0xaa53ff, flatShading: true })  // purple
    ];
    
    // Create cubes in a circular pattern
    const radius = 8;
    const numCubes = Math.min(10, this.skills.length); // Limit to 10 cubes max
    
    for (let i = 0; i < numCubes; i++) {
      // Create slightly different sized cubes
      const size = 0.8 + Math.random() * 0.6;
      const geometry = new THREE.BoxGeometry(size, size, size);
      
      // Randomly select a material
      const material = materials[Math.floor(Math.random() * materials.length)];
      
      const cube = new THREE.Mesh(geometry, material);
      
      // Position in a circle with some randomness
      const angle = (i / numCubes) * Math.PI * 2;
      const random = 2 * Math.random() - 1; // Random value between -1 and 1
      
      cube.position.x = Math.cos(angle) * (radius + random);
      cube.position.y = Math.sin(angle) * (radius + random);
      cube.position.z = random * 3;
      
      // Set random rotation
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.rotation.z = Math.random() * Math.PI;
      
      // Store initial position and rotation for animation
      (cube as any).initialPosition = cube.position.clone();
      (cube as any).initialRotation = cube.rotation.clone();
      (cube as any).rotationSpeed = {
        x: 0.01 * (Math.random() - 0.5),
        y: 0.01 * (Math.random() - 0.5),
        z: 0.01 * (Math.random() - 0.5)
      };
      
      // Store the skill name
      (cube as any).skill = this.skills[i] || 'Skill';
      
      this.scene.add(cube);
      this.skillCubes.push(cube);
    }
  }
  
  private animate(): void {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    
    // Rotate and move cubes
    this.skillCubes.forEach(cube => {
      // Rotate at custom speed
      cube.rotation.x += (cube as any).rotationSpeed.x;
      cube.rotation.y += (cube as any).rotationSpeed.y;
      cube.rotation.z += (cube as any).rotationSpeed.z;
      
      // Slightly move around initial position
      const time = Date.now() * 0.001;
      const initialPos = (cube as any).initialPosition;
      
      cube.position.x = initialPos.x + Math.sin(time * 0.5) * 0.3;
      cube.position.y = initialPos.y + Math.cos(time * 0.7) * 0.3;
      cube.position.z = initialPos.z + Math.sin(time * 0.3) * 0.3;
    });
    
    this.checkIntersections();
    this.renderer.render(this.scene, this.camera);
  }
  
  private checkIntersections(): void {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.skillCubes);
    
    // Reset all cubes
    this.skillCubes.forEach(cube => {
      if ((cube.material as THREE.MeshPhongMaterial).emissive) {
        (cube.material as THREE.MeshPhongMaterial).emissive.set(0x000000);
        cube.scale.set(1, 1, 1);
      }
    });
    
    // Highlight intersected cube
    if (intersects.length > 0) {
      const intersected = intersects[0].object as THREE.Mesh;
      if ((intersected.material as THREE.MeshPhongMaterial).emissive) {
        (intersected.material as THREE.MeshPhongMaterial).emissive.set(0x444444);
        intersected.scale.set(1.2, 1.2, 1.2);
      }
    }
  }
  
  private onMouseMove(event: MouseEvent): void {
    const rect = this.rendererContainer.nativeElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  private onTouchMove(event: TouchEvent): void {
    if (event.touches.length > 0) {
      const rect = this.rendererContainer.nativeElement.getBoundingClientRect();
      this.mouse.x = ((event.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
    }
  }
  
  private onWindowResize(): void {
    const container = this.rendererContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  private getAspectRatio(): number {
    const container = this.rendererContainer.nativeElement;
    return container.clientWidth / container.clientHeight;
  }
}
