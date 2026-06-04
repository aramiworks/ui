import { Pressable } from "react-native";
import { XStack } from "tamagui";
import { Checkbox } from "../../atoms/checkbox";
import { Text } from "../../atoms/text";
import { Badge } from "../../atoms/badge";
import { DISABLED_OPACITY } from "../../tokens/custom/interaction";
import type {
  CatalogGroupHeaderProps,
  GroupSelectionState,
} from "./catalog-group-header.type";

function deriveCheckboxState(
  selected: boolean,
  indeterminate?: boolean,
): GroupSelectionState {
  if (indeterminate) return "indeterminate";
  return selected ? "checked" : "unchecked";
}

export function CatalogGroupHeader({
  label,
  count,
  selected,
  indeterminate = false,
  onToggle,
  disabled = false,
  testID,
}: CatalogGroupHeaderProps) {
  const checkboxState = deriveCheckboxState(selected, indeterminate);

  return (
    <Pressable
      onPress={onToggle}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: indeterminate ? "mixed" : selected,
        disabled,
      }}
      accessibilityLabel={label}
      testID={testID}
      style={{ opacity: disabled ? DISABLED_OPACITY : 1 }}
    >
      <XStack
        gap="$xs"
        alignItems="center"
        paddingHorizontal="$lg"
        paddingVertical="$sm"
      >
        <Checkbox
          state={checkboxState}
          disabled={disabled}
          onPress={onToggle}
          testID={testID ? `${testID}-checkbox` : undefined}
        />
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
      </XStack>
    </Pressable>
  );
}
