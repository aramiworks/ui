export type SkeletonCardSize = "small" | "medium" | "large";

export type SkeletonCardProps = {
  /** Size variant — controls card height and skeleton line count. Default: "medium" */
  size?: SkeletonCardSize;
  /** Test ID */
  testID?: string;
};
