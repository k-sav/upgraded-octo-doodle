export type SettingsData = {
  description?: string;
  external_link?: string;
  image0?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  layout?: LayoutType;
};

export enum LayoutType {
  GRID = "grid",
  CAROUSEL = "carousel",
}
