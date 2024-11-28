export interface TechItem {
  name: string;
  color: string;
  icon: string;
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}
