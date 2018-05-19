import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallEmployeesComponent } from './showall-employees.component';

describe('ShowallEmployeesComponent', () => {
  let component: ShowallEmployeesComponent;
  let fixture: ComponentFixture<ShowallEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
