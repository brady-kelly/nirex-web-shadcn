import { Button } from "@/components/ui/button"
import { ShoppingCart, Search } from "lucide-react";

export function HeaderButtons(inCartCount: number) {
    return (
        <div className="flex flex-row justify-between">
            <Button variant="outline" size="icon">
                <ShoppingCart />
            </Button>
            <Button variant="outline" size="icon">
                <Search />
            </Button>
        </div>
    );
}