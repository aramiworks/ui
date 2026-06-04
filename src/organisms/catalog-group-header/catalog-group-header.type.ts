/** Checkbox selection state for the group header */
export type GroupSelectionState = "checked" | "unchecked" | "indeterminate";

export type CatalogGroupHeaderProps = {
  /** Group label text */
  label: string;
  /** Optional count of items in the group */
  count?: number;
  /** Whether all items are selected */
  selected: boolean;
  /** Whether some (but not all) items are selected */
  indeterminate?: boolean;
  /** Callback when the header checkbox is toggled */
  onToggle: () => void;
  /** Whether the header is disabled */
  disabled?: boolean;
  /** Test ID */
  testID?: string;
};
