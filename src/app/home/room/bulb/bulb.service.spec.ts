import { TestBed, inject } from '@angular/core/testing';

import { BulbService } from './bulb.service';

describe('BulbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulbService]
    });
  });

  it('should be created', inject([BulbService], (service: BulbService) => {
    expect(service).toBeTruthy();
  }));
});
