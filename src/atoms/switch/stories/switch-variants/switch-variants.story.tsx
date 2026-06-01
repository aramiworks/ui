import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../../switch";
import type { SwitchProps } from "../../switch.type";

const meta: Meta<SwitchProps> = {
  title: "atoms/switch/variants",
  component: Switch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=2042-13",
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const On: Story = {
  args: { selected: true },
};

export const Off: Story = {
  args: { selected: false },
};

export const WithIcon: Story = {
  name: "With Icon",
  args: { selected: true, showIcon: true },
};

export const Disabled: Story = {
  args: { selected: false, disabled: true },
};
