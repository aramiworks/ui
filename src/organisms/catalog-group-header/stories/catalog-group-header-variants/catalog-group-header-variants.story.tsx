import type { Meta, StoryObj } from "@storybook/react-vite";
import { CatalogGroupHeader } from "../../catalog-group-header";
import type { CatalogGroupHeaderProps } from "../../catalog-group-header.type";

const meta: Meta<CatalogGroupHeaderProps> = {
  title: "organisms/catalog-group-header/variants",
  component: CatalogGroupHeader,
};

export default meta;
type Story = StoryObj<CatalogGroupHeaderProps>;

export const Default: Story = {
  args: {
    label: "가방",
    selected: false,
    onToggle: () => {},
  },
};

export const Selected: Story = {
  args: {
    label: "가방",
    selected: true,
    onToggle: () => {},
  },
};

export const Indeterminate: Story = {
  args: {
    label: "가방",
    selected: false,
    indeterminate: true,
    onToggle: () => {},
  },
};

export const WithCount: Story = {
  args: {
    label: "가방",
    count: 12,
    selected: false,
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "가방",
    selected: false,
    disabled: true,
    onToggle: () => {},
  },
};

export const LongLabel: Story = {
  name: "Long Label Truncation",
  args: {
    label: "매우 긴 카테고리 이름이 들어가는 경우 텍스트가 잘리는지 확인합니다",
    count: 99,
    selected: false,
    onToggle: () => {},
  },
};
