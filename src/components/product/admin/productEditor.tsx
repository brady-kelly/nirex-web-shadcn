export interface ProductEditorProps {
    productId: string,
    categoryId: string,
    heading: string;
    subHeading?: string;
    workingSize?: string;
    packageSize?: string;
    volume?: string;
    packageWeight?: string;
    localPrice: string;
}

export function ProductEditor({ productId }: ProductEditorProps) {

}