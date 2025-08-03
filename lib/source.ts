import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import * as outlineIcons from '@heroicons/react/24/solid';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/apis',
  source: docs.toFumadocsSource(),
  icon(iconName) {
    if (!iconName) return null;

    const IconComponent = outlineIcons[iconName as keyof typeof outlineIcons];
    if (IconComponent) {
      return createElement(IconComponent);
    }
    return null;
  },
});