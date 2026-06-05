import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonCard } from "../../skeleton-card";
import type { SkeletonCardProps } from "../../skeleton-card.type";

const meta: Meta<SkeletonCardProps> = {
  title: "organisms/skeleton-card/variants",
  component: SkeletonCard,
};

export default meta;
type Story = StoryObj<SkeletonCardProps>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
