import type { Meta, StoryObj } from "@storybook/react-vite";
import { WatchlistRow } from "../../watchlist-row";
import type { WatchlistRowProps } from "../../watchlist-row.type";

const meta: Meta<WatchlistRowProps> = {
  title: "organisms/watchlist-row/variants",
  component: WatchlistRow,
};

export default meta;
type Story = StoryObj<WatchlistRowProps>;

const PICOTAN = {
  id: "picotan-lock-18",
  name: "피코탄 락 18",
  sku: "H056289CKAB",
  imageUrl: "https://picsum.photos/seed/picotan/96",
  state: "inStock" as const,
  lastChecked: "2분 전",
};

const KELLY = {
  id: "kelly-25",
  name: "켈리 25 시계",
  sku: "H078444CKAA",
  state: "outOfStock" as const,
  lastChecked: "5분 전",
};

const BIRKIN_LIMITED = {
  id: "birkin-30",
  name: "버킨 30 토고",
  sku: "H077444CKAB",
  imageUrl: "https://picsum.photos/seed/birkin/96",
  state: "limited" as const,
  lastChecked: "1시간 전",
};

const CONSTANCE_UNKNOWN = {
  id: "constance-24",
  name: "콘스탄스 24",
  imageUrl: "https://picsum.photos/seed/constance/96",
  state: "unknown" as const,
};

const LONG_NAME = {
  id: "long-name",
  name: "버킨 30 토고 골드 클레망스 팔라듐 하드웨어 리미티드 에디션",
  sku: "H077444CKAB",
  imageUrl: "https://picsum.photos/seed/birkin-long/96",
  state: "inStock" as const,
  lastChecked: "방금 전",
};

const NO_THUMBNAIL = {
  id: "no-thumb",
  name: "에르메스 가방",
  sku: "H012345CKAB",
  state: "outOfStock" as const,
  lastChecked: "10분 전",
};

export const Default: Story = {
  args: {
    item: PICOTAN,
    onPress: () => {},
  },
};

export const InStock: Story = {
  args: {
    item: PICOTAN,
    onPress: () => {},
  },
};

export const OutOfStock: Story = {
  args: {
    item: KELLY,
    onPress: () => {},
  },
};

export const Limited: Story = {
  args: {
    item: BIRKIN_LIMITED,
    onPress: () => {},
  },
};

export const Unknown: Story = {
  args: {
    item: CONSTANCE_UNKNOWN,
    onPress: () => {},
  },
};

export const Disabled: Story = {
  args: {
    item: PICOTAN,
    disabled: true,
    onPress: () => {},
  },
};

export const WithoutThumbnail: Story = {
  args: {
    item: NO_THUMBNAIL,
    onPress: () => {},
  },
};

export const LongName: Story = {
  args: {
    item: LONG_NAME,
    onPress: () => {},
  },
};
