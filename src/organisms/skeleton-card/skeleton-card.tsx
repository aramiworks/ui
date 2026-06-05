import { YStack } from "tamagui";
import { Card } from "../../atoms/card";
import { Skeleton } from "../../atoms/skeleton";
import type { SkeletonCardProps } from "./skeleton-card.type";

type SizeConfig = {
  /** Height of the leading block skeleton */
  blockHeight: number;
  /** Number of body line skeletons below the block */
  lineCount: number;
};

const SIZE_CONFIG: Record<
  NonNullable<SkeletonCardProps["size"]>,
  SizeConfig
> = {
  small: { blockHeight: 40, lineCount: 1 },
  medium: { blockHeight: 64, lineCount: 2 },
  large: { blockHeight: 88, lineCount: 3 },
};

export function SkeletonCard({ size = "medium", testID }: SkeletonCardProps) {
  const { blockHeight, lineCount } = SIZE_CONFIG[size];

  return (
    <Card testID={testID}>
      <YStack
        gap="$sm"
        accessibilityRole="none"
        accessibilityLabel="Loading content"
        testID={testID ? `${testID}-content` : undefined}
      >
        <Skeleton
          width="100%"
          height={blockHeight}
          borderRadius={8}
          testID={testID ? `${testID}-block` : undefined}
        />
        {Array.from({ length: lineCount }, (_, i) => (
          <Skeleton
            key={i}
            width={i === lineCount - 1 ? "60%" : "100%"}
            height={14}
            testID={testID ? `${testID}-line-${i}` : undefined}
          />
        ))}
      </YStack>
    </Card>
  );
}
