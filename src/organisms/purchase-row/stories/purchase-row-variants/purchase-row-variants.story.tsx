import type { Meta, StoryObj } from "@storybook/react-vite";
import { PurchaseRow } from "../../purchase-row";
import type { PurchaseRowProps } from "../../purchase-row.type";

const meta: Meta<PurchaseRowProps> = {
  title: "organisms/purchase-row/variants",
  component: PurchaseRow,
};

export default meta;
type Story = StoryObj<PurchaseRowProps>;

export const Default: Story = {
  args: {
    date: new Date(2026, 4, 21),
    amount: 12000000,
  },
};

export const WithCount: Story = {
  args: {
    date: new Date(2026, 4, 21),
    amount: 5500000,
    count: 3,
  },
};

export const Pressable: Story = {
  args: {
    date: new Date(2026, 3, 15),
    amount: 8200000,
    count: 1,
    onPress: () => {},
  },
};

export const NonKRW: Story = {
  args: {
    date: new Date(2026, 4, 1),
    amount: 9500,
    currency: "USD",
  },
};
