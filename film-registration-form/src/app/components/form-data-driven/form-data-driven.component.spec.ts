import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataDrivenComponent } from './form-data-driven.component';

describe('FormDataDrivenComponent', () => {
  let component: FormDataDrivenComponent;
  let fixture: ComponentFixture<FormDataDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
