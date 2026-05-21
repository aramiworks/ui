import type { ReactNode } from "react";

export type KeyValueItem = {
  /** Row label */
  label: string;
  /** Row value — text or custom ReactNode */
  value: ReactNode;
  /** Optional trailing element (icon, badge, etc.) */
  trailing?: ReactNode;
};

export type KeyValueListCardProps = {
  /** Rows of key-value pairs */
  items: KeyValueItem[];
  /** Optional card title */
  title?: string;
  /** Show skeleton placeholder rows instead of content */
  loading?: boolean;
  /** Test ID */
  testID?: string;
};
