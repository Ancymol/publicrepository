import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecommentsComponent } from './createcomments.component';

describe('CreatecommentsComponent', () => {
  let component: CreatecommentsComponent;
  let fixture: ComponentFixture<CreatecommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
