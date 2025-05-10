import type { Meta, StoryObj } from '@storybook/react';
import Game from '../components/Game';

const meta: Meta<typeof Game> = {
  title: 'Components/Game',
  component: Game,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Game>;

// 基本的なゲーム
export const Default: Story = {
  args: {},
};

// 色を変えたゲーム
export const WithCustomStyle: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};
