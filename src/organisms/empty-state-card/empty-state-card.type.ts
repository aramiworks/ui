export type EmptyStateCardProps = {
  /** Optional Material Icons glyph name shown above the title */
  icon?: string;
  /** Title text (required) */
  title: string;
  /** Optional supporting message below the title */
  message?: string;
  /** Optional CTA button label — renders a button only when paired with onAction */
  actionLabel?: string;
  /** Optional CTA press handler — renders a button only when paired with actionLabel */
  onAction?: () => void;
  /** Test ID */
  testID?: string;
};
