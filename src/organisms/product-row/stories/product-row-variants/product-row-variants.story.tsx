import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductRow } from "../../product-row";
import type { ProductRowProps } from "../../product-row.type";

const meta: Meta<ProductRowProps> = {
  title: "organisms/product-row/variants",
  component: ProductRow,
};

export default meta;
type Story = StoryObj<ProductRowProps>;

const PICOTAN = {
  id: "picotan-lock-18",
  name: "피코탄 락 18",
  sku: "H056289CKAB",
  imageUrl: "https://picsum.photos/seed/picotan/96",
};

const KELLY = {
  id: "kelly-25",
  name: "켈리 25 시계",
  sku: "H078444CKAA",
};

const LONG_NAME = {
  id: "long-name",
  name: "버킨 30 토고 골드 클레망스 팔라듐 하드웨어 리미티드 에디션",
  sku: "H077444CKAB",
  imageUrl: "https://picsum.photos/seed/birkin/96",
};

function InteractiveRow(args: ProductRowProps) {
  const [selected, setSelected] = useState(args.selected ?? false);
  return (
    <ProductRow
      {...args}
      selected={selected}
      onToggle={() => setSelected((s) => !s)}
    />
  );
}

export const Default: Story = {
  args: {
    product: PICOTAN,
    selected: false,
    onToggle: () => {},
  },
  render: (args) => <InteractiveRow {...args} />,
};

export const Selected: Story = {
  args: {
    product: PICOTAN,
    selected: true,
    onToggle: () => {},
  },
  render: (args) => <InteractiveRow {...args} />,
};

export const WithoutThumbnail: Story = {
  args: {
    product: KELLY,
    selected: false,
    onToggle: () => {},
  },
  render: (args) => <InteractiveRow {...args} />,
};

export const Disabled: Story = {
  args: {
    product: PICOTAN,
    selected: false,
    disabled: true,
    onToggle: () => {},
  },
};

export const DisabledSelected: Story = {
  args: {
    product: PICOTAN,
    selected: true,
    disabled: true,
    onToggle: () => {},
  },
};

export const LongName: Story = {
  args: {
    product: LONG_NAME,
    selected: false,
    onToggle: () => {},
  },
  render: (args) => <InteractiveRow {...args} />,
};
