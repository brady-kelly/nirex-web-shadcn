/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { Mail, MapPin, Smartphone } from "lucide-react";
import { find } from "es-toolkit/compat";
import Image from "next/image";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
} from "../ui/item";
import type { SiteContactItem } from "@/lib/types/config";
import { IconContactItem } from "../shared/iconContactItem";
import { LogoContactItem } from "../shared/logoContactItem";

export default function ContactsBar(contacts: SiteContactItem[]) {

    function getContactValue(name: string): string | undefined {
        const contact = find(contacts, { name });
        return contact ? contact.value : undefined;
    }

    const addressUrl = getContactValue("mapsUrl");
    const phone = getContactValue("phone");
    const email = getContactValue("email");
    const address = getContactValue("address");
    const facebook = getContactValue("facebook");
    const youtube = getContactValue("youtube");
    const instagram = getContactValue("instagram");

    return (
        <div className="navbar w-full flex justify-between overflow-hidden bg-[#3C5387] text-white">
            <div id="office-comms" className="flex gap-1.5">
                {phone && phone.length > 0 &&
                    <IconContactItem content={phone} type="phone"><Smartphone /></IconContactItem>
                }
                {email && email.length > 0 &&
                    <IconContactItem content={email} type="email"><Mail /></IconContactItem>
                }
                {address && address.length > 0 &&
                    <Item size="sm">
                        <ItemActions>
                            <MapPin />
                        </ItemActions>
                        <a href={addressUrl} title="Maps Link for Contact Address">
                            <ItemContent>
                                <ItemDescription className="text-white" >{address}</ItemDescription>
                            </ItemContent>
                        </a>
                    </Item>
                }
            </div>
            <div id="social-media" className="flex gap-1 max-h-10">
                {facebook && facebook.length > 0 && (
                    <LogoContactItem url={facebook} type="Facebook" logoSrc="facebook-white.png"></LogoContactItem>
                )}
                {youtube && youtube.length > 0 && (
                    <LogoContactItem url={youtube} type="Youtube" logoSrc="youtube.png"></LogoContactItem>
                )}
                {instagram && instagram.length > 0 && (
                    <LogoContactItem url={instagram} type="Instagram" logoSrc="instagram-white.png"></LogoContactItem>
                )}
            </div>
        </div >
    );
}
