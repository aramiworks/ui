import type { ReactNode } from "react";

/** Eligibility status determines the badge color scheme */
export type EligibilityStatus =
  | "eligible"
  | "pending"
  | "ineligible"
  | "expired";

export type EligibilityBadgeProps = {
  /** Status determines the color scheme */
  status: EligibilityStatus;
  /** Badge label text. Defaults to a capitalized status string if omitted. */
  label?: string;
  /** Optional leading icon element (16×16) */
  icon?: ReactNode;
  /** Test ID */
  testID?: string;
};
