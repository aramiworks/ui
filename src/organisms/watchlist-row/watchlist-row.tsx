import { Image, Pressable } from "react-native";
import { styled, Text as TamaguiText, View, XStack, YStack } from "tamagui";
import { Text } from "../../atoms/text";
import { DISABLED_OPACITY } from "../../tokens/custom/interaction";
import type {
  WatchlistItemState,
  WatchlistRowProps,
} from "./watchlist-row.type";

const THUMBNAIL_SIZE = 48;

const STATE_CONFIG: Record<
  WatchlistItemState,
  { label: string; bg: string; fg: string }
> = {
  inStock: {
    label: "In Stock",
    bg: "$primaryContainer",
    fg: "$onPrimaryContainer",
  },
  outOfStock: {
    label: "Out of Stock",
    bg: "$surfaceContainerHigh",
    fg: "$onSurfaceVariant",
  },
  limited: {
    label: "Limited",
    bg: "$tertiaryContainer",
    fg: "$onTertiaryContainer",
  },
  unknown: {
    label: "Unknown",
    bg: "$surfaceContainerHigh",
    fg: "$onSurfaceVariant",
  },
};

const PillContainer = styled(View, {
  name: "StatePill",
  borderRadius: "$full",
  paddingHorizontal: "$sm",
  paddingVertical: 2,
  alignItems: "center",
  justifyContent: "center",
});

const PillLabel = styled(TamaguiText, {
  name: "StatePillLabel",
  fontSize: 11,
  fontWeight: "500",
  lineHeight: 16,
});

export function WatchlistRow({
  item,
  onPress,
  disabled = false,
  testID,
}: WatchlistRowProps) {
  const handlePress = () => {
    onPress?.(item.id);
  };

  const stateConfig = STATE_CONFIG[item.state];

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={item.name}
      testID={testID}
      style={{ opacity: disabled ? DISABLED_OPACITY : 1 }}
    >
      <XStack
        gap="$md"
        alignItems="center"
        paddingHorizontal="$lg"
        paddingVertical="$sm"
      >
        {item.imageUrl ? (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: THUMBNAIL_SIZE,
              height: THUMBNAIL_SIZE,
              borderRadius: 8,
            }}
            testID={testID ? `${testID}-thumbnail` : undefined}
          />
        ) : (
          <View
            width={THUMBNAIL_SIZE}
            height={THUMBNAIL_SIZE}
            borderRadius={8}
            backgroundColor="$surfaceContainerHigh"
            testID={testID ? `${testID}-thumbnail-placeholder` : undefined}
          />
        )}
        <YStack flex={1} gap={2}>
          <Text
            role="body"
            size="medium"
            color="$onSurface"
            fontWeight="500"
            fontSize={14}
            lineHeight={20}
            numberOfLines={1}
            testID={testID ? `${testID}-name` : undefined}
          >
            {item.name}
          </Text>
          {item.sku && (
            <Text
              role="label"
              size="small"
              color="$onSurfaceVariant"
              fontSize={11}
              lineHeight={16}
              numberOfLines={1}
              testID={testID ? `${testID}-sku` : undefined}
            >
              {item.sku}
            </Text>
          )}
          {item.lastChecked && (
            <Text
              role="label"
              size="small"
              color="$onSurfaceVariant"
              fontSize={11}
              lineHeight={16}
              numberOfLines={1}
              testID={testID ? `${testID}-last-checked` : undefined}
            >
              {item.lastChecked}
            </Text>
          )}
        </YStack>
        <PillContainer
          backgroundColor={stateConfig.bg as any}
          testID={testID ? `${testID}-state-pill` : undefined}
        >
          <PillLabel color={stateConfig.fg as any}>
            {stateConfig.label}
          </PillLabel>
        </PillContainer>
      </XStack>
    </Pressable>
  );
}
