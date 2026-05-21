import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "tamagui";
import { KeyValueListCard } from "../../key-value-list-card";
import type { KeyValueListCardProps } from "../../key-value-list-card.type";

const meta: Meta<KeyValueListCardProps> = {
  title: "organisms/key-value-list-card/variants",
  component: KeyValueListCard,
};

export default meta;
type Story = StoryObj<KeyValueListCardProps>;

const SAMPLE_ITEMS = [
  { label: "Brand", value: "Hermès" },
  { label: "Category", value: "Bags" },
  { label: "Price", value: "₩12,000,000" },
];

export const Default: Story = {
  args: {
    items: SAMPLE_ITEMS,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Product Details",
    items: SAMPLE_ITEMS,
  },
};

export const Loading: Story = {
  args: {
    items: [],
    loading: true,
    title: "Loading...",
  },
};

export const WithTrailing: Story = {
  args: {
    items: [
      {
        label: "Status",
        value: "Available",
        trailing: <Text color="$primary">●</Text>,
      },
      { label: "Store", value: "Seoul Maison" },
      { label: "Updated", value: "2 min ago" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Version", value: "1.0.0" }],
  },
};
