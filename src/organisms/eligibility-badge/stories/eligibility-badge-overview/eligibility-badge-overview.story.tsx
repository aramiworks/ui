import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, XStack, YStack } from "tamagui";
import { EligibilityBadge } from "../../eligibility-badge";
import { SectionLabel } from "../../../../storybook";

function Overview() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={32}
      alignItems="flex-start"
    >
      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Eligible" />
        <EligibilityBadge status="eligible" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Pending" />
        <EligibilityBadge status="pending" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Ineligible" />
        <EligibilityBadge status="ineligible" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Expired" />
        <EligibilityBadge status="expired" />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="With Icon" />
        <EligibilityBadge
          status="eligible"
          icon={<Text fontSize={12}>✓</Text>}
        />
      </YStack>

      <YStack alignItems="center" gap={8}>
        <SectionLabel label="Custom Label" />
        <EligibilityBadge status="eligible" label="Available" />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "organisms/eligibility-badge/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc?node-id=1768-21",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
