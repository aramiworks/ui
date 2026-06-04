export type WatchlistItemState =
  | "inStock"
  | "outOfStock"
  | "limited"
  | "unknown";

export type WatchlistItem = {
  /** Unique watchlist item identifier */
  id: string;
  /** Item display name */
  name: string;
  /** Stock-keeping unit (model number) */
  sku?: string;
  /** Optional item thumbnail URL */
  imageUrl?: string;
  /** Current stock state */
  state: WatchlistItemState;
  /** Last checked timestamp (ISO 8601 or display string) */
  lastChecked?: string;
};

export type WatchlistRowProps = {
  /** Watchlist item data */
  item: WatchlistItem;
  /** Callback fired with item id when the row is pressed */
  onPress?: (id: string) => void;
  /** Whether the row is disabled */
  disabled?: boolean;
  /** Test ID */
  testID?: string;
};
