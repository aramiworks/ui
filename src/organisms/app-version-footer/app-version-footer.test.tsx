import { render, screen, fireEvent } from "@/test-utils";
import { AppVersionFooter } from "./app-version-footer";

describe("AppVersionFooter", () => {
  it("renders version string", () => {
    render(<AppVersionFooter version="1.2.3" testID="avf" />);
    expect(screen.getByText("v1.2.3")).toBeTruthy();
  });

  it("renders version with build number", () => {
    render(<AppVersionFooter version="1.2.3" build={42} testID="avf" />);
    expect(screen.getByText("v1.2.3 (42)")).toBeTruthy();
  });

  it("renders version with string build", () => {
    render(<AppVersionFooter version="1.0.0" build="abc123" testID="avf" />);
    expect(screen.getByText("v1.0.0 (abc123)")).toBeTruthy();
  });

  it("calls onCopy when pressed", () => {
    const onCopy = jest.fn();
    render(<AppVersionFooter version="1.0.0" onCopy={onCopy} testID="avf" />);
    fireEvent.press(screen.getByTestId("avf-pressable"));
    expect(onCopy).toHaveBeenCalledTimes(1);
  });

  it("does not render pressable when onCopy is not provided", () => {
    render(<AppVersionFooter version="1.0.0" testID="avf" />);
    expect(screen.queryByTestId("avf-pressable")).toBeNull();
    expect(screen.getByTestId("avf")).toBeTruthy();
  });

  it("renders with testID", () => {
    render(<AppVersionFooter version="1.0.0" testID="avf" />);
    expect(screen.getByTestId("avf")).toBeTruthy();
    expect(screen.getByTestId("avf-label")).toBeTruthy();
  });

  it("renders without testID", () => {
    const { toJSON } = render(<AppVersionFooter version="1.0.0" />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders build number 0 correctly", () => {
    render(<AppVersionFooter version="1.0.0" build={0} testID="avf" />);
    expect(screen.getByText("v1.0.0 (0)")).toBeTruthy();
  });
});
