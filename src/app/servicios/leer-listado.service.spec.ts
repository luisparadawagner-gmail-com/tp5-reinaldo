import { TestBed } from '@angular/core/testing';

import { LeerListadoService } from './leer-listado.service';

describe('LeerListadoService', () => {
  let service: LeerListadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerListadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
