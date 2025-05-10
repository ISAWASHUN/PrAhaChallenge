import type { Meta, StoryObj } from '@storybook/react';
import Square from '../components/Square';

const meta: Meta<typeof Square> = {
  title: 'Components/Square',
  component: Square,
  argTypes: {
    onSquareClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Square>;

// 空のスクエア
export const Empty: Story = {
  args: {
    value: null,
  },
};

// Xが表示されるスクエア
export const X: Story = {
  args: {
    value: 'X',
  },
};

// Oが表示されるスクエア
export const O: Story = {
  args: {
    value: 'O',
  },
};
