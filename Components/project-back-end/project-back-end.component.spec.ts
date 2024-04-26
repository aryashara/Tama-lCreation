import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBackEndComponent } from './project-back-end.component';

describe('ProjectBackEndComponent', () => {
  let component: ProjectBackEndComponent;
  let fixture: ComponentFixture<ProjectBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBackEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
