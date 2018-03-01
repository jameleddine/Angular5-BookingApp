import { TestBed, inject } from '@angular/core/testing';

import { ServiceLoginService } from './service-login.service';

describe('ServiceLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLoginService]
    });
  });

  it('should be created', inject([ServiceLoginService], (service: ServiceLoginService) => {
    expect(service).toBeTruthy();
  }));
});
