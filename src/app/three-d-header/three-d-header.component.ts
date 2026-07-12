import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

@Component({
  selector: 'app-three-d-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
      <div #rendererContainer class="renderer"></div>
    </div>
  `,
  styles: [`
    .header-container {
      width: 100%;
      height: 200px;
      position: relative;
      overflow: hidden;
      margin-bottom: 2rem;
    }
    
    .renderer {
      width: 100%;
      height: 100%;
    }
  `]
})
export class ThreeDHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  @Input() text: string = 'Java Developer';
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private textMesh: THREE.Mesh | null = null;
  private animationFrameId: number | null = null;
  
  constructor() {}
  
  ngOnInit(): void {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      50, 
      this.getAspectRatio(), 
      0.1, 
      1000
    );
    this.camera.position.z = 15;
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0); // transparent background
  }
  
  ngAfterViewInit(): void {
    this.setupRenderer();
    this.createLights();
    this.load3DText();
    this.animate();
    
    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }
  
  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    // Remove event listeners
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    
    // Clean up resources
    if (this.textMesh) {
      this.scene.remove(this.textMesh);
      (this.textMesh.geometry as THREE.BufferGeometry).dispose();
      if (Array.isArray(this.textMesh.material)) {
        this.textMesh.material.forEach(mat => mat.dispose());
      } else {
        (this.textMesh.material as THREE.Material).dispose();
      }
    }
    
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
    
    // Add another light from another angle
    const directionalLight2 = new THREE.DirectionalLight(0x00ffff, 0.5);
    directionalLight2.position.set(-1, -1, 1);
    this.scene.add(directionalLight2);
  }
  
  private load3DText(): void {
    // Create a simple box geometry as a fallback
    const fallbackGeometry = new THREE.BoxGeometry(8, 2, 1);
    const fallbackMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x5389ff,
      emissive: 0x2233aa,
      shininess: 100
    });
    this.textMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
    this.scene.add(this.textMesh);
    
    // Try to load font asynchronously (might fail in some environments)
    try {
      const loader = new FontLoader();
      
      // Use a CDN for the font
      const fontUrl = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';
      
      loader.load(fontUrl, (font) => {
        // Remove the fallback mesh
        if (this.textMesh) {
          this.scene.remove(this.textMesh);
        }
        
        // Create the text geometry
        const textGeometry = new TextGeometry(this.text, {
          font: font,
          size: 1.5,
          depth: 0.4,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.05,
          bevelOffset: 0,
          bevelSegments: 5
        });
        
        // Center the text
        textGeometry.computeBoundingBox();
        if (textGeometry.boundingBox) {
          const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
          textGeometry.translate(-textWidth / 2, 0, 0);
        }
        
        // Create material
        const textMaterial = [
          new THREE.MeshPhongMaterial({ color: 0x5389ff, emissive: 0x2233aa, shininess: 100 }), // front
          new THREE.MeshPhongMaterial({ color: 0x2233aa }) // side
        ];
        
        // Create mesh and add to scene
        this.textMesh = new THREE.Mesh(textGeometry, textMaterial);
        this.scene.add(this.textMesh);
      });
    } catch (error) {
      console.error('Error loading font:', error);
      // Fallback is already displayed
    }
  }
  
  private animate(): void {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    
    if (this.textMesh) {
      // Simple floating animation
      const time = Date.now() * 0.001;
      this.textMesh.position.y = Math.sin(time) * 0.3;
      this.textMesh.rotation.y = Math.sin(time * 0.5) * 0.2;
    }
    
    this.renderer.render(this.scene, this.camera);
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
