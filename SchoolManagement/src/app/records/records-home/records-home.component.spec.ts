import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsHomeComponent } from './records-home.component';

describe('RecordsHomeComponent', () => {
  let component: RecordsHomeComponent;
  let fixture: ComponentFixture<RecordsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
