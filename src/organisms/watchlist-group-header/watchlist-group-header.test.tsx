import { render, screen, fireEvent } from "@/test-utils";
import { WatchlistGroupHeader } from "./watchlist-group-header";

describe("WatchlistGroupHeader", () => {
  it("renders label text", () => {
    render(<WatchlistGroupHeader label="가방" testID="wgh" />);
    expect(screen.getByText("가방")).toBeTruthy();
  });

  it("renders count badge when count is provided", () => {
    render(<WatchlistGroupHeader label="가방" count={12} testID="wgh" />);
    expect(screen.getByTestId("wgh-count")).toBeTruthy();
  });

  it("does not render count badge when count is omitted", () => {
    render(<WatchlistGroupHeader label="가방" testID="wgh" />);
    expect(screen.queryByTestId("wgh-count")).toBeNull();
  });

  it("renders count badge when count is 0", () => {
    render(<WatchlistGroupHeader label="가방" count={0} testID="wgh" />);
    expect(screen.getByTestId("wgh-count")).toBeTruthy();
  });

  it("renders chevron when onToggle is provided", () => {
    render(
      <WatchlistGroupHeader label="가방" onToggle={jest.fn()} testID="wgh" />,
    );
    expect(screen.getByTestId("wgh-chevron")).toBeTruthy();
  });

  it("does not render chevron when onToggle is omitted", () => {
    render(<WatchlistGroupHeader label="가방" testID="wgh" />);
    expect(screen.queryByTestId("wgh-chevron")).toBeNull();
  });

  it("renders expand-more chevron when expanded (collapsed=false)", () => {
    render(
      <WatchlistGroupHeader label="가방" onToggle={jest.fn()} testID="wgh" />,
    );
    const chevron = screen.getByTestId("wgh-chevron");
    expect(chevron).toBeTruthy();
  });

  it("renders chevron-right when collapsed", () => {
    render(
      <WatchlistGroupHeader
        label="가방"
        collapsed
        onToggle={jest.fn()}
        testID="wgh"
      />,
    );
    const chevron = screen.getByTestId("wgh-chevron");
    expect(chevron).toBeTruthy();
  });

  it("calls onToggle when header is pressed", () => {
    const onToggle = jest.fn();
    render(
      <WatchlistGroupHeader label="가방" onToggle={onToggle} testID="wgh" />,
    );
    fireEvent.press(screen.getByTestId("wgh"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("renders accessibility state expanded=true when not collapsed", () => {
    render(
      <WatchlistGroupHeader label="가방" onToggle={jest.fn()} testID="wgh" />,
    );
    const row = screen.getByTestId("wgh");
    expect(row.props.accessibilityState.expanded).toBe(true);
  });

  it("renders accessibility state expanded=false when collapsed", () => {
    render(
      <WatchlistGroupHeader
        label="가방"
        collapsed
        onToggle={jest.fn()}
        testID="wgh"
      />,
    );
    const row = screen.getByTestId("wgh");
    expect(row.props.accessibilityState.expanded).toBe(false);
  });

  it("does not render as Pressable when onToggle is omitted", () => {
    render(<WatchlistGroupHeader label="가방" testID="wgh" />);
    // Without onToggle, the wrapper Pressable should not be present
    expect(screen.queryByTestId("wgh")).toBeNull();
  });

  it("renders without testID", () => {
    const { toJSON } = render(<WatchlistGroupHeader label="가방" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with count and without testID", () => {
    const { toJSON } = render(<WatchlistGroupHeader label="가방" count={5} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with onToggle and without testID", () => {
    const { toJSON } = render(
      <WatchlistGroupHeader label="가방" onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders collapsed with onToggle and without testID", () => {
    const { toJSON } = render(
      <WatchlistGroupHeader label="가방" collapsed onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });
});
