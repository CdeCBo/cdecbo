import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimposiumHomeComponent } from './simposium-home.component';

describe('SimposiumHomeComponent', () => {
  let component: SimposiumHomeComponent;
  let fixture: ComponentFixture<SimposiumHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimposiumHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimposiumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
