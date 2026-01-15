"use client";

import type { Category } from "../../../../generated/prisma/client";
import { useActionState } from "react";
import { updateProduct } from "@/lib/products/actions/product";
import { FormInput } from "@/components/shared/formInput";
import { Button } from "@/components/ui/button";
import { FieldSet } from "@/components/shared/fieldSet";

export interface ProductEditorProps {
    productId: string,
    categoryId: string,
    categories: Category[];
    name: string;
    variant?: string;
    desc?: string;
    workingSize?: string;
    packageSize?: string;
    volume?: string;
    packageWeight?: string;
    imageUrl?: string;
    localPrice: string;
}

const initialState = {
    message: "",
    errors: {
        // id: undefined,
        // categoryId: undefined,
        // name: undefined,
        // variant: undefined,
        // desc: undefined,
        // workingSize: undefined,
        // packageSize: undefined,
        // volume: undefined,
        // packageWeight: undefined,
        // imageFile: undefined,
        // localPrice: undefined
    },
}

export function ProductEditor({ productId, name, variant, desc, workingSize, packageSize, volume, packageWeight, localPrice, categories, categoryId }: ProductEditorProps) {
    const [state, formAction, pending] = useActionState(updateProduct, initialState)
    return (
        <div className="w-full max-w-md">
            <h1 className="pb-3">Edit Product: {name}</h1>
            <form action={formAction}>
                <FieldSet heading="Product Properties">
                    <FormInput name="name" required value={name} />
                    <FormInput name="variant" value={variant} />
                    <FormInput name="desc" label="Description" value={desc} />
                </FieldSet>
                <FieldSet heading="Product Attributes">
                    <FormInput name="workingSize" value={workingSize} />
                    <FormInput name="packageSize" value={packageSize} />
                    <FormInput name="volume" value={volume} />
                    <FormInput name="packageWeight" value={packageWeight} />
                </FieldSet>
                <FieldSet heading="Pricing">
                    <FormInput name="localPrice" value={localPrice} />
                </FieldSet>
                <Button className="mt-4" type="submit" disabled={pending}>Save</Button>
            </form>
        </div>
    );
}