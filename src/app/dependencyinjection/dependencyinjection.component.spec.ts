import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyinjectionComponent } from './dependencyinjection.component';

describe('DependencyinjectionComponent', () => {
  let component: DependencyinjectionComponent;
  let fixture: ComponentFixture<DependencyinjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyinjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
