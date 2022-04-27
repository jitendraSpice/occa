import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeCourseComponent } from './upgrade-course.component';

describe('UpgradeCourseComponent', () => {
  let component: UpgradeCourseComponent;
  let fixture: ComponentFixture<UpgradeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
