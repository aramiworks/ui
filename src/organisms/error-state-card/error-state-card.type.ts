export type ErrorStateCardProps = {
  /** Title text. Default: "오류가 발생했습니다" */
  title?: string;
  /** Optional supporting message below the title */
  message?: string;
  /** Retry button label. Default: "다시 시도" */
  retryLabel?: string;
  /** Retry handler — retry button only renders when provided */
  onRetry?: () => void;
  /** Test ID */
  testID?: string;
};
