import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentserviceComponent } from './componentservice.component';

describe('ComponentserviceComponent', () => {
  let component: ComponentserviceComponent;
  let fixture: ComponentFixture<ComponentserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
