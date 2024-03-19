import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyenteDetailComponent } from './contribuyente-detail.component';

describe('ContribuyenteDetailComponent', () => {
  let component: ContribuyenteDetailComponent;
  let fixture: ComponentFixture<ContribuyenteDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuyenteDetailComponent]
    });
    fixture = TestBed.createComponent(ContribuyenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
