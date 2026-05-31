import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { EligibilityBadge } from "./eligibility-badge";

describe("EligibilityBadge", () => {
  it("renders with eligible status", () => {
    render(<EligibilityBadge status="eligible" testID="eb" />);
    expect(screen.getByTestId("eb")).toBeTruthy();
    expect(screen.getByText("Eligible")).toBeTruthy();
  });

  it("renders with pending status", () => {
    render(<EligibilityBadge status="pending" testID="eb" />);
    expect(screen.getByText("Pending")).toBeTruthy();
  });

  it("renders with ineligible status", () => {
    render(<EligibilityBadge status="ineligible" testID="eb" />);
    expect(screen.getByText("Ineligible")).toBeTruthy();
  });

  it("renders with expired status", () => {
    render(<EligibilityBadge status="expired" testID="eb" />);
    expect(screen.getByText("Expired")).toBeTruthy();
  });

  it("renders custom label", () => {
    render(<EligibilityBadge status="eligible" label="Approved" testID="eb" />);
    expect(screen.getByText("Approved")).toBeTruthy();
  });

  it("renders icon when provided", () => {
    render(
      <EligibilityBadge
        status="eligible"
        icon={<Text testID="icon-inner">✓</Text>}
        testID="eb"
      />,
    );
    expect(screen.getByTestId("eb-icon")).toBeTruthy();
    expect(screen.getByTestId("icon-inner")).toBeTruthy();
  });

  it("does not render icon when not provided", () => {
    render(<EligibilityBadge status="eligible" testID="eb" />);
    expect(screen.queryByTestId("eb-icon")).toBeNull();
  });

  it("renders label testID", () => {
    render(<EligibilityBadge status="pending" testID="eb" />);
    expect(screen.getByTestId("eb-label")).toBeTruthy();
  });

  it("renders without testID", () => {
    const { toJSON } = render(<EligibilityBadge status="eligible" />);
    expect(toJSON()).toBeTruthy();
  });

  it("has accessibility role text", () => {
    render(<EligibilityBadge status="eligible" testID="eb" />);
    const element = screen.getByTestId("eb");
    expect(element.props.accessibilityRole).toBe("text");
  });

  it("uses label as accessibility label", () => {
    render(
      <EligibilityBadge status="eligible" label="Available" testID="eb" />,
    );
    const element = screen.getByTestId("eb");
    expect(element.props.accessibilityLabel).toBe("Available");
  });
});
