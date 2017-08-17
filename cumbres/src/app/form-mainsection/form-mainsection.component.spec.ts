import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMainsectionComponent } from './form-mainsection.component';

describe('FormMainsectionComponent', () => {
  let component: FormMainsectionComponent;
  let fixture: ComponentFixture<FormMainsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMainsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMainsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
