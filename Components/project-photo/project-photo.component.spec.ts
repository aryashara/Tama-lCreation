import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPhotoComponent } from './project-photo.component';

describe('ProjectPhotoComponent', () => {
  let component: ProjectPhotoComponent;
  let fixture: ComponentFixture<ProjectPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
