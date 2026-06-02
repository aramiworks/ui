import { render, screen, fireEvent } from "@/test-utils";
import { ProductRow } from "./product-row";

const PRODUCT = {
  id: "p1",
  name: "피코탄 락 18",
  sku: "H056289CKAB",
  imageUrl: "https://example.com/product.jpg",
};

const PRODUCT_NO_THUMB = { id: "p2", name: "켈리 25", sku: "H078444CKAA" };

const PRODUCT_NO_SKU = { id: "p3", name: "버킨 30" };

describe("ProductRow", () => {
  it("renders product name", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    expect(screen.getByText("피코탄 락 18")).toBeTruthy();
  });

  it("renders sku when provided", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    expect(screen.getByText("H056289CKAB")).toBeTruthy();
    expect(screen.getByTestId("pr-sku")).toBeTruthy();
  });

  it("does not render sku when not provided", () => {
    render(
      <ProductRow
        product={PRODUCT_NO_SKU}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    expect(screen.queryByTestId("pr-sku")).toBeNull();
  });

  it("renders image thumbnail when imageUrl is provided", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    expect(screen.getByTestId("pr-thumbnail")).toBeTruthy();
    expect(screen.queryByTestId("pr-thumbnail-placeholder")).toBeNull();
  });

  it("renders placeholder when imageUrl is missing", () => {
    render(
      <ProductRow
        product={PRODUCT_NO_THUMB}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    expect(screen.getByTestId("pr-thumbnail-placeholder")).toBeTruthy();
    expect(screen.queryByTestId("pr-thumbnail")).toBeNull();
  });

  it("renders checkbox in unchecked state when selected=false", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    const checkbox = screen.getByTestId("pr-checkbox");
    expect(checkbox.props.accessibilityState.checked).toBe(false);
  });

  it("renders checkbox in checked state when selected=true", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={true}
        onToggle={jest.fn()}
        testID="pr"
      />,
    );
    const checkbox = screen.getByTestId("pr-checkbox");
    expect(checkbox.props.accessibilityState.checked).toBe(true);
  });

  it("calls onToggle with product id when row is pressed", () => {
    const onToggle = jest.fn();
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={onToggle}
        testID="pr"
      />,
    );
    fireEvent.press(screen.getByTestId("pr"));
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith("p1");
  });

  it("calls onToggle with product id when checkbox is pressed", () => {
    const onToggle = jest.fn();
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={onToggle}
        testID="pr"
      />,
    );
    fireEvent.press(screen.getByTestId("pr-checkbox"));
    expect(onToggle).toHaveBeenCalledWith("p1");
  });

  it("does not call onToggle when row is pressed and disabled", () => {
    const onToggle = jest.fn();
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={onToggle}
        disabled
        testID="pr"
      />,
    );
    fireEvent.press(screen.getByTestId("pr"));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("does not call onToggle when checkbox is pressed and disabled", () => {
    const onToggle = jest.fn();
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={onToggle}
        disabled
        testID="pr"
      />,
    );
    fireEvent.press(screen.getByTestId("pr-checkbox"));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("renders accessibility state with disabled=true", () => {
    render(
      <ProductRow
        product={PRODUCT}
        selected={false}
        onToggle={jest.fn()}
        disabled
        testID="pr"
      />,
    );
    const row = screen.getByTestId("pr");
    expect(row.props.accessibilityState.disabled).toBe(true);
  });

  it("renders without testID", () => {
    const { toJSON } = render(
      <ProductRow product={PRODUCT} selected={false} onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders sku without testID", () => {
    render(
      <ProductRow product={PRODUCT} selected={false} onToggle={jest.fn()} />,
    );
    expect(screen.getByText("H056289CKAB")).toBeTruthy();
  });

  it("renders thumbnail without testID", () => {
    const { toJSON } = render(
      <ProductRow product={PRODUCT} selected={false} onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders placeholder thumbnail without testID", () => {
    const { toJSON } = render(
      <ProductRow
        product={PRODUCT_NO_THUMB}
        selected={false}
        onToggle={jest.fn()}
      />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders selected state without testID", () => {
    const { toJSON } = render(
      <ProductRow product={PRODUCT} selected={true} onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });
});
