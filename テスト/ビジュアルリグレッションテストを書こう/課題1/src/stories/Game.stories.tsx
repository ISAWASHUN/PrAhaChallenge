import type { Meta, StoryObj } from '@storybook/react';
import Game from '../components/Game';
import { expect } from '@storybook/test';
import { userEvent, within } from '@storybook/test';

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

// インタラクションテスト - Xプレイヤーが勝利するシナリオ
export const XPlayerWins: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const squares = canvas.getAllByRole('button').filter((button: HTMLElement) => 
      button.className === 'square'
    );
    
    // 横一列を完成させるためのクリックシーケンス（Xが勝利）
    await userEvent.click(squares[0]);
    await userEvent.click(squares[4]);
    await userEvent.click(squares[1]);
    await userEvent.click(squares[5]);
    await userEvent.click(squares[2]);
    
    const statusElement = canvas.getByText(/Winner: X/i);
    expect(statusElement).toBeInTheDocument();
  },
};

// インタラクションテスト - Oプレイヤーが勝利するシナリオ
export const OPlayerWins: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const squares = canvas.getAllByRole('button').filter((button: HTMLElement) => 
      button.className === 'square'
    );
    
    // 斜めを完成させるためのクリックシーケンス（Oが勝利）
    await userEvent.click(squares[0]);
    await userEvent.click(squares[5]);
    await userEvent.click(squares[8]);
    await userEvent.click(squares[2]);
    await userEvent.click(squares[10]);
    await userEvent.click(squares[9]);
    
    const statusElement = canvas.getByText(/Winner: O/i);
    expect(statusElement).toBeInTheDocument();
  },
};
