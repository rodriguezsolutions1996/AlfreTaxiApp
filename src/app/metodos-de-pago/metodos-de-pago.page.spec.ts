import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosDePagoPage } from './metodos-de-pago.page';

describe('MetodosDePagoPage', () => {
  let component: MetodosDePagoPage;
  let fixture: ComponentFixture<MetodosDePagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosDePagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodosDePagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
