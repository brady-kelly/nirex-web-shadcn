"use client";

import { updateCategory } from "@/lib/products/actions/category";
import type { EditCategoryFormState } from "@/lib/products/schemas";
import { useActionState } from "react";

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


export function CategoryEditor({ id, name, desc }: CategoryEditorProps) {
    const [formState, formAction, pending] = useActionState<EditCategoryFormState, FormData>
        (updateCategory, initialState);
    return (
        <div className="w-full max-w-md">
            <h1 className="pb-3">Edit Category: {name}</h1>
        </div>
    );
}