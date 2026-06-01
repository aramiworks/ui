import { Image, Pressable } from "react-native";
import { View, XStack, YStack } from "tamagui";
import { Checkbox } from "../../atoms/checkbox";
import { Text } from "../../atoms/text";
import { DISABLED_OPACITY } from "../../tokens/custom/interaction";
import type { ProductRowProps } from "./product-row.type";

const THUMBNAIL_SIZE = 48;

export function ProductRow({
  product,
  selected,
  onToggle,
  disabled = false,
  testID,
}: ProductRowProps) {
  const handlePress = () => {
    onToggle(product.id);
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={product.name}
      testID={testID}
      style={{ opacity: disabled ? DISABLED_OPACITY : 1 }}
    >
      <XStack
        gap="$md"
        alignItems="center"
        paddingHorizontal="$lg"
        paddingVertical="$sm"
      >
        <Checkbox
          state={selected ? "checked" : "unchecked"}
          disabled={disabled}
          onPress={handlePress}
          testID={testID ? `${testID}-checkbox` : undefined}
        />
        {product.imageUrl ? (
          <Image
            source={{ uri: product.imageUrl }}
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
            {product.name}
          </Text>
          {product.sku && (
            <Text
              role="label"
              size="small"
              color="$onSurfaceVariant"
              fontSize={11}
              lineHeight={16}
              numberOfLines={1}
              testID={testID ? `${testID}-sku` : undefined}
            >
              {product.sku}
            </Text>
          )}
        </YStack>
      </XStack>
    </Pressable>
  );
}
