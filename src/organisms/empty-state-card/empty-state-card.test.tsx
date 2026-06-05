import { fireEvent, render, screen } from "@/test-utils";
import { EmptyStateCard } from "./empty-state-card";

describe("EmptyStateCard", () => {
  it("renders the required title", () => {
    render(<EmptyStateCard title="No alerts yet" testID="esc" />);
    expect(screen.getByTestId("esc")).toBeTruthy();
    expect(screen.getByTestId("esc-title")).toBeTruthy();
    expect(screen.getByText("No alerts yet")).toBeTruthy();
  });

  it("renders the message when provided", () => {
    render(
      <EmptyStateCard
        title="No alerts yet"
        message="You'll see alerts here once items restock."
        testID="esc"
      />,
    );
    expect(screen.getByTestId("esc-message")).toBeTruthy();
    expect(
      screen.getByText("You'll see alerts here once items restock."),
    ).toBeTruthy();
  });

  it("does not render the message when not provided", () => {
    render(<EmptyStateCard title="No alerts yet" testID="esc" />);
    expect(screen.queryByTestId("esc-message")).toBeNull();
  });

  it("renders the icon when provided", () => {
    render(
      <EmptyStateCard
        title="No alerts yet"
        icon="notifications"
        testID="esc"
      />,
    );
    expect(screen.getByTestId("esc-icon")).toBeTruthy();
  });

  it("does not render the icon when not provided", () => {
    render(<EmptyStateCard title="No alerts yet" testID="esc" />);
    expect(screen.queryByTestId("esc-icon")).toBeNull();
  });

  it("renders the action button only when actionLabel and onAction are both provided", () => {
    render(
      <EmptyStateCard
        title="No alerts yet"
        actionLabel="Browse catalog"
        onAction={() => {}}
        testID="esc"
      />,
    );
    expect(screen.getByTestId("esc-action")).toBeTruthy();
    expect(screen.getByText("Browse catalog")).toBeTruthy();
  });

  it("does not render the action button when only actionLabel is provided", () => {
    render(
      <EmptyStateCard
        title="No alerts yet"
        actionLabel="Browse catalog"
        testID="esc"
      />,
    );
    expect(screen.queryByTestId("esc-action")).toBeNull();
  });

  it("does not render the action button when only onAction is provided", () => {
    render(
      <EmptyStateCard title="No alerts yet" onAction={() => {}} testID="esc" />,
    );
    expect(screen.queryByTestId("esc-action")).toBeNull();
  });

  it("fires onAction when the action button is pressed", () => {
    const onAction = jest.fn();
    render(
      <EmptyStateCard
        title="No alerts yet"
        actionLabel="Browse catalog"
        onAction={onAction}
        testID="esc"
      />,
    );
    fireEvent.press(screen.getByTestId("esc-action"));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("propagates testID to nested elements", () => {
    render(
      <EmptyStateCard
        title="No alerts yet"
        icon="notifications"
        message="Restock alerts appear here."
        actionLabel="Browse catalog"
        onAction={() => {}}
        testID="esc"
      />,
    );
    expect(screen.getByTestId("esc")).toBeTruthy();
    expect(screen.getByTestId("esc-icon")).toBeTruthy();
    expect(screen.getByTestId("esc-title")).toBeTruthy();
    expect(screen.getByTestId("esc-message")).toBeTruthy();
    expect(screen.getByTestId("esc-action")).toBeTruthy();
  });

  it("renders without a testID", () => {
    const { toJSON } = render(<EmptyStateCard title="No alerts yet" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders icon without a testID", () => {
    const { toJSON } = render(
      <EmptyStateCard title="No alerts yet" icon="notifications" />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders message without a testID", () => {
    const { toJSON } = render(
      <EmptyStateCard
        title="No alerts yet"
        message="You'll see alerts here once items restock."
      />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders action button without a testID", () => {
    const { toJSON } = render(
      <EmptyStateCard
        title="No alerts yet"
        actionLabel="Browse catalog"
        onAction={() => {}}
      />,
    );
    expect(toJSON()).toBeTruthy();
  });
});
