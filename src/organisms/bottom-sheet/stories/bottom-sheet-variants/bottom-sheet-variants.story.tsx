import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { BottomSheet } from "../../bottom-sheet";
import type { BottomSheetProps } from "../../bottom-sheet.type";

const FIGMA_URL =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=1665-12";

const meta: Meta<BottomSheetProps> = {
  title: "organisms/bottom-sheet/variants",
  component: BottomSheet,
  parameters: {
    design: { type: "figma", url: FIGMA_URL },
  },
  args: {
    visible: true,
    onDismiss: () => {},
    children: (
      <View padding={24}>
        <Text>Sheet content</Text>
      </View>
    ),
  },
};

export default meta;
type Story = StoryObj<BottomSheetProps>;

export const Modal: Story = {
  args: { variant: "modal" },
};

export const Standard: Story = {
  args: { variant: "standard" },
};
