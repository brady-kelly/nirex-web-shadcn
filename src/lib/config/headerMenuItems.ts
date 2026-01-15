import type { MenuItemDetails } from "@/components/shared/menuItem";

export const adminMenuItems: MenuItemDetails[] = [
  {
    text: "Website",
    subItems: [
      {
        text: "Contact Details",
      },
    ],
  },
  {
    text: "Products",
    subItems: [
      {
        text: "Products",
      },
      {
        text: "Categories",
      },
    ],
  },
];

export const headerMenuItems: MenuItemDetails[] = [
  {
    text: "About",
    subItems: [
      {
        text: "About Nirex Tech",
      },
      {
        text: "Nirex Tech Offerings",
      },
      {
        text: "What our clients say",
      },
    ],
  },
  {
    text: "Products",
    subItems: [
      {
        text: "Type One products",
      },
      {
        text: "Type Two products",
      },
    ],
  },
  {
    text: "Services",
  },
  {
    text: "Contact Us",
    subItems: [
      {
        text: "Request a Quote",
      },
      {
        text: "Need Support?",
      },
    ],
  },
];
