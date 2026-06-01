import { render, screen, fireEvent } from "@/test-utils";
import { PurchaseRow } from "./purchase-row";

const TEST_DATE = new Date(2026, 4, 21); // 2026-05-21

describe("PurchaseRow", () => {
  it("renders date and amount", () => {
    render(<PurchaseRow date={TEST_DATE} amount={12000000} testID="pr" />);
    expect(screen.getByTestId("pr")).toBeTruthy();
    expect(screen.getByText("2026.05.21")).toBeTruthy();
    expect(screen.getByText("₩12,000,000")).toBeTruthy();
  });

  it("renders count when provided", () => {
    render(
      <PurchaseRow date={TEST_DATE} amount={5000} count={3} testID="pr" />,
    );
    expect(screen.getByTestId("pr-count")).toBeTruthy();
    expect(screen.getByText("3 items")).toBeTruthy();
  });

  it("does not render count when not provided", () => {
    render(<PurchaseRow date={TEST_DATE} amount={5000} testID="pr" />);
    expect(screen.queryByTestId("pr-count")).toBeNull();
  });

  it("formats KRW currency by default", () => {
    render(<PurchaseRow date={TEST_DATE} amount={50000} testID="pr" />);
    expect(screen.getByText("₩50,000")).toBeTruthy();
  });

  it("formats non-KRW currency", () => {
    render(
      <PurchaseRow date={TEST_DATE} amount={100} currency="USD" testID="pr" />,
    );
    expect(screen.getByText("100 USD")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    render(
      <PurchaseRow
        date={TEST_DATE}
        amount={5000}
        onPress={onPress}
        testID="pr"
      />,
    );
    fireEvent.press(screen.getByTestId("pr-pressable"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not render pressable when onPress is not provided", () => {
    render(<PurchaseRow date={TEST_DATE} amount={5000} testID="pr" />);
    expect(screen.queryByTestId("pr-pressable")).toBeNull();
  });

  it("renders testIDs for subcomponents", () => {
    render(<PurchaseRow date={TEST_DATE} amount={5000} testID="pr" />);
    expect(screen.getByTestId("pr-date")).toBeTruthy();
    expect(screen.getByTestId("pr-amount")).toBeTruthy();
  });

  it("renders without testID", () => {
    const { toJSON } = render(<PurchaseRow date={TEST_DATE} amount={5000} />);
    expect(toJSON()).toBeTruthy();
  });
});
