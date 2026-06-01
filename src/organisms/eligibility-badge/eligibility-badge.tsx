import { styled, View, XStack } from "tamagui";
import { Text } from "../../atoms/text";
import type {
  EligibilityBadgeProps,
  EligibilityStatus,
} from "./eligibility-badge.type";

const STATUS_STYLES = {
  eligible: { bg: "$primaryContainer", fg: "$onPrimaryContainer" },
  pending: { bg: "$tertiaryContainer", fg: "$onTertiaryContainer" },
  ineligible: { bg: "$errorContainer", fg: "$onErrorContainer" },
  expired: { bg: "$surfaceContainerHigh", fg: "$onSurfaceVariant" },
} as const;

const DEFAULT_LABELS: Record<EligibilityStatus, string> = {
  eligible: "Eligible",
  pending: "Pending",
  ineligible: "Ineligible",
  expired: "Expired",
};

const Pill = styled(XStack, {
  name: "EligibilityBadge",
  alignItems: "center",
  borderRadius: "$lg",
  paddingVertical: 6,
  paddingHorizontal: "$md",
  alignSelf: "flex-start",
});

const ICON_SIZE = 16;

export function EligibilityBadge({
  status,
  label,
  icon,
  testID,
}: EligibilityBadgeProps) {
  const { bg, fg } = STATUS_STYLES[status];
  const displayLabel = label ?? DEFAULT_LABELS[status];

  return (
    <Pill
      backgroundColor={bg as any}
      testID={testID}
      accessibilityRole="text"
      accessibilityLabel={displayLabel}
    >
      {icon && (
        <View
          width={ICON_SIZE}
          height={ICON_SIZE}
          marginRight="$xs"
          testID={testID ? `${testID}-icon` : undefined}
        >
          {icon}
        </View>
      )}
      <Text
        role="label"
        size="medium"
        color={fg as any}
        fontWeight="500"
        fontSize={12}
        lineHeight={16}
        testID={testID ? `${testID}-label` : undefined}
      >
        {displayLabel}
      </Text>
    </Pill>
  );
}
