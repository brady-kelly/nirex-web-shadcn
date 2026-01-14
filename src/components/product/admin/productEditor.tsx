import { Field, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Category } from "../../../../generated/prisma/client";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { updateProduct } from "@/lib/products/actions/data";
import { FormInput } from "@/components/shared/formInput";
import { Button } from "@/components/ui/button";
import { de } from "zod/v4/locales";

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
        id: undefined,
        categoryId: undefined,
        name: undefined,
        variant: undefined,
        desc: undefined,
        workingSize: undefined,
        packageSize: undefined,
        volume: undefined,
        packageWeight: undefined,
        imageFile: undefined,
        localPrice: undefined
    },
}

export function ProductEditor({ productId, name, variant, desc, workingSize, packageSize, volume, packageWeight, localPrice, categories, categoryId }: ProductEditorProps) {
    const [state, formAction, pending] = useActionState(updateProduct, initialState)
    return (
        <div className="w-full max-w-md">
            <form action={formAction}>
                <fieldset>
                    <legend>Product Properties</legend>
                    <FormInput name="name" required value={name}></FormInput>
                    <FormInput name="variant" value={variant}></FormInput>
                    <FormInput name="desc" label="Description" value={desc}></FormInput>
                    <FormInput name="workingSize" value={workingSize}></FormInput>
                    <FormInput name="packageSize" value={packageSize}></FormInput>
                    <FormInput name="volume" value={volume}></FormInput>
                    <FormInput name="packageWeight" value={packageWeight}></FormInput>
                    <FormInput name="localPrice" value={localPrice}></FormInput>
                </fieldset>
                <Button type="submit" disabled={pending}>Save</Button>
            </form>
        </div>
    );
}