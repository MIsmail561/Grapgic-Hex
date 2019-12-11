import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsubsComponent } from './agentsubs.component';

describe('AgentsubsComponent', () => {
  let component: AgentsubsComponent;
  let fixture: ComponentFixture<AgentsubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
