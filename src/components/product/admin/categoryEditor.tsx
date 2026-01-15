"use client";

import { updateCategory } from "@/lib/products/actions/category";
import type { EditCategoryFormState } from "@/lib/products/schemas";
import router from "next/router";
import { useActionState, useEffect } from "react";
import { toast } from "sonner"

export interface CategoryEditorProps {
    id: string,
    name: string,
    desc?: string
}

// const initialState = {
//     values: {
//         title: "",
//         description: "",
//     },
//     errors: null,
//     success: false,
// }

const initialState: EditCategoryFormState = {
    errors: {
    },
    success: false,
}


export function CategoryEditor({ id, name, desc }: CategoryEditorProps) {
    const [formState, formAction, pending] = useActionState<EditCategoryFormState, FormData>
        (updateCategory, initialState);

    useEffect(() => {
        if (formState.success) {
            toast("Category updated");
            router.push("/admin/category/list");
        }
    }, [formState.success]);

    return (
        <div className="w-full max-w-md">
            <h1 className="pb-3">Edit Category: {name}</h1>
        </div>
    );
}