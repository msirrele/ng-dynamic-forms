import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormDetailComponent } from './dynamic-form-detail.component';

describe('DynamicFormDetailComponent', () => {
  let component: DynamicFormDetailComponent;
  let fixture: ComponentFixture<DynamicFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
