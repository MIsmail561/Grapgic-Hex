import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancersubsComponent } from './lancersubs.component';

describe('LancersubsComponent', () => {
  let component: LancersubsComponent;
  let fixture: ComponentFixture<LancersubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancersubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancersubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
