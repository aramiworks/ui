export type WatchlistGroupHeaderProps = {
  /** Group label text */
  label: string;
  /** Optional count of items in the group */
  count?: number;
  /** Whether the group is collapsed (controls chevron direction) */
  collapsed?: boolean;
  /** Callback when the header is pressed (typically to toggle collapse) */
  onToggle?: () => void;
  /** Test ID */
  testID?: string;
};
