import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAuthComponent } from './people-auth.component';

describe('PeopleAuthComponent', () => {
  let component: PeopleAuthComponent;
  let fixture: ComponentFixture<PeopleAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
