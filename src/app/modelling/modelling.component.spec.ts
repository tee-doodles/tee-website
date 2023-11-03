import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellingComponent } from './modelling.component';

describe('ModellingComponent', () => {
  let component: ModellingComponent;
  let fixture: ComponentFixture<ModellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
