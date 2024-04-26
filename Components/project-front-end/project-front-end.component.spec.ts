import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFrontEndComponent } from './project-front-end.component';

describe('ProjectFrontEndComponent', () => {
  let component: ProjectFrontEndComponent;
  let fixture: ComponentFixture<ProjectFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectFrontEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
