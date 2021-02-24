import { TestBed } from '@angular/core/testing';

import { ErrorpageRedirectInterceptor } from './errorpage-redirect.interceptor';

describe('ErrorpageRedirectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorpageRedirectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorpageRedirectInterceptor = TestBed.inject(ErrorpageRedirectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
