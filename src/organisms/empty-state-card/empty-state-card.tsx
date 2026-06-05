import { YStack } from "tamagui";
import { Button } from "../../atoms/button";
import { Card } from "../../atoms/card";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { EmptyStateCardProps } from "./empty-state-card.type";

export function EmptyStateCard({
  icon,
  title,
  message,
  actionLabel,
  onAction,
  testID,
}: EmptyStateCardProps) {
  const showAction = Boolean(actionLabel && onAction);

  return (
    <Card testID={testID}>
      <YStack alignItems="center" justifyContent="center" gap="$md">
        {icon && (
          <Icon
            name={icon}
            size={40}
            color="$onSurfaceVariant"
            testID={testID ? `${testID}-icon` : undefined}
          />
        )}

        <Text
          role="title"
          size="medium"
          color="$onSurface"
          textAlign="center"
          testID={testID ? `${testID}-title` : undefined}
        >
          {title}
        </Text>

        {message && (
          <Text
            role="body"
            size="medium"
            color="$onSurfaceVariant"
            textAlign="center"
            testID={testID ? `${testID}-message` : undefined}
          >
            {message}
          </Text>
        )}

        {showAction && (
          <Button
            variant="text"
            onPress={onAction}
            testID={testID ? `${testID}-action` : undefined}
          >
            {actionLabel}
          </Button>
        )}
      </YStack>
    </Card>
  );
}
