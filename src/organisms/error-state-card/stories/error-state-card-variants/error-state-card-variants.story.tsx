import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorStateCard } from "../../error-state-card";
import type { ErrorStateCardProps } from "../../error-state-card.type";

const meta: Meta<ErrorStateCardProps> = {
  title: "organisms/error-state-card/variants",
  component: ErrorStateCard,
};

export default meta;
type Story = StoryObj<ErrorStateCardProps>;

export const Default: Story = {
  args: {},
};

export const WithMessage: Story = {
  args: {
    message: "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
  },
};

export const WithRetry: Story = {
  args: {
    message: "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
    onRetry: () => {},
  },
};

export const CustomLabels: Story = {
  args: {
    title: "네트워크 연결 오류",
    message: "인터넷 연결을 확인한 뒤 다시 시도해 주세요.",
    retryLabel: "새로고침",
    onRetry: () => {},
  },
};
