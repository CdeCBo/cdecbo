import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdecboHomeComponent } from './cdecbo-home.component';

describe('CdecboHomeComponent', () => {
  let component: CdecboHomeComponent;
  let fixture: ComponentFixture<CdecboHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdecboHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdecboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
