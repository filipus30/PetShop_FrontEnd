import { TestBed } from '@angular/core/testing';

import { IsuserloggedinserviceService } from './isuserloggedinservice.service';

describe('IsuserloggedinserviceService', () => {
  let service: IsuserloggedinserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuserloggedinserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
