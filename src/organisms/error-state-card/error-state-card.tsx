import { YStack } from "tamagui";
import { Button } from "../../atoms/button";
import { Card } from "../../atoms/card";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import type { ErrorStateCardProps } from "./error-state-card.type";

const DEFAULT_TITLE = "오류가 발생했습니다";
const DEFAULT_RETRY_LABEL = "다시 시도";

export function ErrorStateCard({
  title = DEFAULT_TITLE,
  message,
  retryLabel = DEFAULT_RETRY_LABEL,
  onRetry,
  testID,
}: ErrorStateCardProps) {
  return (
    <Card variant="outlined" testID={testID}>
      <YStack alignItems="center" gap="$md" paddingVertical="$sm">
        <Icon
          name="error-outline"
          size={40}
          color="$error"
          testID={testID ? `${testID}-icon` : undefined}
        />

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

        {onRetry && (
          <Button
            variant="tonal"
            onPress={onRetry}
            marginTop="$xs"
            testID={testID ? `${testID}-retry` : undefined}
          >
            {retryLabel}
          </Button>
        )}
      </YStack>
    </Card>
  );
}
