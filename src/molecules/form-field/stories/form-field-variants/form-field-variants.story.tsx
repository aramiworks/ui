import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "../../form-field";
import type { FormFieldProps } from "../../form-field.type";

const FIGMA_BASE =
  "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/ui?node-id=";

const meta: Meta<FormFieldProps> = {
  title: "molecules/form-field/variants",
  component: FormField,
  args: {
    label: "Email",
    variant: "filled",
    value: "user@example.com",
  },
  parameters: {
    design: { type: "figma", url: `${FIGMA_BASE}1452-2` },
  },
};

export default meta;
type Story = StoryObj<FormFieldProps>;

export const WithLabel: Story = {
  name: "With Label",
  args: { label: "Email", required: true },
};

export const WithError: Story = {
  name: "With Error",
  args: { label: "Email", required: true, errorText: "Invalid email address" },
};

export const WithCharacterCount: Story = {
  name: "With Character Count",
  args: {
    label: "Bio",
    value: "Hello",
    characterCount: { current: 5, max: 100 },
  },
};

export const WithHelper: Story = {
  name: "With Helper",
  args: { label: "Password", helperText: "Must be at least 8 characters" },
};
