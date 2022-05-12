import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcardsComponent } from './schoolcards.component';

describe('SchoolcardsComponent', () => {
  let component: SchoolcardsComponent;
  let fixture: ComponentFixture<SchoolcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
