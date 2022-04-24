import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestersHomeComponent } from './semesters-home.component';

describe('SemestersHomeComponent', () => {
  let component: SemestersHomeComponent;
  let fixture: ComponentFixture<SemestersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemestersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
