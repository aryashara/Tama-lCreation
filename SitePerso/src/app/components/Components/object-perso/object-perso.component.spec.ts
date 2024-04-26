import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPersoComponent } from './object-perso.component';

describe('ObjectPersoComponent', () => {
  let component: ObjectPersoComponent;
  let fixture: ComponentFixture<ObjectPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectPersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
