import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantdetailComponent } from './rantdetail.component';

describe('RantdetailComponent', () => {
  let component: RantdetailComponent;
  let fixture: ComponentFixture<RantdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
