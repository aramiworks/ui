import type { Meta, StoryObj } from "@storybook/react-vite";
import { View, Text } from "tamagui";
import { AppShellTemplate } from "../../app-shell-template";
import type { AppShellTemplateProps } from "../../app-shell-template.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=";

const TopBar = (
  <View bg="#E8DEF8" h={64} w="100%" ai="center" jc="center">
    <Text>Top App Bar</Text>
  </View>
);

const BottomNav = (
  <View bg="#E8DEF8" h={80} w="100%" ai="center" jc="center">
    <Text>Bottom Navigation</Text>
  </View>
);

const Content = (
  <View flex={1} bg="#F7F2FA" ai="center" jc="center">
    <Text>Content</Text>
  </View>
);

const meta: Meta<AppShellTemplateProps> = {
  title: "templates/app-shell-template/variants",
  component: AppShellTemplate,
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}2160-65` },
  },
};

export default meta;

type Story = StoryObj<AppShellTemplateProps>;

export const Full: Story = {
  args: {
    topAppBar: TopBar,
    children: Content,
    bottomNavigationBar: BottomNav,
  },
};

export const NoTopAppBar: Story = {
  args: {
    children: Content,
    bottomNavigationBar: BottomNav,
  },
};

export const NoBottomNavigationBar: Story = {
  args: {
    topAppBar: TopBar,
    children: Content,
  },
};

export const BothBarsOff: Story = {
  args: {
    children: Content,
  },
};
