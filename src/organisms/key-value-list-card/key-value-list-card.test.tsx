import { render, screen } from "@/test-utils";
import { Text } from "tamagui";
import { KeyValueListCard } from "./key-value-list-card";

const ITEMS = [
  { label: "Brand", value: "Hermès" },
  { label: "Category", value: "Bags" },
  { label: "Price", value: "₩12,000,000" },
];

describe("KeyValueListCard", () => {
  it("renders all item rows", () => {
    render(<KeyValueListCard items={ITEMS} testID="kvlc" />);
    expect(screen.getByTestId("kvlc")).toBeTruthy();
    expect(screen.getByTestId("kvlc-row-0")).toBeTruthy();
    expect(screen.getByTestId("kvlc-row-1")).toBeTruthy();
    expect(screen.getByTestId("kvlc-row-2")).toBeTruthy();
  });

  it("renders labels and values", () => {
    render(<KeyValueListCard items={ITEMS} testID="kvlc" />);
    expect(screen.getByText("Brand")).toBeTruthy();
    expect(screen.getByText("Hermès")).toBeTruthy();
    expect(screen.getByText("Category")).toBeTruthy();
    expect(screen.getByText("Bags")).toBeTruthy();
  });

  it("renders title when provided", () => {
    render(
      <KeyValueListCard items={ITEMS} title="Details" testID="kvlc" />,
    );
    expect(screen.getByTestId("kvlc-title")).toBeTruthy();
    expect(screen.getByText("Details")).toBeTruthy();
  });

  it("does not render title when not provided", () => {
    render(<KeyValueListCard items={ITEMS} testID="kvlc" />);
    expect(screen.queryByTestId("kvlc-title")).toBeNull();
  });

  it("renders skeleton rows when loading", () => {
    render(<KeyValueListCard items={[]} loading testID="kvlc" />);
    expect(screen.getByTestId("kvlc-skeleton-0")).toBeTruthy();
    expect(screen.getByTestId("kvlc-skeleton-1")).toBeTruthy();
    expect(screen.getByTestId("kvlc-skeleton-2")).toBeTruthy();
  });

  it("renders items instead of skeletons when not loading", () => {
    render(<KeyValueListCard items={ITEMS} testID="kvlc" />);
    expect(screen.queryByTestId("kvlc-skeleton-0")).toBeNull();
    expect(screen.getByTestId("kvlc-row-0")).toBeTruthy();
  });

  it("renders ReactNode values", () => {
    const items = [
      { label: "Status", value: <Text>Active</Text> },
    ];
    render(<KeyValueListCard items={items} testID="kvlc" />);
    expect(screen.getByText("Active")).toBeTruthy();
  });

  it("renders trailing element", () => {
    const items = [
      { label: "Link", value: "View", trailing: <Text testID="arrow">→</Text> },
    ];
    render(<KeyValueListCard items={items} testID="kvlc" />);
    expect(screen.getByTestId("arrow")).toBeTruthy();
  });

  it("renders empty items array without crashing", () => {
    render(<KeyValueListCard items={[]} testID="kvlc" />);
    expect(screen.getByTestId("kvlc")).toBeTruthy();
  });

  it("renders without testID", () => {
    const { toJSON } = render(<KeyValueListCard items={ITEMS} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders loading state with title", () => {
    render(
      <KeyValueListCard items={[]} loading title="Loading..." testID="kvlc" />,
    );
    expect(screen.getByTestId("kvlc-title")).toBeTruthy();
    expect(screen.getByTestId("kvlc-skeleton-0")).toBeTruthy();
  });
});
