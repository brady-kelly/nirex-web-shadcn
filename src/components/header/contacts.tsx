// biome-ignore assist/source/organizeImports: too bad
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
        //const phone: string = details.phone.value;
        <div className="navbar w-full flex justify-between overflow-hidden">
            <div id="office-comms" className="flex gap-1.5">
                {phone && phone.length > 0 &&
                    <Item size="sm">
                        <ItemActions>
                            <Smartphone />
                        </ItemActions>
                        <a
                            href={`tel:${phone}`}
                            title="Link for Contact Phone"
                        >
                            <ItemContent>
                                <ItemDescription >{phone}</ItemDescription>
                            </ItemContent>
                        </a>
                    </Item>
                }
                {email && email.length > 0 &&
                    <Item size="sm">
                        <ItemActions>
                            <Mail />
                        </ItemActions>
                        <a
                            href={`mailto:${email}`}
                            title="Link for Contact Email"
                        >
                            <ItemContent>
                                <ItemDescription >{email}</ItemDescription>
                            </ItemContent>
                        </a>
                    </Item>
                }
                {address && address.length > 0 &&
                    <Item size="sm">
                        <ItemActions>
                            <MapPin />
                        </ItemActions>
                        <a href={addressUrl} title="Maps Link for Contact Address">
                            <ItemContent>
                                <ItemDescription >{address}</ItemDescription>
                            </ItemContent>
                        </a>
                    </Item>
                }
            </div>
            <div id="social-media" className="flex gap-1 max-h-10">
                {facebook && facebook.length > 0 &&
                    <Item size="sm">
                        <ItemMedia>
                            <a href={facebook} title="Facebook Link">
                                <Image
                                    src="/icons/facebook.png"
                                    alt="Facebook Logo"
                                    width={24}
                                    height={24}
                                    className="aspect-square w-full object-cover"
                                ></Image>
                            </a>
                        </ItemMedia>
                    </Item>
                }
                {youtube && youtube.length > 0 &&
                    <Item size="sm">
                        <ItemMedia>
                            <a href={youtube} title="Youtube Link">
                                <Image
                                    src="/icons/youtube.png"
                                    alt="Youtube Logo"
                                    width={24}
                                    height={24}
                                    className="aspect-square w-full object-cover"
                                />
                            </a>
                        </ItemMedia>
                    </Item>
                }
                {instagram && instagram.length > 0 &&
                    < Item size="sm">
                        <ItemMedia>
                            <a href={instagram} title="Instagram Link">
                                <Image
                                    src="/icons/instagram.png"
                                    alt="Instagram Logo"
                                    width={24}
                                    height={24}
                                    className="aspect-square w-full object-cover"
                                />
                            </a>
                        </ItemMedia>
                    </Item>
                }
            </div>
        </div >
    );
}
