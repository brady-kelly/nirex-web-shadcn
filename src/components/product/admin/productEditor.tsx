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
import { FieldGroup, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { FormSelect } from "../../shared/formSelect";
import { CategorySelect } from "@/components/product/categorySelect";

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
    const cats = categories.map((c) => { return { value: c.id.toString(), text: c.name } });
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
                    <FieldSet>
                        <FieldLegend>Product Properties</FieldLegend>
                        <Input id="id" name="id" type="hidden" defaultValue={formState.values?.id} readOnly></Input>
                        <FormInputField name="name" required formState={formState} disabled={pending} />
                        <FormInputField name="variant" formState={formState} disabled={pending} />
                        <FormInputField name="desc" label="Description" formState={formState} disabled={pending} />
                    </FieldSet>
                    <FieldSeparator className="my-2" />
                </FieldGroup>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Category</FieldLegend>
                        <FormSelect name="categoryId" label="Category" formState={formState} items={cats} />
                    </FieldSet>
                    <FieldSeparator className="my-2" />
                </FieldGroup>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Product Attributes</FieldLegend>
                        <FormInputField name="workingSize" formState={formState} disabled={pending} />
                        <FormInputField name="packageSize" formState={formState} disabled={pending} />
                        <FormInputField name="volume" formState={formState} disabled={pending} />
                        <FormInputField name="packageWeight" formState={formState} disabled={pending} />
                    </FieldSet>
                    <FieldSeparator className="my-2" />
                </FieldGroup>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Pricing</FieldLegend>
                        <FormInputField name="localPrice" formState={formState} disabled={pending} />
                    </FieldSet>
                    <FieldSeparator className="my-2" />
                </FieldGroup>
                <Button type="submit" disabled={pending}>Save</Button>
            </Form>
        </div>
    );
}