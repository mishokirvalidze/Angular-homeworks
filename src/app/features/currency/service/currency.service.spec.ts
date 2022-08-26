import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientModule } from '@angular/common/http';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
