import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridComponent } from './course-grid-component.component';


describe('CourseGridComponentComponent', () => {
  let component: CourseGridComponent;
  let fixture: ComponentFixture<CourseGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGridComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
