import { render, screen, fireEvent } from "@/test-utils";
import { CatalogGroupHeader } from "./catalog-group-header";

describe("CatalogGroupHeader", () => {
  it("renders label text", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    expect(screen.getByText("가방")).toBeTruthy();
  });

  it("renders checkbox in unchecked state when selected=false", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    const checkbox = screen.getByTestId("cgh-checkbox");
    expect(checkbox.props.accessibilityState.checked).toBe(false);
  });

  it("renders checkbox in checked state when selected=true", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={true}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    const checkbox = screen.getByTestId("cgh-checkbox");
    expect(checkbox.props.accessibilityState.checked).toBe(true);
  });

  it("renders checkbox in indeterminate state", () => {
    const { toJSON } = render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        indeterminate
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("calls onToggle when row is pressed", () => {
    const onToggle = jest.fn();
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={onToggle}
        testID="cgh"
      />,
    );
    fireEvent.press(screen.getByTestId("cgh"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("calls onToggle when checkbox is pressed", () => {
    const onToggle = jest.fn();
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={onToggle}
        testID="cgh"
      />,
    );
    fireEvent.press(screen.getByTestId("cgh-checkbox"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("does not call onToggle when row is pressed and disabled", () => {
    const onToggle = jest.fn();
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={onToggle}
        disabled
        testID="cgh"
      />,
    );
    fireEvent.press(screen.getByTestId("cgh"));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("does not call onToggle when checkbox is pressed and disabled", () => {
    const onToggle = jest.fn();
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={onToggle}
        disabled
        testID="cgh"
      />,
    );
    fireEvent.press(screen.getByTestId("cgh-checkbox"));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("renders count badge when count is provided", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        count={12}
        selected={false}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    expect(screen.getByTestId("cgh-count")).toBeTruthy();
  });

  it("does not render count badge when count is omitted", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    expect(screen.queryByTestId("cgh-count")).toBeNull();
  });

  it("renders count badge when count is 0", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        count={0}
        selected={false}
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    expect(screen.getByTestId("cgh-count")).toBeTruthy();
  });

  it("renders accessibility state with disabled=true", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={jest.fn()}
        disabled
        testID="cgh"
      />,
    );
    const row = screen.getByTestId("cgh");
    expect(row.props.accessibilityState.disabled).toBe(true);
  });

  it("renders accessibility state with mixed checked for indeterminate", () => {
    render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        indeterminate
        onToggle={jest.fn()}
        testID="cgh"
      />,
    );
    const row = screen.getByTestId("cgh");
    expect(row.props.accessibilityState.checked).toBe("mixed");
  });

  it("renders without testID", () => {
    const { toJSON } = render(
      <CatalogGroupHeader label="가방" selected={false} onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders selected state without testID", () => {
    const { toJSON } = render(
      <CatalogGroupHeader label="가방" selected={true} onToggle={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with count and without testID", () => {
    const { toJSON } = render(
      <CatalogGroupHeader
        label="가방"
        count={5}
        selected={false}
        onToggle={jest.fn()}
      />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders indeterminate without testID", () => {
    const { toJSON } = render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        indeterminate
        onToggle={jest.fn()}
      />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders disabled without testID", () => {
    const { toJSON } = render(
      <CatalogGroupHeader
        label="가방"
        selected={false}
        onToggle={jest.fn()}
        disabled
      />,
    );
    expect(toJSON()).toBeTruthy();
  });
});
