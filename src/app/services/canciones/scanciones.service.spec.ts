import { TestBed } from '@angular/core/testing';

import { SCancionesService } from './scanciones.service';

describe('SCancionesService', () => {
  let service: SCancionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCancionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
