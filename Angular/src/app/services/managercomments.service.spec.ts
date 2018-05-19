import { TestBed, inject } from '@angular/core/testing';

import { ManagercommentsService } from './managercomments.service';

describe('ManagercommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagercommentsService]
    });
  });

  it('should be created', inject([ManagercommentsService], (service: ManagercommentsService) => {
    expect(service).toBeTruthy();
  }));
});
