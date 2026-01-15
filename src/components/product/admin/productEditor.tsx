/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
"use client";

import type { Category } from "../../../../generated/prisma/client";
import { updateProduct } from "@/lib/products/actions/product";
import { FormInputField } from "@/components/shared/formInputField";
import { useActionState, useEffect } from "react";
import Form from "next/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import type { EditProductFormState } from "@/lib/products/schemas/product";
import { FieldGroup } from "@/components/ui/field";

export interface ProductEditorProps {
    id: number,
    categoryId: number,
    name: string;
    variant?: string;
    desc?: string;
    workingSize?: string;
    packageSize?: string;
    volume?: string;
    packageWeight?: string;
    imageUrl?: string;
    localPrice: number;
    categories: Category[];
}

export function ProductEditor({ id, categoryId, name, variant, desc, workingSize, packageSize, volume, packageWeight, localPrice, categories }: ProductEditorProps) {
    const initialState: EditProductFormState = {
        values: {
            id: id,
            categoryId: categoryId,
            name: name,
            variant: variant,
            desc: desc,
            workingSize: workingSize,
            packageSize: packageSize,
            volume: volume,
            packageWeight,
            localPrice
        },
        errors: {
        },
        success: false,
    }
    const [formState, formAction, pending] = useActionState<EditProductFormState, FormData>
        (updateProduct, initialState);
    useEffect(() => {
        if (formState.success) {
            redirect(`/admin/product/list/${categoryId}`);
        }
    }, [formState.success, categoryId]);
    const formId = "prodEditForm";
    return (
        <div className="w-full">
            <h1 className="pb-3">Edit Product: {name}</h1>
            <Form action={formAction} id={formId}>
                <FieldGroup>
                    <Input id="id" name="id" type="hidden" defaultValue={formState.values?.id} readOnly></Input>
                    <h2>Product Properties</h2>
                    <FormInputField name="name" required formState={formState} disabled={pending} />
                    <FormInputField name="variant" formState={formState} disabled={pending} />
                    <FormInputField name="desc" label="Description" formState={formState} disabled={pending} />
                </FieldGroup>
                <FieldGroup>
                    <h2>Product Attributes</h2>
                    <FormInputField name="workingSize" formState={formState} disabled={pending} />
                    <FormInputField name="packageSize" formState={formState} disabled={pending} />
                    <FormInputField name="volume" formState={formState} disabled={pending} />
                    <FormInputField name="packageWeight" formState={formState} disabled={pending} />
                </FieldGroup>
                <FieldGroup>
                    <h2>Pricing</h2>
                    <FormInputField name="localPrice" formState={formState} disabled={pending} />
                </FieldGroup>
                <Button className="mt-4" type="submit" disabled={pending}>Save</Button>
            </Form>
        </div>
    );
}