import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrantComponent } from './addrant.component';

describe('AddrantComponent', () => {
  let component: AddrantComponent;
  let fixture: ComponentFixture<AddrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
