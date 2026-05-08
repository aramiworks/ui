import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";
import { fontSize } from "../../../../tokens/generated/typography";

const specs = [
  { property: "Height", value: "56 dp" },
  { property: "Corner radius (filled)", value: "4 dp top" },
  { property: "Corner radius (outlined)", value: "4 dp all" },
  { property: "Padding horizontal", value: "16 dp" },
  { property: "Label font", value: `Body Small (${fontSize.bodySmall}sp)` },
  { property: "Input font", value: `Body Large (${fontSize.bodyLarge}sp)` },
  {
    property: "Helper text font",
    value: `Body Small (${fontSize.bodySmall}sp)`,
  },
  {
    property: "Container (filled)",
    value: "surfaceContainerHighest",
  },
  { property: "Indicator (filled)", value: "1 dp bottom border" },
  { property: "Outline (outlined)", value: "1 dp border all sides" },
  { property: "Error color", value: "error" },
];

function SpecRow({
  property,
  value,
  isHeader,
}: {
  property: string;
  value: string;
  isHeader?: boolean;
}) {
  return (
    <XStack
      height={36}
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor="#E0E0E0"
    >
      <Text
        width={200}
        paddingLeft={16}
        fontSize={14}
        fontWeight={isHeader ? "600" : "400"}
        color="#1C1B1F"
      >
        {property}
      </Text>
      <Text
        flex={1}
        fontSize={14}
        fontWeight={isHeader ? "600" : "400"}
        color="#49454F"
      >
        {value}
      </Text>
    </XStack>
  );
}

function Specs() {
  return (
    <XStack
      backgroundColor="#FFFFFF"
      borderRadius={12}
      borderWidth={1}
      borderColor="#E0E0E0"
      padding={24}
    >
      <YStack width={480}>
        <SpecRow property="Property" value="Value" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/text-field/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=52-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
