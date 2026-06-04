import type { Meta, StoryObj } from "@storybook/react-vite";
import { WatchlistGroupHeader } from "../../watchlist-group-header";
import type { WatchlistGroupHeaderProps } from "../../watchlist-group-header.type";

const meta: Meta<WatchlistGroupHeaderProps> = {
  title: "organisms/watchlist-group-header/variants",
  component: WatchlistGroupHeader,
};

export default meta;
type Story = StoryObj<WatchlistGroupHeaderProps>;

export const Default: Story = {
  args: {
    label: "가방",
  },
};

export const WithCount: Story = {
  args: {
    label: "가방",
    count: 12,
  },
};

export const Expanded: Story = {
  args: {
    label: "가방",
    count: 12,
    collapsed: false,
    onToggle: () => {},
  },
};

export const Collapsed: Story = {
  args: {
    label: "가방",
    count: 12,
    collapsed: true,
    onToggle: () => {},
  },
};

export const LongLabel: Story = {
  name: "Long Label Truncation",
  args: {
    label: "매우 긴 카테고리 이름이 들어가는 경우 텍스트가 잘리는지 확인합니다",
    count: 99,
    onToggle: () => {},
  },
};
