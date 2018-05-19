import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallcommentsComponent } from './showallcomments.component';

describe('ShowallcommentsComponent', () => {
  let component: ShowallcommentsComponent;
  let fixture: ComponentFixture<ShowallcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
