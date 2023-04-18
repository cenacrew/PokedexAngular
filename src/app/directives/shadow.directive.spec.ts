import { ElementRef } from '@angular/core';
import { ShadowDirective } from './shadow.directive';

describe('ShadowDirective', () => {
  it('should create an instance', () => {
    const directive = new ShadowDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
