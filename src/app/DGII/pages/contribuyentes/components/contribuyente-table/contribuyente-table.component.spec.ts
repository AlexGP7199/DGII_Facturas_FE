import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyenteTableComponent } from './contribuyente-table.component';

describe('ContribuyenteTableComponent', () => {
  let component: ContribuyenteTableComponent;
  let fixture: ComponentFixture<ContribuyenteTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuyenteTableComponent]
    });
    fixture = TestBed.createComponent(ContribuyenteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
