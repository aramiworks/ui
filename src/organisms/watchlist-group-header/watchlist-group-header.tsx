import { Pressable } from "react-native";
import { XStack } from "tamagui";
import { Badge } from "../../atoms/badge";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { WatchlistGroupHeaderProps } from "./watchlist-group-header.type";

export function WatchlistGroupHeader({
  label,
  count,
  collapsed = false,
  onToggle,
  testID,
}: WatchlistGroupHeaderProps) {
  const interactive = onToggle != null;

  const content = (
    <XStack
      gap="$sm"
      alignItems="center"
      paddingHorizontal="$lg"
      paddingVertical="$sm"
    >
      <Text
        role="label"
        size="large"
        color="$onSurface"
        fontWeight="500"
        numberOfLines={1}
        flex={1}
        testID={testID ? `${testID}-label` : undefined}
      >
        {label}
      </Text>
      {count != null && (
        <Badge
          size="large"
          count={count}
          testID={testID ? `${testID}-count` : undefined}
        />
      )}
      {interactive && (
        <Icon
          name={collapsed ? "chevron-right" : "expand-more"}
          size={24}
          color="$onSurfaceVariant"
          testID={testID ? `${testID}-chevron` : undefined}
        />
      )}
    </XStack>
  );

  if (!interactive) {
    return <>{content}</>;
  }

  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityState={{ expanded: !collapsed }}
      accessibilityLabel={label}
      testID={testID}
    >
      {content}
    </Pressable>
  );
}
