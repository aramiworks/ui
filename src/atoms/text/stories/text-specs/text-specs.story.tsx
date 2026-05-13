import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack, Text } from "tamagui";
import { fontSize } from "../../../../tokens/generated/typography";

const ROLE_WEIGHT: Record<keyof typeof fontSize, "Regular" | "Medium"> = {
  displayLarge: "Regular",
  displayMedium: "Regular",
  displaySmall: "Regular",
  headlineLarge: "Regular",
  headlineMedium: "Regular",
  headlineSmall: "Regular",
  titleLarge: "Regular",
  titleMedium: "Medium",
  titleSmall: "Medium",
  bodyLarge: "Regular",
  bodyMedium: "Regular",
  bodySmall: "Regular",
  labelLarge: "Medium",
  labelMedium: "Medium",
  labelSmall: "Medium",
};

const ROLE_LABEL: Record<keyof typeof fontSize, string> = {
  displayLarge: "Display Large",
  displayMedium: "Display Medium",
  displaySmall: "Display Small",
  headlineLarge: "Headline Large",
  headlineMedium: "Headline Medium",
  headlineSmall: "Headline Small",
  titleLarge: "Title Large",
  titleMedium: "Title Medium",
  titleSmall: "Title Small",
  bodyLarge: "Body Large",
  bodyMedium: "Body Medium",
  bodySmall: "Body Small",
  labelLarge: "Label Large",
  labelMedium: "Label Medium",
  labelSmall: "Label Small",
};

const specs = (Object.keys(ROLE_LABEL) as Array<keyof typeof fontSize>).map(
  (role) => ({
    property: ROLE_LABEL[role],
    value: `${fontSize[role]}sp / ${ROLE_WEIGHT[role]}`,
  }),
);

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
        width={160}
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
      <YStack width={392}>
        <SpecRow property="Role + Size" value="Font Size / Weight" isHeader />
        {specs.map((s) => (
          <SpecRow key={s.property} property={s.property} value={s.value} />
        ))}
      </YStack>
    </XStack>
  );
}

const meta: Meta = {
  title: "atoms/text/specs",
  component: Specs,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=1610-2",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
