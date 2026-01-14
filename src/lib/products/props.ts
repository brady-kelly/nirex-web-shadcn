import type { ProductGridProps } from "@/components/product/productGrid";
import { formatCurrency } from "@/lib/formatting";
import type { Product } from "../../../generated/prisma/client";
import type { ProductCardProps } from "@/components/product/productCard";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

export function buildProductCardProps(
  product: Product,
  showEdit: boolean
): ProductCardProps {
  const props = {
    productId: product.id.toString(),
    heading: product.name,
    subHeading: product.desc || undefined,
    workingSize: product.workingSize || undefined,
    packageSize: product.packageSize || undefined,
    volume: product.volume || undefined,
    packageWeight: product.packageWeight || undefined,
    image: {
      src: getImageSrcPath(product.imageFile || undefined) || "",
      alt: "product image",
    },
    localPrice: formatCurrency(product.localPrice, "ZAR"),
    showEdit: showEdit,
  };
  return props;
}

export function buildProductGridProps(
  catId: number,
  catName: string,
  products: Product[],
  catDesc?: string,
  cols?: 2 | 3 | 4,
  isAdmin?: boolean
): ProductGridProps {
  const cardProps = products.map((product) =>
    buildProductCardProps(product, isAdmin || false)
  );

  const gridProps: ProductGridProps = {
    id: catId.toString(),
    heading: catName,
    description: catDesc,
    columns: cols || 3,
    items: cardProps,
    showEdit: isAdmin,
  };
  return gridProps;
}
