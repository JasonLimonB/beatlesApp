import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CancionesComponent } from './canciones.component';

describe('CancionesComponent', () => {
  let component: CancionesComponent;
  let fixture: ComponentFixture<CancionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
