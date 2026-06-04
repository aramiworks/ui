import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack, View, Text } from "tamagui";
import { AppShellTemplate } from "../../app-shell-template";
import { TopAppBar } from "../../../../organisms/top-app-bar";
import { NavigationBar } from "../../../../organisms/navigation-bar";
import { SectionLabel } from "../../../../storybook";

const navDestinations = [
  { icon: "home-outline", activeIcon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  {
    icon: "notifications-outline",
    activeIcon: "notifications",
    label: "Alerts",
    badge: 3,
  },
  { icon: "person-outline", activeIcon: "person", label: "Profile" },
];

function ScreenContent({ label }: { label: string }) {
  return (
    <View flex={1} padding={24} justifyContent="center" alignItems="center">
      <Text fontSize={16} color="#49454F">
        {label}
      </Text>
    </View>
  );
}

function Overview() {
  return (
    <YStack gap={32} padding={16}>
      <YStack gap={8}>
        <SectionLabel label="TopAppBar + Content + NavigationBar" />
        <View
          height={480}
          borderWidth={1}
          borderColor="#E0E0E0"
          borderRadius={12}
          overflow="hidden"
        >
          <AppShellTemplate
            topAppBar={
              <TopAppBar type="small" title="Home" navigationIcon="menu" />
            }
            bottomNavigationBar={
              <NavigationBar destinations={navDestinations} activeIndex={0} />
            }
          >
            <ScreenContent label="Screen Content" />
          </AppShellTemplate>
        </View>
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="Content + NavigationBar (no top app bar)" />
        <View
          height={480}
          borderWidth={1}
          borderColor="#E0E0E0"
          borderRadius={12}
          overflow="hidden"
        >
          <AppShellTemplate
            bottomNavigationBar={
              <NavigationBar destinations={navDestinations} activeIndex={1} />
            }
          >
            <ScreenContent label="Full-bleed content" />
          </AppShellTemplate>
        </View>
      </YStack>

      <YStack gap={8}>
        <SectionLabel label="TopAppBar + Content (no bottom navigation)" />
        <View
          height={480}
          borderWidth={1}
          borderColor="#E0E0E0"
          borderRadius={12}
          overflow="hidden"
        >
          <AppShellTemplate
            topAppBar={
              <TopAppBar
                type="small"
                title="Detail"
                navigationIcon="arrow-back"
              />
            }
          >
            <ScreenContent label="Detail screen" />
          </AppShellTemplate>
        </View>
      </YStack>
    </YStack>
  );
}

const meta: Meta = {
  title: "templates/app-shell-template/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=2160-55",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
