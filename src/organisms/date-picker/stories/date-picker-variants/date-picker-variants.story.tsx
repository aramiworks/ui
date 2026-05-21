import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "../../date-picker";
import type { DatePickerProps } from "../../date-picker.type";

const FIGMA_URL =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=1702-113";

const meta: Meta<DatePickerProps> = {
  title: "organisms/date-picker/variants",
  component: DatePicker,
  parameters: {
    design: { type: "figma", url: FIGMA_URL },
  },
  args: {
    visible: true,
    onConfirm: () => {},
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<DatePickerProps>;

export const Calendar: Story = {
  args: { mode: "calendar" },
};

export const Input: Story = {
  args: { mode: "input" },
};

export const RangeCalendar: Story = {
  args: {
    selectionMode: "range",
    mode: "calendar",
    startDate: new Date(2026, 3, 10),
    endDate: new Date(2026, 3, 20),
  },
};

export const RangeInput: Story = {
  args: {
    selectionMode: "range",
    mode: "input",
  },
};

export const Docked: Story = {
  args: {
    variant: "docked",
    visible: false,
  },
};

export const DockedRange: Story = {
  args: {
    variant: "docked",
    visible: false,
    selectionMode: "range",
    startDate: new Date(2026, 3, 10),
    endDate: new Date(2026, 3, 20),
  },
};
