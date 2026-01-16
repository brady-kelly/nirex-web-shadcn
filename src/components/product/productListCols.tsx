import type { ColumnDef } from "@tanstack/react-table";
import type { Product } from "../../../generated/prisma/client";
import Link from "next/link";

export const productListCols: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "variant",
        header: "variant",
    },
    {
        accessorKey: "desc",
        header: "Description",
    },
    {
        accessorKey: "localPrice",
        header: "Price"
    }
    {
        id: "actions",
        cell: ({ row }) => {
            const prod = row.original;
            const del = `/admin/product/del/${prod.id}`;
            const edit = `/admin/category/edit/${prod.id}`;
            return (
                <div className="inline-grid grid-cols-2 gap-2">
                    <span><Link href={del}>Delete</Link></span>
                    <span><Link href={edit}>Edit</Link></span>
                </div>
            );
        }
    }
]
