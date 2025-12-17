export interface ProductItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}
