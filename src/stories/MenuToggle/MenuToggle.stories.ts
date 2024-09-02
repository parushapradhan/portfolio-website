import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MenuToggle from './MenuToggle';

const meta = {
  title: 'Navbar/MenuToggle',
  component: MenuToggle,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuToggle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};