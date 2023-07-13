import { TestBed } from '@angular/core/testing';

import { CurtidosService } from './curtidos.service';

describe('CurtidosService', () => {
  let service: CurtidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurtidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
