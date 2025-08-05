import * as outlineIcons from '@heroicons/react/24/solid';
import { createElement } from 'react';

export function iconResolver(iconName?: string | null) {
  if (!iconName) return null;

  const IconComponent = outlineIcons[iconName as keyof typeof outlineIcons];
  if (IconComponent) {
    return createElement(IconComponent, { className: 'w-6 h-6' });
  }

  return createElement('img', {
    src: `/${iconName}`,
    alt: `${iconName} icon`,
    width: 20,
    height: 20,
  });
}
