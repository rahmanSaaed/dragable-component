import { TestBed } from '@angular/core/testing';

import { BaseServiceService } from './base-service.service';
import { HttpClientModule } from '@angular/common/http';
describe('BaseServiceService', () => {
  let baseServiceService: BaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
      providers: [
        BaseServiceService
      ]
    });
    baseServiceService = TestBed.inject(BaseServiceService);

  });

  it('shoul retrive users', () => {
    baseServiceService.get('a')
      .subscribe(users => { expect(users).toBeTruthy()})
  });
});
