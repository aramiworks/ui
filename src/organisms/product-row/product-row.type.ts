export type Product = {
  /** Unique product identifier */
  id: string;
  /** Product display name */
  name: string;
  /** Stock-keeping unit (model number) */
  sku?: string;
  /** Optional product thumbnail URL */
  imageUrl?: string;
};

export type ProductRowProps = {
  /** Product data */
  product: Product;
  /** Whether the product is selected (checkbox checked) */
  selected: boolean;
  /** Callback fired with product id when the row is toggled */
  onToggle: (id: string) => void;
  /** Whether the row is disabled */
  disabled?: boolean;
  /** Test ID */
  testID?: string;
};
