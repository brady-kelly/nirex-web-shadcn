"use client";

import { updateCategory } from "@/lib/products/actions/category";
import type { EditCategoryFormState } from "@/lib/products/schemas";
import { useActionState, useEffect } from "react";
import Form from "next/form"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea as TextArea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { redirect } from "next/navigation";

export interface CategoryEditorProps {
    id: number,
    name: string,
    desc?: string
}

export function CategoryEditor({ id, name, desc }: CategoryEditorProps) {
    const initialState: EditCategoryFormState = {
        values: {
            id: id,
            name: name,
            desc: desc ?? "",
        },
        errors: {
        },
        success: false,
    }
    const [formState, formAction, pending] = useActionState<EditCategoryFormState, FormData>
        (updateCategory, initialState);

    useEffect(() => {
        if (formState.success) {
            redirect("/admin/category/list");
        }
    }, [formState.success]);

    const formId = "catEditForm";
    return (
        <div className="w-full">
            <h1 className="pb-3">Edit Category: {name}</h1>
            <Form action={formAction} id={formId}>
                <FieldGroup>
                    <Input id="id" name="id" type="hidden" defaultValue={formState.values?.id} readOnly></Input>
                    <Field data-invalid={!!formState.errors?.name?.length}>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                            id="name"
                            name="name"
                            defaultValue={formState.values?.name}
                            disabled={pending}
                            aria-invalid={!!formState.errors?.name?.length}
                            placeholder="Name of product category"
                            autoComplete="off"
                        />
                        {formState.errors?.name && (
                            <FieldError>{formState.errors.name[0]}</FieldError>
                        )}
                    </Field>
                    <Field data-invalid={!!formState.errors?.desc?.length}>
                        <FieldLabel htmlFor="desc">Description</FieldLabel>
                        <TextArea
                            id="desc"
                            name="desc"
                            defaultValue={formState.values?.desc}
                            disabled={pending}
                            aria-invalid={!!formState.errors?.desc?.length}
                            placeholder="Test describing this category"
                            autoComplete="off"
                        ></TextArea>
                        {formState.errors?.desc && (
                            <FieldError>{formState.errors.desc[0]}</FieldError>
                        )}
                    </Field>
                </FieldGroup>
                <Field orientation="horizontal">
                    <Button type="submit" disabled={pending} form={formId}>
                        {pending && <Spinner />}
                        Save
                    </Button>
                </Field>
            </Form>
        </div>
    );
}