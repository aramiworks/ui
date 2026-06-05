import { render, screen, fireEvent } from "@/test-utils";
import { ErrorStateCard } from "./error-state-card";

describe("ErrorStateCard", () => {
  it("renders the default title", () => {
    render(<ErrorStateCard testID="esc" />);
    expect(screen.getByText("오류가 발생했습니다")).toBeTruthy();
  });

  it("renders a custom title overriding the default", () => {
    render(<ErrorStateCard title="네트워크 오류" testID="esc" />);
    expect(screen.getByText("네트워크 오류")).toBeTruthy();
    expect(screen.queryByText("오류가 발생했습니다")).toBeNull();
  });

  it("renders the message when provided", () => {
    render(
      <ErrorStateCard message="잠시 후 다시 시도해 주세요." testID="esc" />,
    );
    expect(screen.getByTestId("esc-message")).toBeTruthy();
    expect(screen.getByText("잠시 후 다시 시도해 주세요.")).toBeTruthy();
  });

  it("does not render the message when not provided", () => {
    render(<ErrorStateCard testID="esc" />);
    expect(screen.queryByTestId("esc-message")).toBeNull();
  });

  it("hides the retry button by default", () => {
    render(<ErrorStateCard testID="esc" />);
    expect(screen.queryByTestId("esc-retry")).toBeNull();
    expect(screen.queryByText("다시 시도")).toBeNull();
  });

  it("renders the retry button when onRetry is passed", () => {
    render(<ErrorStateCard onRetry={() => {}} testID="esc" />);
    expect(screen.getByTestId("esc-retry")).toBeTruthy();
    expect(screen.getByText("다시 시도")).toBeTruthy();
  });

  it("renders the retry button with a custom retryLabel", () => {
    render(
      <ErrorStateCard onRetry={() => {}} retryLabel="새로고침" testID="esc" />,
    );
    expect(screen.getByText("새로고침")).toBeTruthy();
    expect(screen.queryByText("다시 시도")).toBeNull();
  });

  it("fires onRetry when the retry button is pressed", () => {
    const onRetry = jest.fn();
    render(<ErrorStateCard onRetry={onRetry} testID="esc" />);
    fireEvent.press(screen.getByTestId("esc-retry"));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("propagates testID to the card and child elements", () => {
    render(<ErrorStateCard message="설명" onRetry={() => {}} testID="esc" />);
    expect(screen.getByTestId("esc")).toBeTruthy();
    expect(screen.getByTestId("esc-icon")).toBeTruthy();
    expect(screen.getByTestId("esc-title")).toBeTruthy();
    expect(screen.getByTestId("esc-message")).toBeTruthy();
    expect(screen.getByTestId("esc-retry")).toBeTruthy();
  });

  it("renders without a testID", () => {
    const { toJSON } = render(<ErrorStateCard message="오류" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders the retry button without a testID", () => {
    render(<ErrorStateCard onRetry={() => {}} />);
    expect(screen.getByText("다시 시도")).toBeTruthy();
  });
});
