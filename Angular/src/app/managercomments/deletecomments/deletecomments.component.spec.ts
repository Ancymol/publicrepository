import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommentsComponent } from './deletecomments.component';

describe('DeletecommentsComponent', () => {
  let component: DeletecommentsComponent;
  let fixture: ComponentFixture<DeletecommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
