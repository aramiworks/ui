import { render, screen } from "@/test-utils";
import { SkeletonCard } from "./skeleton-card";

describe("SkeletonCard", () => {
  it("renders with default (medium) size", () => {
    render(<SkeletonCard testID="sc" />);
    expect(screen.getByTestId("sc")).toBeTruthy();
    expect(screen.getByTestId("sc-block")).toBeTruthy();
    // medium → 2 body lines
    expect(screen.getByTestId("sc-line-0")).toBeTruthy();
    expect(screen.getByTestId("sc-line-1")).toBeTruthy();
    expect(screen.queryByTestId("sc-line-2")).toBeNull();
  });

  it("renders small size with 1 body line", () => {
    render(<SkeletonCard size="small" testID="sc" />);
    expect(screen.getByTestId("sc-line-0")).toBeTruthy();
    expect(screen.queryByTestId("sc-line-1")).toBeNull();
  });

  it("renders medium size with 2 body lines", () => {
    render(<SkeletonCard size="medium" testID="sc" />);
    expect(screen.getByTestId("sc-line-0")).toBeTruthy();
    expect(screen.getByTestId("sc-line-1")).toBeTruthy();
    expect(screen.queryByTestId("sc-line-2")).toBeNull();
  });

  it("renders large size with 3 body lines", () => {
    render(<SkeletonCard size="large" testID="sc" />);
    expect(screen.getByTestId("sc-line-0")).toBeTruthy();
    expect(screen.getByTestId("sc-line-1")).toBeTruthy();
    expect(screen.getByTestId("sc-line-2")).toBeTruthy();
    expect(screen.queryByTestId("sc-line-3")).toBeNull();
  });

  it("propagates testID to the card and inner nodes", () => {
    render(<SkeletonCard testID="custom-id" />);
    expect(screen.getByTestId("custom-id")).toBeTruthy();
    expect(screen.getByTestId("custom-id-content")).toBeTruthy();
    expect(screen.getByTestId("custom-id-block")).toBeTruthy();
  });

  it("exposes a non-semantic accessibility role for the loading content", () => {
    render(<SkeletonCard testID="sc" />);
    const content = screen.getByTestId("sc-content");
    expect(content.props.accessibilityRole).toBe("none");
    expect(content.props.accessibilityLabel).toBe("Loading content");
  });

  it("renders without testID", () => {
    const { toJSON } = render(<SkeletonCard />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders each size without testID", () => {
    expect(render(<SkeletonCard size="small" />).toJSON()).toBeTruthy();
    expect(render(<SkeletonCard size="medium" />).toJSON()).toBeTruthy();
    expect(render(<SkeletonCard size="large" />).toJSON()).toBeTruthy();
  });
});
