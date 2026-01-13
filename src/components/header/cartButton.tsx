"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export function CartButton(props: { inCartCount: number }) {
    return (
        <div className="flex flex-row">
            <Button variant="ghost" size="icon">
                <ShoppingCart />
            </Button>
            <div className="pb-3 text-xs">
                {props.inCartCount}
            </div>
        </div>
    );
}