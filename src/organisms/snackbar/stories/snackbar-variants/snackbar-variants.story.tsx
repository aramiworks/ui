import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "../../snackbar";
import type { SnackbarProps } from "../../snackbar.type";

const FIGMA_URL =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=1785-8";

const meta: Meta<SnackbarProps> = {
  title: "organisms/snackbar/variants",
  component: Snackbar,
  parameters: {
    design: { type: "figma", url: FIGMA_URL },
  },
  args: {
    visible: true,
    message: "Message sent",
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<SnackbarProps>;

export const TextOnly: Story = {
  args: {},
};

export const WithAction: Story = {
  args: {
    actionLabel: "Undo",
    onAction: () => {},
  },
};

export const WithCloseIcon: Story = {
  args: {
    showCloseIcon: true,
  },
};

export const TwoLine: Story = {
  args: {
    message:
      "An error occurred while processing your request. Please try again later.",
    lines: "two",
    actionLabel: "Retry",
    onAction: () => {},
    showCloseIcon: true,
  },
};
