import type { Meta, StoryObj } from '@storybook/react';
import Board from '../components/Board';

const meta: Meta<typeof Board> = {
  title: 'Components/Board',
  component: Board,
  argTypes: {
    onPlay: { action: 'played' },
  },
};

export default meta;
type Story = StoryObj<typeof Board>;

// 初期状態（全てのマスが空）
export const Default: Story = {
  args: {
    xIsNext: true,
    squares: Array(12).fill(null),
  },
};

// 勝者が決まっている状態
export const WinnerX: Story = {
  args: {
    xIsNext: false,
    squares: [
      'X', 'X', 'X', null,
      'O', 'O', null, null,
      null, null, null, null,
    ],
  },
};

// 三角形盤面
export const Triangle: Story = {
  args: {
    xIsNext: false,
    squares: [
      '△', '△', '△', '△',
      '△', '△', '△', '△',
      '△', '△', '△', '△',
    ],
  },
};
