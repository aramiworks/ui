import { render, screen, fireEvent } from "@/test-utils";
import { DestructiveActionButton } from "./destructive-action-button";

describe("DestructiveActionButton", () => {
  it("renders the button with label", () => {
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={jest.fn()}
        testID="dab"
      />,
    );
    expect(screen.getByTestId("dab")).toBeTruthy();
    expect(screen.getByText("Delete")).toBeTruthy();
  });

  it("shows confirmation dialog when pressed with requireConfirm", () => {
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={jest.fn()}
        confirmTitle="Confirm Delete"
        confirmBody="This action cannot be undone."
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    expect(screen.getByTestId("dab-dialog")).toBeTruthy();
    expect(screen.getByText("Confirm Delete")).toBeTruthy();
    expect(screen.getByText("This action cannot be undone.")).toBeTruthy();
  });

  it("calls onConfirm after dialog confirmation", () => {
    const onConfirm = jest.fn();
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={onConfirm}
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    fireEvent.press(screen.getByTestId("dab-dialog-confirm"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("does not call onConfirm when dialog is dismissed", () => {
    const onConfirm = jest.fn();
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={onConfirm}
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    fireEvent.press(screen.getByTestId("dab-dialog-dismiss"));
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("calls onConfirm immediately when requireConfirm is false", () => {
    const onConfirm = jest.fn();
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={onConfirm}
        requireConfirm={false}
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("does not render dialog when requireConfirm is false", () => {
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={jest.fn()}
        requireConfirm={false}
        testID="dab"
      />,
    );
    expect(screen.queryByTestId("dab-dialog")).toBeNull();
  });

  it("uses default confirm title", () => {
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={jest.fn()}
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    expect(screen.getByText("Are you sure?")).toBeTruthy();
  });

  it("renders without testID", () => {
    const { toJSON } = render(
      <DestructiveActionButton label="Delete" onConfirm={jest.fn()} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it("is disabled when disabled prop is true", () => {
    const onConfirm = jest.fn();
    render(
      <DestructiveActionButton
        label="Delete"
        onConfirm={onConfirm}
        disabled
        testID="dab"
      />,
    );
    fireEvent.press(screen.getByTestId("dab"));
    expect(onConfirm).not.toHaveBeenCalled();
  });
});
