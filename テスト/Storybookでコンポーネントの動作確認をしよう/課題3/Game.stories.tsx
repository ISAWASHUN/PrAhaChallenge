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

// ボード上の位置を明示的に定義
const POSITIONS = {
  TOP_LEFT: '0-0',
  TOP_CENTER: '0-1',
  TOP_RIGHT: '0-2',
  MIDDLE_LEFT: '1-0',
  MIDDLE_CENTER: '1-1',
  MIDDLE_RIGHT: '1-2',
  BOTTOM_LEFT: '2-0',
  BOTTOM_CENTER: '2-1',
  BOTTOM_RIGHT: '2-2',
};

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

export const XPlayerWins: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const topLeft = canvas.getByTestId(`square-${POSITIONS.TOP_LEFT}`);
    const topCenter = canvas.getByTestId(`square-${POSITIONS.TOP_CENTER}`);
    const topRight = canvas.getByTestId(`square-${POSITIONS.TOP_RIGHT}`);
    const middleLeft = canvas.getByTestId(`square-${POSITIONS.MIDDLE_LEFT}`);
    const middleCenter = canvas.getByTestId(`square-${POSITIONS.MIDDLE_CENTER}`);
    
    // 横一列を完成させるためのクリックシーケンス（Xが勝利）
    await userEvent.click(topLeft);    
    await userEvent.click(middleLeft);  
    await userEvent.click(topCenter);   
    await userEvent.click(middleCenter); 
    await userEvent.click(topRight);     
    
    const statusElement = canvas.getByText(/Winner: X/i);
    expect(statusElement).toBeInTheDocument();
  },
};

// インタラクションテスト - Oプレイヤーが勝利するシナリオ
export const OPlayerWins: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // data-testid属性を使ってマスを選択
    const topLeft = canvas.getByTestId(`square-${POSITIONS.TOP_LEFT}`);
    const topRight = canvas.getByTestId(`square-${POSITIONS.TOP_RIGHT}`);
    const middleRight = canvas.getByTestId(`square-${POSITIONS.MIDDLE_RIGHT}`);
    const middleCenter = canvas.getByTestId(`square-${POSITIONS.MIDDLE_CENTER}`);
    const bottomCenter = canvas.getByTestId(`square-${POSITIONS.BOTTOM_CENTER}`);
    const bottomLeft = canvas.getByTestId(`square-${POSITIONS.BOTTOM_LEFT}`);
    
    await userEvent.click(topLeft);      
    await userEvent.click(middleCenter); 
    await userEvent.click(middleRight);  
    await userEvent.click(topRight);     
    await userEvent.click(bottomCenter); 
    await userEvent.click(bottomLeft);    
    
    // 勝利メッセージが表示されていることを確認
    const statusElement = canvas.getByText(/Winner: O/i);
    expect(statusElement).toBeInTheDocument();
  },
};
