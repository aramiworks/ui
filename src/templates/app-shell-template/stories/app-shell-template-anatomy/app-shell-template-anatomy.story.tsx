import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text, View } from "tamagui";

function Callout({ number }: { number: number }) {
  return (
    <XStack
      width={24}
      height={24}
      borderRadius={12}
      backgroundColor="#6750A4"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={12} fontWeight="600" color="#FFFFFF">
        {number}
      </Text>
    </XStack>
  );
}

function LegendItem({ number, label }: { number: number; label: string }) {
  return (
    <XStack gap={10} alignItems="center">
      <Callout number={number} />
      <Text fontSize={14} color="#1C1B1F">
        {label}
      </Text>
    </XStack>
  );
}

function Anatomy() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
      gap={48}
      alignItems="center"
    >
      {/* Diagram */}
      <YStack
        width={300}
        height={320}
        justifyContent="center"
        alignItems="center"
      >
        <View position="relative" width={200} height={300}>
          {/* Full screen container */}
          <View
            backgroundColor="#F7F2FA"
            borderRadius={12}
            width={200}
            height={300}
            overflow="hidden"
          >
            {/* Top app bar slot */}
            <View
              backgroundColor="#E8DEF8"
              height={48}
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={10} color="#6750A4">
                topAppBar
              </Text>
            </View>

            {/* Content slot */}
            <View
              flex={1}
              padding={8}
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={10} color="#49454F">
                children (flex: 1)
              </Text>
            </View>

            {/* Bottom navigation slot */}
            <View
              backgroundColor="#E8DEF8"
              height={48}
              width="100%"
              justifyContent="center"
              alignItems="center"
              borderTopWidth={1}
              borderTopColor="#CAC4D0"
            >
              <Text fontSize={10} color="#6750A4">
                bottomNavigationBar
              </Text>
            </View>
          </View>

          {/* Callout 1 — Top app bar */}
          <View position="absolute" top={12} right={-30}>
            <Callout number={1} />
          </View>

          {/* Callout 2 — Content */}
          <View position="absolute" top={138} right={-30}>
            <Callout number={2} />
          </View>

          {/* Callout 3 — Bottom navigation */}
          <View position="absolute" bottom={12} right={-30}>
            <Callout number={3} />
          </View>
        </View>
      </YStack>

      {/* Legend */}
      <YStack gap={12}>
        <LegendItem number={1} label="topAppBar slot — pinned to the top" />
        <LegendItem
          number={2}
          label="children slot — fills remaining space (flex: 1)"
        />
        <LegendItem
          number={3}
          label="bottomNavigationBar slot — pinned to the bottom"
        />
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "templates/app-shell-template/anatomy",
  component: Anatomy,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=2165-15",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
