import { IMAGE_CONFIG } from '@angular/common';

export function disableImageWarningsProvider() {
  return {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true,
      disableImageLazyLoadWarning: true,
    },
  };
}
