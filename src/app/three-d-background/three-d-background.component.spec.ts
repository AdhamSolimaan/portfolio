import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDBackgroundComponent } from './three-d-background.component';

describe('ThreeDBackgroundComponent', () => {
  let component: ThreeDBackgroundComponent;
  let fixture: ComponentFixture<ThreeDBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
