import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrliComponent } from './grli.component';

describe('GrliComponent', () => {
  let component: GrliComponent;
  let fixture: ComponentFixture<GrliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrliComponent]
    });
    fixture = TestBed.createComponent(GrliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
