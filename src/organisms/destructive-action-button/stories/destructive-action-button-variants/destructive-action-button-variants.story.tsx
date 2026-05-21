import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestructiveActionButton } from "../../destructive-action-button";
import type { DestructiveActionButtonProps } from "../../destructive-action-button.type";

const meta: Meta<DestructiveActionButtonProps> = {
  title: "organisms/destructive-action-button/variants",
  component: DestructiveActionButton,
  args: {
    onConfirm: () => {},
  },
};

export default meta;
type Story = StoryObj<DestructiveActionButtonProps>;

export const Default: Story = {
  args: {
    label: "Delete Account",
  },
};

export const WithConfirmation: Story = {
  args: {
    label: "Delete Account",
    confirmTitle: "Delete your account?",
    confirmBody: "This action cannot be undone. All your data will be permanently removed.",
  },
};

export const WithoutConfirmation: Story = {
  args: {
    label: "Remove Item",
    requireConfirm: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Delete Account",
    disabled: true,
  },
};
