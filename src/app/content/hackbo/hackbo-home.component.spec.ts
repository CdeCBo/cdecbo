import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackboHomeComponent } from './hackbo-home.component';

describe('HackboHomeComponent', () => {
  let component: HackboHomeComponent;
  let fixture: ComponentFixture<HackboHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackboHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
