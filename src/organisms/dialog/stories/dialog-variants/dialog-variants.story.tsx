import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "tamagui";
import { Dialog } from "../../dialog";
import type { DialogProps } from "../../dialog.type";

const FIGMA_URL =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=1709-13";

const meta: Meta<DialogProps> = {
  title: "organisms/dialog/variants",
  component: Dialog,
  parameters: {
    design: { type: "figma", url: FIGMA_URL },
  },
  args: {
    visible: true,
    onConfirm: () => {},
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<DialogProps>;

export const Basic: Story = {
  args: {
    title: "Title",
    children: <Text>Body text for the dialog.</Text>,
  },
};

export const WithIcon: Story = {
  args: {
    icon: "info",
    title: "Info",
    children: <Text>Body text for the dialog.</Text>,
  },
};

export const HeroImage: Story = {
  args: {
    heroImage: { uri: "https://picsum.photos/560/200" },
    title: "Summer Collection",
    children: "Check out our latest arrivals for the season.",
    confirmLabel: "View",
    onConfirm: () => {},
    onDismiss: () => {},
  },
};
