import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionProjectsComponent } from './main-section.projects.component';

describe('MainSectionProjectsComponent', () => {
  let component: MainSectionProjectsComponent;
  let fixture: ComponentFixture<MainSectionProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSectionProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSectionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
