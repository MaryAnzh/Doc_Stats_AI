import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular-vite';
import { HeaderComponent } from './header';
import { provideRouter } from '@angular/router';

const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<HeaderComponent> = {
  args: {},
};
