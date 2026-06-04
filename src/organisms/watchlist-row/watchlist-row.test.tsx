import { render, screen, fireEvent } from "@/test-utils";
import { WatchlistRow } from "./watchlist-row";
import type { WatchlistItem } from "./watchlist-row.type";

const ITEM_FULL: WatchlistItem = {
  id: "w1",
  name: "피코탄 락 18",
  sku: "H056289CKAB",
  imageUrl: "https://example.com/item.jpg",
  state: "inStock",
  lastChecked: "2 min ago",
};

const ITEM_OUT_OF_STOCK: WatchlistItem = {
  id: "w2",
  name: "켈리 25",
  sku: "H078444CKAA",
  state: "outOfStock",
  lastChecked: "5 min ago",
};

const ITEM_LIMITED: WatchlistItem = {
  id: "w3",
  name: "버킨 30",
  state: "limited",
};

const ITEM_UNKNOWN: WatchlistItem = {
  id: "w4",
  name: "콘스탄스 24",
  sku: "H099999CKAB",
  imageUrl: "https://example.com/constance.jpg",
  state: "unknown",
};

const ITEM_MINIMAL: WatchlistItem = {
  id: "w5",
  name: "에르메스 가방",
  state: "inStock",
};

describe("WatchlistRow", () => {
  it("renders item name", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(screen.getByText("피코탄 락 18")).toBeTruthy();
  });

  it("renders sku when provided", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(screen.getByText("H056289CKAB")).toBeTruthy();
    expect(screen.getByTestId("wr-sku")).toBeTruthy();
  });

  it("does not render sku when not provided", () => {
    render(<WatchlistRow item={ITEM_LIMITED} testID="wr" />);
    expect(screen.queryByTestId("wr-sku")).toBeNull();
  });

  it("renders image thumbnail when imageUrl is provided", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(screen.getByTestId("wr-thumbnail")).toBeTruthy();
    expect(screen.queryByTestId("wr-thumbnail-placeholder")).toBeNull();
  });

  it("renders placeholder when imageUrl is missing", () => {
    render(<WatchlistRow item={ITEM_OUT_OF_STOCK} testID="wr" />);
    expect(screen.getByTestId("wr-thumbnail-placeholder")).toBeTruthy();
    expect(screen.queryByTestId("wr-thumbnail")).toBeNull();
  });

  it("renders lastChecked when provided", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(screen.getByText("2 min ago")).toBeTruthy();
    expect(screen.getByTestId("wr-last-checked")).toBeTruthy();
  });

  it("does not render lastChecked when not provided", () => {
    render(<WatchlistRow item={ITEM_LIMITED} testID="wr" />);
    expect(screen.queryByTestId("wr-last-checked")).toBeNull();
  });

  it("renders state pill with inStock label", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(screen.getByText("In Stock")).toBeTruthy();
    expect(screen.getByTestId("wr-state-pill")).toBeTruthy();
  });

  it("renders state pill with outOfStock label", () => {
    render(<WatchlistRow item={ITEM_OUT_OF_STOCK} testID="wr" />);
    expect(screen.getByText("Out of Stock")).toBeTruthy();
  });

  it("renders state pill with limited label", () => {
    render(<WatchlistRow item={ITEM_LIMITED} testID="wr" />);
    expect(screen.getByText("Limited")).toBeTruthy();
  });

  it("renders state pill with unknown label", () => {
    render(<WatchlistRow item={ITEM_UNKNOWN} testID="wr" />);
    expect(screen.getByText("Unknown")).toBeTruthy();
  });

  it("calls onPress with item id when row is pressed", () => {
    const onPress = jest.fn();
    render(<WatchlistRow item={ITEM_FULL} onPress={onPress} testID="wr" />);
    fireEvent.press(screen.getByTestId("wr"));
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith("w1");
  });

  it("does not call onPress when row is pressed and disabled", () => {
    const onPress = jest.fn();
    render(
      <WatchlistRow item={ITEM_FULL} onPress={onPress} disabled testID="wr" />,
    );
    fireEvent.press(screen.getByTestId("wr"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("does not throw when pressed without onPress", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    expect(() => fireEvent.press(screen.getByTestId("wr"))).not.toThrow();
  });

  it("renders accessibility state with disabled=true", () => {
    render(
      <WatchlistRow
        item={ITEM_FULL}
        onPress={jest.fn()}
        disabled
        testID="wr"
      />,
    );
    const row = screen.getByTestId("wr");
    expect(row.props.accessibilityState.disabled).toBe(true);
  });

  it("renders accessibility label with item name", () => {
    render(<WatchlistRow item={ITEM_FULL} testID="wr" />);
    const row = screen.getByTestId("wr");
    expect(row.props.accessibilityLabel).toBe("피코탄 락 18");
  });

  it("renders without testID", () => {
    const { toJSON } = render(<WatchlistRow item={ITEM_FULL} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders minimal item (no sku, no imageUrl, no lastChecked)", () => {
    render(<WatchlistRow item={ITEM_MINIMAL} testID="wr" />);
    expect(screen.getByText("에르메스 가방")).toBeTruthy();
    expect(screen.getByText("In Stock")).toBeTruthy();
    expect(screen.getByTestId("wr-thumbnail-placeholder")).toBeTruthy();
    expect(screen.queryByTestId("wr-sku")).toBeNull();
    expect(screen.queryByTestId("wr-last-checked")).toBeNull();
  });

  it("renders sku without testID", () => {
    render(<WatchlistRow item={ITEM_FULL} />);
    expect(screen.getByText("H056289CKAB")).toBeTruthy();
  });

  it("renders thumbnail without testID", () => {
    const { toJSON } = render(<WatchlistRow item={ITEM_FULL} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders placeholder thumbnail without testID", () => {
    const { toJSON } = render(<WatchlistRow item={ITEM_OUT_OF_STOCK} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders lastChecked without testID", () => {
    render(<WatchlistRow item={ITEM_FULL} />);
    expect(screen.getByText("2 min ago")).toBeTruthy();
  });
});
