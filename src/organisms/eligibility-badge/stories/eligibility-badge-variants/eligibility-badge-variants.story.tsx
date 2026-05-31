import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "tamagui";
import { EligibilityBadge } from "../../eligibility-badge";
import type { EligibilityBadgeProps } from "../../eligibility-badge.type";

const meta: Meta<EligibilityBadgeProps> = {
  title: "organisms/eligibility-badge/variants",
  component: EligibilityBadge,
};

export default meta;
type Story = StoryObj<EligibilityBadgeProps>;

export const Eligible: Story = {
  args: {
    status: "eligible",
  },
};

export const Pending: Story = {
  args: {
    status: "pending",
  },
};

export const Ineligible: Story = {
  args: {
    status: "ineligible",
  },
};

export const Expired: Story = {
  args: {
    status: "expired",
  },
};

export const CustomLabel: Story = {
  args: {
    status: "eligible",
    label: "Approved",
  },
};

export const WithIcon: Story = {
  args: {
    status: "eligible",
    icon: <Text fontSize={12}>✓</Text>,
  },
};
