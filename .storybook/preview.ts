import type { Preview } from '@storybook/angular-vite';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import '../src/styles.scss';

setCompodocJson(docJson);

const LIGHT = 'light';
const DARK = 'dark';
const DATA_THEME = 'data-theme';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '640px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        laptop: { name: 'Laptop', styles: { width: '1024px', height: '860px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
    docs: {
      description: {
        component: 'UI‑Kit DocStatsAI — глобальные настройки Storybook',
      },
    },
    a11y: {
      test: 'todo',
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: LIGHT,
      toolbar: {
        items: [LIGHT, DARK],
      },
    },
  },

  decorators: [
    (storyFn, context) => {
      const theme = context.globals.theme;

      if (theme === DARK) {
        document.documentElement.setAttribute(DATA_THEME, DARK);
      } else {
        document.documentElement.removeAttribute(DATA_THEME);
      }

      return storyFn();
    },
  ],
};

export default preview;
