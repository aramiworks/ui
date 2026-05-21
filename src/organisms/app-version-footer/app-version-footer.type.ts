export type AppVersionFooterProps = {
  /** Semantic version string (e.g. "1.2.3") */
  version: string;
  /** Optional build number */
  build?: string | number;
  /** Callback when the version text is tapped */
  onCopy?: () => void;
  /** Test ID */
  testID?: string;
};
