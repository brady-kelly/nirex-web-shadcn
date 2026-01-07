export interface ProductFeature {
  id: string;
  text: string;
}

export interface Product {
  id: string;
  heading: string;
  subHeading?: string;
  workingSize?: string;
  packageSize?: string;
  volume?: string;
  packageWeight?: string;
  localPrice: string;
  imageSrc?: string;
}
