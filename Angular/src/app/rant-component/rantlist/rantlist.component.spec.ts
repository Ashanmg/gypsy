import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantlistComponent } from './rantlist.component';

describe('RantlistComponent', () => {
  let component: RantlistComponent;
  let fixture: ComponentFixture<RantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
