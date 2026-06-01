import { Pressable } from "react-native";
import { XStack, YStack } from "tamagui";
import { Text } from "../../atoms/text";
import type { PurchaseRowProps } from "./purchase-row.type";

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

function formatAmount(amount: number, currency: string): string {
  if (currency === "KRW") {
    return `₩${amount.toLocaleString()}`;
  }
  return `${amount.toLocaleString()} ${currency}`;
}

export function PurchaseRow({
  date,
  amount,
  currency = "KRW",
  count,
  onPress,
  testID,
}: PurchaseRowProps) {
  const content = (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="$md"
      paddingHorizontal="$lg"
      testID={testID}
    >
      <YStack>
        <Text
          role="label"
          size="medium"
          color="$onSurface"
          fontWeight="500"
          fontSize={12}
          lineHeight={16}
          testID={testID ? `${testID}-date` : undefined}
        >
          {formatDate(date)}
        </Text>
        {count != null && (
          <Text
            role="body"
            size="small"
            color="$onSurfaceVariant"
            fontSize={12}
            lineHeight={16}
            testID={testID ? `${testID}-count` : undefined}
          >
            {count} items
          </Text>
        )}
      </YStack>
      <Text
        role="title"
        size="medium"
        color="$onSurface"
        fontWeight="600"
        fontSize={16}
        lineHeight={24}
        testID={testID ? `${testID}-amount` : undefined}
      >
        {formatAmount(amount, currency)}
      </Text>
    </XStack>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        testID={testID ? `${testID}-pressable` : undefined}
      >
        {content}
      </Pressable>
    );
  }

  return content;
}
