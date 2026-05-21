export type DestructiveActionButtonProps = {
  /** Button label text */
  label: string;
  /** Callback invoked after confirmation (or immediately if requireConfirm is false) */
  onConfirm: () => void;
  /** Whether to show a confirmation dialog before invoking onConfirm. Default: true */
  requireConfirm?: boolean;
  /** Confirmation dialog title */
  confirmTitle?: string;
  /** Confirmation dialog body text */
  confirmBody?: string;
  /** Whether the button shows a loading state */
  loading?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Test ID */
  testID?: string;
};
