import type { Preview } from '@storybook/react'
import { withScreenshot } from 'storycap';

export const decorators = [withScreenshot()];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    chromatic: { disableSnapshot: false },
    layout: 'centered',
    screenshot: {
      viewport: {
        width: 800,
        height: 600,
      },
      waitForComponents: true,
      delay: 3000,
      disableCssAnimation: true
    },
  },
};

export default preview;
