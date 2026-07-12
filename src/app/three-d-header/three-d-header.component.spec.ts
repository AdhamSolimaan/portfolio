import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDHeaderComponent } from './three-d-header.component';

describe('ThreeDHeaderComponent', () => {
  let component: ThreeDHeaderComponent;
  let fixture: ComponentFixture<ThreeDHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
