import { XStack, YStack } from "tamagui";
import { Card } from "../../atoms/card";
import { Divider } from "../../atoms/divider";
import { Skeleton } from "../../atoms/skeleton";
import { Text } from "../../atoms/text";
import type { KeyValueListCardProps } from "./key-value-list-card.type";

const SKELETON_ROW_COUNT = 3;

function SkeletonRow({ testID }: { testID?: string }) {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="$sm"
      testID={testID}
    >
      <Skeleton width="30%" height={14} />
      <Skeleton width="40%" height={14} />
    </XStack>
  );
}

export function KeyValueListCard({
  items,
  title,
  loading = false,
  testID,
}: KeyValueListCardProps) {
  return (
    <Card testID={testID}>
      <YStack>
        {title && (
          <Text
            role="title"
            size="small"
            color="$onSurface"
            marginBottom="$md"
            testID={testID ? `${testID}-title` : undefined}
          >
            {title}
          </Text>
        )}

        {loading
          ? Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => (
              <YStack key={i}>
                {i > 0 && <Divider />}
                <SkeletonRow
                  testID={testID ? `${testID}-skeleton-${i}` : undefined}
                />
              </YStack>
            ))
          : items.map((item, i) => (
              <YStack key={i}>
                {i > 0 && <Divider />}
                <XStack
                  justifyContent="space-between"
                  alignItems="center"
                  paddingVertical="$sm"
                  testID={testID ? `${testID}-row-${i}` : undefined}
                >
                  <Text
                    role="body"
                    size="medium"
                    color="$onSurfaceVariant"
                    flexShrink={1}
                  >
                    {item.label}
                  </Text>
                  <XStack alignItems="center" gap="$xs" flexShrink={0}>
                    {typeof item.value === "string" ? (
                      <Text role="body" size="medium" color="$onSurface">
                        {item.value}
                      </Text>
                    ) : (
                      item.value
                    )}
                    {item.trailing}
                  </XStack>
                </XStack>
              </YStack>
            ))}
      </YStack>
    </Card>
  );
}
