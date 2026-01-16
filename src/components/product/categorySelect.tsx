/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";
import type { Category } from "../../../generated/prisma/client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { defaultCategoryId } from "@/lib/products/defaults";

export interface CategorySelectProps {
    label?: string;
    value?: number;
    categories: Category[];
    onChange?: (date?: Date) => void;
    onBlur?: () => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ label, value, categories }) => {
    return (
        <Select value={(value || defaultCategoryId).toString()}>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label || "Category"}</SelectLabel>
                    {categories.map((item, index) =>
                        <SelectItem key={index} value={item.id.toString()}>{item.name}</SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
};