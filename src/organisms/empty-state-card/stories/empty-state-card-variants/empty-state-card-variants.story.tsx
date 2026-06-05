import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyStateCard } from "../../empty-state-card";
import type { EmptyStateCardProps } from "../../empty-state-card.type";

const meta: Meta<EmptyStateCardProps> = {
  title: "organisms/empty-state-card/variants",
  component: EmptyStateCard,
};

export default meta;
type Story = StoryObj<EmptyStateCardProps>;

export const TitleOnly: Story = {
  args: {
    title: "No alerts yet",
  },
};

export const WithMessage: Story = {
  args: {
    title: "No alerts yet",
    message: "You'll see restock alerts here once items become available.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "notifications-none",
    title: "No alerts yet",
    message: "You'll see restock alerts here once items become available.",
  },
};

export const WithAction: Story = {
  args: {
    icon: "search",
    title: "Your watchlist is empty",
    message: "Browse the catalog to start tracking items.",
    actionLabel: "Browse catalog",
    onAction: () => {},
  },
};
