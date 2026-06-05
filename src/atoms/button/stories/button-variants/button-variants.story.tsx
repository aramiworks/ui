import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../button";
import type { ButtonProps } from "../../button.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=";

const meta: Meta<ButtonProps> = {
  title: "atoms/button/variants",
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: `${FIGMA_BASE}1146-149`,
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Filled: Story = {
  args: { variant: "filled" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

export const Text: Story = {
  args: { variant: "text" },
};

export const Elevated: Story = {
  args: { variant: "elevated" },
};

export const Tonal: Story = {
  args: { variant: "tonal" },
};
