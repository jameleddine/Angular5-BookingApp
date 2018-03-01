import { TestBed, inject } from '@angular/core/testing';

import { DashboardServicesService } from './dashboard-services.service';

describe('DashboardServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServicesService]
    });
  });

  it('should be created', inject([DashboardServicesService], (service: DashboardServicesService) => {
    expect(service).toBeTruthy();
  }));
});
