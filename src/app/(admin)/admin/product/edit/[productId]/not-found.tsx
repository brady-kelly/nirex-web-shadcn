"use client";

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProductNotFound() {
    const params = useParams()
    const productid = params.productid

    return (
        <div className="p-4">
            <h1>Product Not Found</h1>
            <p>Product with ID: <strong>{productid}</strong> was not found.</p>
            <Link href="/product/view" className="text-blue-500 underline">
                Back to Product List
            </Link>
        </div>
    )
}
