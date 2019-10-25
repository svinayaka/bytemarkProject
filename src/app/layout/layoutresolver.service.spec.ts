import { TestBed } from '@angular/core/testing';

import { LayoutresolverService } from './layoutresolver.service';

describe('LayoutresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutresolverService = TestBed.get(LayoutresolverService);
    expect(service).toBeTruthy();
  });
});
