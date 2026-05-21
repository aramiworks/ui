import { Pressable } from "react-native";
import { View } from "tamagui";
import { Text } from "../../atoms/text";
import type { AppVersionFooterProps } from "./app-version-footer.type";

export function AppVersionFooter({
  version,
  build,
  onCopy,
  testID,
}: AppVersionFooterProps) {
  const label = build != null ? `v${version} (${build})` : `v${version}`;

  const content = (
    <View alignItems="center" paddingVertical="$md" testID={testID}>
      <Text
        role="label"
        size="small"
        color="$onSurfaceVariant"
        testID={testID ? `${testID}-label` : undefined}
      >
        {label}
      </Text>
    </View>
  );

  if (onCopy) {
    return (
      <Pressable
        onPress={onCopy}
        accessibilityRole="button"
        accessibilityLabel={label}
        testID={testID ? `${testID}-pressable` : undefined}
      >
        {content}
      </Pressable>
    );
  }

  return content;
}
