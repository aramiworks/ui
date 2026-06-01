import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "tamagui";
import { Table, TableHeader, TableRow, TableCell } from "../../table";
import { Text } from "../../../text";

function Overview() {
  return (
    <YStack gap={24} padding={16}>
      <Table>
        <TableHeader>
          <TableCell>
            <Text role="title" size="small">
              Property
            </Text>
          </TableCell>
          <TableCell>
            <Text role="title" size="small">
              Value
            </Text>
          </TableCell>
        </TableHeader>
        <TableRow>
          <TableCell>
            <Text role="body" size="medium">
              Dot Size
            </Text>
          </TableCell>
          <TableCell>
            <Text role="body" size="medium">
              6 × 6
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Text role="body" size="medium">
              Large Badge Height
            </Text>
          </TableCell>
          <TableCell>
            <Text role="body" size="medium">
              16
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Text role="body" size="medium">
              Corner Radius
            </Text>
          </TableCell>
          <TableCell>
            <Text role="body" size="medium">
              8 (full pill)
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Text role="body" size="medium">
              Font
            </Text>
          </TableCell>
          <TableCell>
            <Text role="body" size="medium">
              Label Small (11sp, 500)
            </Text>
          </TableCell>
        </TableRow>
      </Table>
    </YStack>
  );
}

const meta: Meta = {
  title: "atoms/table/overview",
  component: Overview,
  tags: ["autodocs", "!dev"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/b79qv459pnXaypgNQfNXuc/atoms?node-id=2052-3",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
