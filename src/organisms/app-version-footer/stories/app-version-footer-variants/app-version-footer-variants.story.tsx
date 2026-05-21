import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppVersionFooter } from "../../app-version-footer";
import type { AppVersionFooterProps } from "../../app-version-footer.type";

const meta: Meta<AppVersionFooterProps> = {
  title: "organisms/app-version-footer/variants",
  component: AppVersionFooter,
};

export default meta;
type Story = StoryObj<AppVersionFooterProps>;

export const Default: Story = {
  args: {
    version: "1.2.3",
  },
};

export const WithBuild: Story = {
  args: {
    version: "1.2.3",
    build: 42,
  },
};

export const Tappable: Story = {
  args: {
    version: "1.2.3",
    build: 42,
    onCopy: () => {},
  },
};
