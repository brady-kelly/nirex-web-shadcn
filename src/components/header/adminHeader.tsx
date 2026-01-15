import { MenuItemDetails } from "../shared/menuItem";
import { AdminHeaderMenu } from "./adminHeaderMenu";

export interface AdminHeaderProps {
    items: MenuItemDetails[];
}

export function SiteHeader(props: AdminHeaderProps) {
    return (
        <div className="pt-10">
            <AdminHeaderMenu items={props.items} />
        </div>
    );
}