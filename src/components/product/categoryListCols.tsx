import type { ColumnDef } from "@tanstack/react-table";
import type { Category } from "../../../generated/prisma/client";
import Link from "next/link";

export const categoryListCols: ColumnDef<Category>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "desc",
        header: "Description",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const cat = row.original;
            const del = `/admin/category/del/${cat.id}`;
            const edit = `/admin/category/edit/${cat.id}`;
            return (
                <div className="inline-grid grid-cols-2 gap-2">
                    <span><Link href={del}>Delete</Link></span>
                    <span><Link href={edit}>Edit</Link></span>
                </div>
            );
        }
    }
]
