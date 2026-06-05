import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "../../chip";
import type { ChipProps } from "../../chip.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<ChipProps> = {
  title: "atoms/chip/variants",
  component: Chip,
  args: {
    label: "Chip",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}1461-8`,
    },
  },
};

export default meta;
type Story = StoryObj<ChipProps>;

export const Assist: Story = {
  args: { type: "assist" },
};

export const Filter: Story = {
  args: { type: "filter" },
};

export const Input: Story = {
  args: { type: "input" },
};

export const Suggestion: Story = {
  args: { type: "suggestion" },
};
