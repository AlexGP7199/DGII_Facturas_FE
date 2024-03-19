import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyenteFacturasComponent } from './contribuyente-facturas.component';

describe('ContribuyenteFacturasComponent', () => {
  let component: ContribuyenteFacturasComponent;
  let fixture: ComponentFixture<ContribuyenteFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuyenteFacturasComponent]
    });
    fixture = TestBed.createComponent(ContribuyenteFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
