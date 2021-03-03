import { TestBed } from '@angular/core/testing';

import { NotifyInterceptor } from './notify.interceptor';

describe('NotifyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotifyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotifyInterceptor = TestBed.inject(NotifyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
