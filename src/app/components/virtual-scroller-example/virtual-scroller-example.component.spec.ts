import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollerExampleComponent } from './virtual-scroller-example.component';

describe('VirtualScrollerExampleComponent', () => {
  let component: VirtualScrollerExampleComponent;
  let fixture: ComponentFixture<VirtualScrollerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
