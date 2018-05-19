import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalluserstoryComponent } from './showalluserstory.component';

describe('ShowalluserstoryComponent', () => {
  let component: ShowalluserstoryComponent;
  let fixture: ComponentFixture<ShowalluserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalluserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalluserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
