export type PurchaseRowProps = {
  /** Purchase date */
  date: Date;
  /** Purchase amount */
  amount: number;
  /** Currency code (e.g. "KRW", "USD"). Default: "KRW" */
  currency?: string;
  /** Number of items purchased */
  count?: number;
  /** Callback when the row is pressed */
  onPress?: () => void;
  /** Test ID */
  testID?: string;
};
